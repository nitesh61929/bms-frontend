import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { AdminAccountsRoutingModule } from "./admin-accounts-routing.module";
import { ActiveAccountsComponent } from "./components/active-accounts/active-accounts.component";
import { AdminAccountsComponent } from "./components/admin-accounts/admin-accounts.component";
import { InvitedAccountsComponent } from "./components/invited-accounts/invited-accounts.component";
import { ActiveAccountsContainerComponent } from "./containers/active-accounts-container/active-accounts-container.component";
import { AdminAccountsContainerComponent } from "./containers/admin-accounts-container/admin-accounts-container.component";
import { InvitedAccountsContainerComponent } from "./containers/invited-accounts-container/invited-accounts-container.component";
import { AdminAccountsEffects } from "./store/effects/admin-accounts.effects";
import * as fromAdminAccounts from "./store/reducers/admin-accounts.reducer";

@NgModule({
  declarations: [
    ActiveAccountsComponent,
    ActiveAccountsContainerComponent,
    AdminAccountsContainerComponent,
    AdminAccountsComponent,
    InvitedAccountsComponent,
    InvitedAccountsContainerComponent,
  ],
  imports: [
    SharedModule,
    AdminAccountsRoutingModule,
    CommonModule,
    StoreModule.forFeature(fromAdminAccounts.adminAccountFeatureKey, fromAdminAccounts.adminAccountsReducer),
    EffectsModule.forFeature([AdminAccountsEffects]),
  ],
})
export class AdminAccountsModule {}
