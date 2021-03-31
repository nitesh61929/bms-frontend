import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@core/components";
import { IVerifyOTPPayload } from "./../../../../core/interfaces/verify-otp-payload";

@Component({
  selector: "app-sign-up-otp",
  templateUrl: "./sign-up-otp.component.html",
})
export class SignUpOtpComponent extends BaseComponent implements OnInit {
  @Output() verifyOTP: EventEmitter<IVerifyOTPPayload> = new EventEmitter<IVerifyOTPPayload>();
  signUpOTPForm: FormGroup;
  mobileNumber: string;

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.mobileNumber = this.activatedRoute.snapshot.paramMap.get("mobileNumber");
    if (this.mobileNumber) {
      this.setSignUpOTPForm();
    }
  }

  private setSignUpOTPForm() {
    this.signUpOTPForm = this.formBuilder.group({
      mobileNumber: [this.mobileNumber],
      otpToken: ["", [Validators.required]],
    });
  }

  onSubmit() {
    if (this.signUpOTPForm.valid) {
      this.verifyOTP.emit(this.signUpOTPForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
