import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "@shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { CreatePasswordComponent } from "./components/create-password/create-password.component";
import { LoginComponent } from "./components/login";
import { LoginWithPasswordComponent } from "./components/login-with-password/login-with-password.component";
import { RegisterComponent } from "./components/register/register.component";
import { SignUpGreetComponent } from "./components/sign-up-greet/sign-up-greet.component";
import { SignUpOtpComponent } from "./components/sign-up-otp/sign-up-otp.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { UpdatePasswordComponent } from "./components/update-password/update-password.component";
import { CreatePasswordContainerComponent } from "./containers/create-password/create-password-container.component";
import { LoginContainerComponent } from "./containers/login";
import { LoginWithPasswordContainerComponent } from "./containers/login-with-password/login-with-password-container.component";
import { RegisterContainerComponent } from "./containers/register";
import { SignUpGreetContainerComponent } from "./containers/sign-up-greet/sign-up-greet-container.component";
import { SignUpOtpContainerComponent } from "./containers/sign-up-otp/sign-up-otp-container.component";
import { SignUpContainerComponent } from "./containers/sign-up/sign-up-container.component";
import { UpdatePasswordContainerComponent } from "./containers/update-password/update-password-container.component";
import { AuthEffects } from "./store/effects/auth.effects";
import { authReducer } from "./store/reducers/auth.reducer";

@NgModule({
  declarations: [
    LoginComponent,
    LoginContainerComponent,
    AuthComponent,
    RegisterComponent,
    RegisterContainerComponent,
    LoginWithPasswordContainerComponent,
    LoginWithPasswordComponent,

    SignUpContainerComponent,
    SignUpComponent,
    SignUpOtpContainerComponent,
    SignUpOtpComponent,
    SignUpGreetContainerComponent,
    SignUpGreetComponent,
    UpdatePasswordContainerComponent,
    UpdatePasswordComponent,
    CreatePasswordComponent,
    CreatePasswordContainerComponent,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    TranslateModule,
    StoreModule.forFeature("auth", authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {
  constructor() {}
}
