import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrivacyPolicyPublicComponent } from "./privacy-policy-public/components/privacy-policy-public.component";
import { PrivacyPolicyPublicContainerComponent } from "./privacy-policy-public/containers/privacy-policy-public-container.component";
import { PublicPagesRoutingModule } from "./public-pages-routing.module";
import { TermsAndConditionsPublicComponent } from "./terms-and-conditions-public/components/terms-and-conditions-public.component";
import { TermsAndConditionsPublicContainerComponent } from "./terms-and-conditions-public/containers/terms-and-conditions-public-container.component";

@NgModule({
  declarations: [
    PrivacyPolicyPublicComponent,
    PrivacyPolicyPublicContainerComponent,
    TermsAndConditionsPublicContainerComponent,
    TermsAndConditionsPublicComponent,
  ],
  imports: [CommonModule, PublicPagesRoutingModule],
})
export class PublicPagesModule {}
