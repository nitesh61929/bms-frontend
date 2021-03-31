import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components/base.component";
import { CustomValidators } from "@core/utilities/custom-validator";
import { ICreateUpdatePassword } from "@shared/interfaces";
import { Observable } from "rxjs";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent extends BaseComponent implements OnInit {
  @Output() changePassword: EventEmitter<ICreateUpdatePassword> = new EventEmitter<ICreateUpdatePassword>();
  @Input() error$: Observable<Error>;
  changePasswordForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setChangePasswordForm();
    this.error$.subscribe((err) => {
      if (err && this.changePasswordForm) {
        this.errorMessageService.handleServerSideError(this.changePasswordForm, err);
      }
    });
  }

  private setChangePasswordForm() {
    this.changePasswordForm = this.formBuilder.group(
      {
        oldPassword: ["", [Validators.required]],
        newPassword: ["", [Validators.required, CustomValidators.isValidPassword()]],
        confirmPassword: ["", [Validators.required]],
      },
      {
        validator: CustomValidators.checkPassword("newPassword", "confirmPassword"),
      }
    );
  }

  onUpdatePassword() {
    if (this.changePasswordForm.valid) {
      this.changePassword.emit(this.changePasswordForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
