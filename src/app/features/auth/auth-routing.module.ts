import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@core/guards";
import { ForgotPasswordComponent } from "./../../shared/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./../../shared/reset-password/reset-password.component";
import { AuthComponent } from "./auth.component";
import { CreatePasswordContainerComponent } from "./containers/create-password/create-password-container.component";
import { LoginContainerComponent } from "./containers/login";
import { LoginWithPasswordContainerComponent } from "./containers/login-with-password/login-with-password-container.component";
import { RegisterContainerComponent } from "./containers/register";
import { SignUpGreetContainerComponent } from "./containers/sign-up-greet/sign-up-greet-container.component";
import { SignUpContainerComponent } from "./containers/sign-up/sign-up-container.component";
import { UpdatePasswordContainerComponent } from "./containers/update-password/update-password-container.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginContainerComponent,
      },
      {
        path: "",
        component: RegisterContainerComponent,
      },
      {
        path: "password-login",
        component: LoginWithPasswordContainerComponent,
      },
      {
        path: "sign-up",
        component: SignUpContainerComponent,
      },
      {
        path: "sign-up-greet",
        component: SignUpGreetContainerComponent,
      },
      {
        path: "update-password",
        component: UpdatePasswordContainerComponent,
      },
      {
        path: "create-password",
        component: CreatePasswordContainerComponent,
        canActivate: [AuthGuard],
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
export class AuthRoutingModule {}
