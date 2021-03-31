import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppRoutes, StorageKeys } from "@core/enums";
import { PermissionsService } from "@core/services";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { RedirectionService } from "@shared/services";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { loginWithOTP, loginWithOTPSuccess } from "../../store/actions/auth.actions";
import {
  getUserPropertyPermissions,
  getUserPropertyPermissionsSuccess,
  loadOwnerOnLoginSuccess,
} from "./../../../../shared/store/actions/property.actions";

@Component({
  selector: "app-login-with-password-container",
  templateUrl: "./login-with-password-container.component.html",
})
export class LoginWithPasswordContainerComponent extends BaseComponent implements OnInit {
  destroyed$ = new Subject<boolean>();

  constructor(
    private store: Store<any>,
    loginWithOTPSuccess$: Actions,
    loadOwnerOnLoginSuccess$: Actions,
    getUserPropertyPermissionsSuccess$: Actions,
    protected permissionService: PermissionsService,
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

    loadOwnerOnLoginSuccess$.pipe(ofType(loadOwnerOnLoginSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.onOwnerDetailSuccess(d);
    });

    getUserPropertyPermissionsSuccess$
      .pipe(ofType(getUserPropertyPermissionsSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        const storagePermissions = this.storage.get(StorageKeys.USER_PERMISSIONS).concat(d.data);
        this.storage.set(StorageKeys.PERMISSIONS, storagePermissions);
        this.redirectAfterLogin();
      });
  }

  ngOnInit(): void {}

  /**
   * Redirect to respective page on owner detail fetch success
   * @param d
   */
  private onOwnerDetailSuccess(d: any) {
    if (d.data && d.data.length > 0) {
      if (d.data[0]?.property && d.data[0].property.length > 0) {
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

  onLoginWithPassword(loginWithPasswordPayload: any) {
    this.store.dispatch(loginWithOTP({ payload: loginWithPasswordPayload }));
  }
}
