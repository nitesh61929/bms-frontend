import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivacyPolicyPublicContainerComponent } from "./privacy-policy-public/containers/privacy-policy-public-container.component";
import { TermsAndConditionsPublicContainerComponent } from "./terms-and-conditions-public/containers/terms-and-conditions-public-container.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "privacy-policy",
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyPublicContainerComponent,
  },
  {
    path: "terms-and-conditions",
    component: TermsAndConditionsPublicContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPagesRoutingModule {}
