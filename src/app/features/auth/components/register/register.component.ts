import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components/base.component";
import { IRegisterMobileNumberPayload } from "@core/interfaces/register-mobile-number-payload";
import { CustomValidators } from "@core/utilities";
import { Observable } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent extends BaseComponent implements OnInit {
  @Output()
  registerMobileNumber: EventEmitter<IRegisterMobileNumberPayload> = new EventEmitter<IRegisterMobileNumberPayload>();
  @Input() error$: Observable<Error>;

  registrationForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.buildRegistrationForm();
    this.error$.subscribe((err) => {
      if (err && this.registrationForm) {
        this.errorMessageService.handleServerSideError(this.registrationForm, err);
      }
    });
  }

  private buildRegistrationForm(): void {
    this.registrationForm = this.formBuilder.group({
      mobileNumber: ["", [Validators.required, CustomValidators.inputLengthValidator(10)]],
    });
  }

  onGenerateOTP() {
    if (this.registrationForm.valid) {
      this.registerMobileNumber.emit(this.registrationForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  onLoginWithPassword() {
    this.redirectTo("auth/password-login");
  }
}
