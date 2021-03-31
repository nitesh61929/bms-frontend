import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { AdminUsersRoutingModule } from "./admin-users-routing.module";
import { AdminUsersComponent } from "./components/admin-users/admin-users.component";
import { AdminUsersContainerComponent } from "./containers/admin-users-container/admin-users-container.component";
import { AdminUsersEffects } from "./store/effects/admin-users.effects";
import * as fromAdminUsers from "./store/reducers/admin-users.reducer";

@NgModule({
  declarations: [AdminUsersContainerComponent, AdminUsersComponent],
  imports: [
    CommonModule,
    AdminUsersRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromAdminUsers.adminUsersFeatureKey, fromAdminUsers.adminUsersReducer),
    EffectsModule.forFeature([AdminUsersEffects]),
  ],
})
export class AdminUsersModule {}
