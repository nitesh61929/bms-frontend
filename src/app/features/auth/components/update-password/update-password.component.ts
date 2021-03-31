import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Observable } from "rxjs";
import { ICreateUpdatePassword } from "./../../../../shared/interfaces/create-update-password";

@Component({
  selector: "app-update-password",
  templateUrl: "./update-password.component.html",
})
export class UpdatePasswordComponent extends BaseComponent implements OnInit {
  @Output() updatePassword: EventEmitter<ICreateUpdatePassword> = new EventEmitter<ICreateUpdatePassword>();
  @Input() error$: Observable<Error>;
  updatePasswordForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setUpdatePasswordForm();
    this.error$.subscribe((err) => {
      if (err && this.updatePasswordForm) {
        this.errorMessageService.handleServerSideError(this.updatePasswordForm, err);
      }
    });
  }

  private setUpdatePasswordForm() {
    this.updatePasswordForm = this.formBuilder.group(
      {
        oldPassword: ["", Validators.required],
        newPassword: ["", [Validators.required, CustomValidators.isValidPassword()]],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: CustomValidators.checkPassword("newPassword", "confirmPassword"),
      }
    );
  }

  onUpdatePassword() {
    if (this.updatePasswordForm.valid) {
      this.updatePassword.emit(this.updatePasswordForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
