import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { ILoginWithOTPPayload } from "@core/interfaces/login-with-otp-payload";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent extends BaseComponent implements OnInit {
  @Output() loginWithOTP: EventEmitter<ILoginWithOTPPayload> = new EventEmitter<ILoginWithOTPPayload>();
  @Output() resendOtp: EventEmitter<any> = new EventEmitter<any>();
  loginForm: FormGroup;
  otpLogin: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.otpLogin = true;
    this.setLoginWithOTPForm();
  }

  onSubmitLoginForm(): void {
    if (this.loginForm.valid) {
      this.loginWithOTP.emit(this.loginForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  private setLoginWithOTPForm() {
    this.loginForm = this.formBuilder.group({
      otpLogin: [this.otpLogin],
      otpToken: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
  }

  onResendOtp() {
    this.resendOtp.emit();
  }
}
