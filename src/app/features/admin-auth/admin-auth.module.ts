import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { AdminAuthComponent } from "./admin-auth.component";
import { AdminAuthRoutingModule } from "./admin-auth.routing.module";
import { AdminLoginComponent } from "./components/admin-login/admin-login.component";
import { AdminLoginContainerComponent } from "./containers/admin-login/admin-login-container.component";
import { AdminAuthEffects } from "./store/effects/admin-auth.effects";
import { adminAuthReducer } from "./store/reducers/admin-auth.reducer";

@NgModule({
  declarations: [AdminLoginContainerComponent, AdminLoginComponent, AdminAuthComponent],
  imports: [
    SharedModule,
    AdminAuthRoutingModule,
    StoreModule.forFeature("adminAuth", adminAuthReducer),
    EffectsModule.forFeature([AdminAuthEffects]),
  ],
})
export class AdminAuthModule {}
