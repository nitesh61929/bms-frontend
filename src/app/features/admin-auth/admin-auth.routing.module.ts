import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordComponent } from "@shared/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "@shared/reset-password/reset-password.component";
import { AdminAuthComponent } from "./../admin-auth/admin-auth.component";
import { AdminLoginContainerComponent } from "./../admin-auth/containers/admin-login/admin-login-container.component";

const routes: Routes = [
  {
    path: "",
    component: AdminAuthComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
      },
      {
        path: "login",
        component: AdminLoginContainerComponent,
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
      },
      {
        path: "reset-password",
        component: ResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAuthRoutingModule {}
