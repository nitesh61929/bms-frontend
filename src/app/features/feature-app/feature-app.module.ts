import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { FeatureAppContainerComponent } from "./containers/feature-app-container/feature-app-container.component";
import { FeatureAppRoutingModule } from "./feature-app-routing.module";

@NgModule({
  declarations: [FeatureAppContainerComponent],
  imports: [CommonModule, SharedModule, FeatureAppRoutingModule],
})
export class FeatureAppModule {}
