import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { ICreateUpdatePassword } from "@shared/interfaces";
import { Observable } from "rxjs";

@Component({
  selector: "app-create-password",
  templateUrl: "./create-password.component.html",
})
export class CreatePasswordComponent extends BaseComponent implements OnInit {
  @Output() createPassword: EventEmitter<ICreateUpdatePassword> = new EventEmitter<ICreateUpdatePassword>();
  @Input() error$: Observable<Error>;
  createPasswordForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setCreatePasswordForm();
    this.error$.subscribe((err) => {
      if (err && this.createPasswordForm) {
        this.errorMessageService.handleServerSideError(this.createPasswordForm, err);
      }
    });
  }

  private setCreatePasswordForm() {
    this.createPasswordForm = this.formBuilder.group(
      {
        password: ["", [Validators.required, CustomValidators.isValidPassword()]],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: CustomValidators.checkPassword("password", "confirmPassword"),
      }
    );
  }

  onCreatePassword() {
    if (this.createPasswordForm.valid) {
      this.createPassword.emit(this.createPasswordForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
