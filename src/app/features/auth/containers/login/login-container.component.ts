import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@core/components/base.component";
import { AppRoutes, StorageKeys } from "@core/enums";
import { ILoginWithOTPPayload } from "@core/interfaces/login-with-otp-payload";
import { IRegisterMobileNumberPayload } from "@core/interfaces/register-mobile-number-payload";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { RedirectionService } from "@shared/services";
import {
  getUserPropertyPermissions,
  getUserPropertyPermissionsSuccess,
  loadOwnerOnLoginSuccess,
} from "@shared/store/actions/property.actions";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { loginWithOTP, loginWithOTPSuccess, registerMobileNumber } from "../../store/actions/auth.actions";

@Component({
  selector: "app-login-container",
  templateUrl: "./login-container.component.html",
})
export class LoginContainerComponent extends BaseComponent implements OnInit {
  destroyed$ = new Subject<boolean>();
  mobileNumber: string;

  constructor(
    private store: Store<any>,
    loginWithOTPSuccess$: Actions,
    loadOwnerOnLoginSuccess$: Actions,
    getUserPropertyPermissionsSuccess$: Actions,
    private activatedRoute: ActivatedRoute,
    private redirectionService: RedirectionService
  ) {
    super();

    loginWithOTPSuccess$.pipe(ofType(loginWithOTPSuccess), takeUntil(this.destroyed$)).subscribe((res: any) => {
      const { id, name, email, mobileNumber, superAdmin, status } = res;
      this.storage.set(StorageKeys.USER, { id, name, email, mobileNumber, superAdmin, status });
      this.storage.set(StorageKeys.HAS_PASSWORD, res.hasPassword);
      this.storage.set(StorageKeys.REDIRECT_TO_ONBOARD_OWNER, res.canOnboardOwner);
      this.storage.set(StorageKeys.REDIRECT_TO_ONBOARD_PROPERTY, res.canOnboardProperty);
      this.storage.set(StorageKeys.HAS_CHANGED_PASSWORD, res.hasChangedPassword);
      this.storage.set(StorageKeys.ACCOUNT_TYPE, res.accountType);
    });

    loadOwnerOnLoginSuccess$
      .pipe(ofType(loadOwnerOnLoginSuccess), takeUntil(this.destroyed$))
      .subscribe((ownerData) => {
        this.onOwnerDetailSuccess(ownerData);
      });

    getUserPropertyPermissionsSuccess$
      .pipe(ofType(getUserPropertyPermissionsSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        const storagePermissions = this.storage.get(StorageKeys.USER_PERMISSIONS).concat(d.data);
        this.storage.set(StorageKeys.PERMISSIONS, storagePermissions);
        this.redirectAfterLogin();
      });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.mobileNumber = params.mobileNumber;
    });
  }

  /**
   * Redirect to respective page on owner detail fetch success
   * @param d
   */
  private onOwnerDetailSuccess(d: any) {
    if (d.data && d.data.length > 0) {
      if (d.data[0].property && d.data[0].property.length > 0) {
        this.storage.set(StorageKeys.ACTIVE_PROPERTY, d.data[0]?.property[0]?.id);
        delete d.data[0].property;
      }
      this.storage.set(StorageKeys.OWNER, d.data[0]);
      this.fetchPropertyPermissions();
    } else {
      this.redirectAfterLogin();
    }
  }

  private fetchPropertyPermissions() {
    const params = {
      ownerId: this.storage.get(StorageKeys.OWNER) ? this.storage.get(StorageKeys.OWNER).id : null,
      propertyId: this.storage.get(StorageKeys.ACTIVE_PROPERTY) ?? null,
    };
    this.store.dispatch(getUserPropertyPermissions({ params }));
  }

  /**
   * Redirect to respective pages once login and owner detail is fetched
   */
  private redirectAfterLogin() {
    let url: string = this.redirectionService.passwordRedirect();
    if (url === AppRoutes.ROOT) {
      url = this.redirectionService.onboardRedirect();
    }
    this.redirectTo(url);
  }

  onLoginWithOTP(loginWithOtpPayload: ILoginWithOTPPayload) {
    loginWithOtpPayload.mobileNumberOrEmail = this.mobileNumber;
    this.store.dispatch(loginWithOTP({ payload: loginWithOtpPayload }));
  }

  resendOtp(event) {
    const registerMobileNumberPayload: IRegisterMobileNumberPayload = { mobileNumber: this.mobileNumber };
    this.store.dispatch(registerMobileNumber({ payload: registerMobileNumberPayload }));
  }
}
