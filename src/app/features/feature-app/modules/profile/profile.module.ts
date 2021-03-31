import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { BillingComponent } from "./components/billing/billing.component";
import { CompanyProfileComponent } from "./components/company-profile/company-profile.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { UpdatePasswordComponent } from "./components/update-password/update-password.component";
import { ProfileContainerComponent } from "./containers/profile/profile-container.component";
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
  declarations: [
    ProfileContainerComponent,
    ProfileComponent,
    CompanyProfileComponent,
    UpdatePasswordComponent,
    BillingComponent,
  ],
  imports: [SharedModule, ProfileRoutingModule],
})
export class ProfileModule {}
