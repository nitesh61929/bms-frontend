import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { FeatureAdminContainerComponent } from "./containers/feature-admin-container/feature-admin-container.component";
import { FeatureAdminRoutingModule } from "./feature-admin-routing.module";

@NgModule({
  declarations: [FeatureAdminContainerComponent],
  imports: [CommonModule, SharedModule, FeatureAdminRoutingModule],
})
export class FeatureAdminModule {}
