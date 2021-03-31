import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { AppRoutes } from "@core/enums";
import { IAdminAuthPayload } from "./../../../../shared/interfaces/admin-auth-payload";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
})
export class AdminLoginComponent extends BaseComponent implements OnInit {
  @Output() adminLogin: EventEmitter<IAdminAuthPayload> = new EventEmitter<IAdminAuthPayload>();
  adminLoginForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setAdminLoginForm();
  }

  private setAdminLoginForm() {
    this.adminLoginForm = this.formBuilder.group({
      mobileNumberOrEmail: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  onAdminLogin() {
    if (this.adminLoginForm.valid) {
      this.adminLogin.emit(this.adminLoginForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  onForgotPassword() {
    this.redirectTo(AppRoutes.ADMIN_FORGOT_PASSWORD);
  }
}
