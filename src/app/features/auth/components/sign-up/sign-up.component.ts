import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { IVerifyMobileNumberPayload } from "./../../../../core/interfaces/verify-mobile-number-payload";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
})
export class SignUpComponent extends BaseComponent implements OnInit {
  @Output()
  verifyMobileNumber: EventEmitter<IVerifyMobileNumberPayload> = new EventEmitter<IVerifyMobileNumberPayload>();
  @Input() invitationCode: string;
  signUpForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setSignUpForm();
  }

  private setSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      mobileNumber: ["", [Validators.required, CustomValidators.inputLengthValidator(10)]],
      invitationCode: [this.invitationCode],
    });
  }

  onGenerateOTP() {
    if (this.signUpForm.valid) {
      this.verifyMobileNumber.emit(this.signUpForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
