import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { ILoginWithPasswordPayload } from "../../../../core/interfaces/login-with-password-payload";
import { AppRoutes } from "./../../../../core/enums/app-routes";

@Component({
  selector: "app-login-with-password",
  templateUrl: "./login-with-password.component.html",
})
export class LoginWithPasswordComponent extends BaseComponent implements OnInit {
  @Output() loginWithPassword: EventEmitter<ILoginWithPasswordPayload> = new EventEmitter<ILoginWithPasswordPayload>();
  loginWithPasswordForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setLoginWithPasswordForm();
  }

  private setLoginWithPasswordForm() {
    this.loginWithPasswordForm = this.formBuilder.group({
      mobileNumberOrEmail: ["", [Validators.required]],
      password: ["", Validators.required],
      otpLogin: [false],
    });
  }

  onLoginWithPassword() {
    if (this.loginWithPasswordForm.valid) {
      this.loginWithPassword.emit(this.loginWithPasswordForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  onOTPLogin() {
    this.redirectTo(AppRoutes.OTP_LOGIN);
  }

  onForgotPassword() {
    this.redirectTo(AppRoutes.FORGOT_PASSWORD);
  }
}
