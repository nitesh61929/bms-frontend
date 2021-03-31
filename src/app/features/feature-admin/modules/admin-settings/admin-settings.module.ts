import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { AdminSettingsRoutingModule } from "./admin-settings-routing.module";
import { AdminSettingsComponent } from "./components/admin-settings/admin-settings.component";
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";
import { TermsAndConditionsComponent } from "./components/terms-and-conditions/terms-and-conditions.component";
import { AdminSettingsContainerComponent } from "./containers/admin-settings/admin-settings-container.component";

@NgModule({
  declarations: [
    AdminSettingsContainerComponent,
    AdminSettingsComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
  ],
  imports: [CommonModule, SharedModule, AdminSettingsRoutingModule],
})
export class AdminSettingsModule {}
