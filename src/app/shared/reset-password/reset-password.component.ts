import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { CustomValidators } from "@core/utilities";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BaseComponent } from "./../../core/components/base.component";
import {
  resetPassword,
  resetPasswordSuccess,
  verifyForgotPasswordLink,
  verifyForgotPasswordLinkFailure,
  verifyForgotPasswordLinkSuccess,
} from "./../store/actions/profile.actions";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
})
export class ResetPasswordComponent extends BaseComponent implements OnInit {
  resetPasswordForm: FormGroup;
  error$: Observable<Error>;
  verificationId: string;
  verificationCode: string;
  destroyed$ = new Subject<boolean>();
  isRequestVerified: boolean = false;

  constructor(
    private store: Store<any>,
    private activatedRoute: ActivatedRoute,
    verifyForgotPasswordLinkSuccess$: Actions,
    verifyForgotPasswordLinkFailure$: Actions,
    resetPasswordSuccess$: Actions
  ) {
    super();

    verifyForgotPasswordLinkSuccess$
      .pipe(ofType(verifyForgotPasswordLinkSuccess(null)), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.isRequestVerified = true;
      });

    verifyForgotPasswordLinkFailure$
      .pipe(ofType(verifyForgotPasswordLinkFailure(null)), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.redirectTo(AppRoutes.INVALID_LINK);
      });

    resetPasswordSuccess$.pipe(ofType(resetPasswordSuccess(null)), takeUntil(this.destroyed$)).subscribe((d) => {
      if (Utils.urlIsApp()) {
        this.redirectTo(AppRoutes.LOGIN_WITH_PASSWORD);
      } else if (Utils.urlIsAdmin()) {
        this.redirectTo(AppRoutes.ADMIN_LOGIN);
      }
    });
  }

  ngOnInit(): void {
    this.getVerificationPayload();
    this.setResetPasswordForm();
    this.error$ = this.store.select((store) => store.sharedModule.profile.resetPasswordError);
    this.error$.subscribe((err) => {
      if (err && this.resetPasswordForm) {
        this.errorMessageService.handleServerSideError(this.resetPasswordForm, err);
      }
    });
  }

  private getVerificationPayload() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.verificationId = params.u;
      this.verificationCode = params.c;
      this.verifyForgotPasswordRequest();
    });
  }

  verifyForgotPasswordRequest() {
    const payload = {
      id: this.verificationId,
      token: this.verificationCode,
    };
    this.store.dispatch(verifyForgotPasswordLink({ payload }));
  }

  private setResetPasswordForm() {
    this.resetPasswordForm = this.formBuilder.group(
      {
        password: ["", [Validators.required, CustomValidators.isValidPassword()]],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: CustomValidators.checkPassword("password", "confirmPassword"),
      }
    );
  }

  onResetPassword() {
    if (this.resetPasswordForm.valid) {
      const payload = {
        id: this.verificationId,
        token: this.verificationCode,
        password: this.resetPasswordForm.get("password").value,
      };
      this.store.dispatch(resetPassword({ payload }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
