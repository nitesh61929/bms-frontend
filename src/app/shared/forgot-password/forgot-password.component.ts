import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, NgForm, Validators } from "@angular/forms";
import { AppRoutes } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BaseComponent } from "./../../core/components/base.component";
import { forgotPassword, forgotPasswordSuccess } from "./../store/actions/profile.actions";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
})
export class ForgotPasswordComponent extends BaseComponent implements OnInit {
  @ViewChild("forgotPasswordNgForm") forgotPasswordNgForm: NgForm;
  forgotPasswordForm: FormGroup;
  error$: Observable<Error>;
  destroyed$ = new Subject<boolean>();
  isEmailSent: boolean = false;

  constructor(private store: Store<any>, forgotPasswordSuccess$: Actions) {
    super();

    forgotPasswordSuccess$.pipe(ofType(forgotPasswordSuccess(null)), takeUntil(this.destroyed$)).subscribe((d) => {
      this.isEmailSent = true;
      this.forgotPasswordNgForm.resetForm("");
    });
  }

  ngOnInit(): void {
    this.setForgotPasswordForm();
    this.error$ = this.store.select((store) => store.sharedModule.profile.forgotPasswordError);
    this.error$.subscribe((err) => {
      if (err && this.forgotPasswordForm) {
        this.errorMessageService.handleServerSideError(this.forgotPasswordForm, err);
      }
    });
  }

  private setForgotPasswordForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      emailSendUrl: [this.getVerificationUrl()],
    });
  }

  onSubmitForgotPassword() {
    if (this.forgotPasswordForm.valid) {
      this.store.dispatch(forgotPassword({ payload: this.forgotPasswordForm.value }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  goToLogin() {
    if (Utils.urlIsApp()) {
      this.redirectTo(AppRoutes.LOGIN_WITH_PASSWORD);
    } else if (Utils.urlIsAdmin()) {
      this.redirectTo(AppRoutes.ADMIN_LOGIN);
    }
  }

  getVerificationUrl() {
    let origin = window.location.origin;
    if (origin.slice(-1) == "/") {
      origin = origin.slice(0, -1) + "";
    }
    if (Utils.urlIsApp()) {
      return origin + "/" + AppRoutes.RESET_PASSWORD;
    } else if (Utils.urlIsAdmin()) {
      return origin + "/" + AppRoutes.ADMIN_RESET_PASSWORD;
    }
  }
}
