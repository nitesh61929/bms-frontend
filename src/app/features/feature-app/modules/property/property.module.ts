import { NgModule } from "@angular/core";
import { CrystalLightboxModule } from "@crystalui/angular-lightbox";
import { SharedModule } from "@shared/shared.module";
import { BasicPropertyDetailComponent } from "./components/basic-property-detail/basic-property-detail.component";
import { PropertyDetailFormComponent } from "./components/property-detail-form/property-detail-form.component";
import { PropertyStructureComponent } from "./components/property-structure/property-structure.component";
import { PropertyTreeComponent } from "./components/property-tree/property-tree.component";
import { PropertyComponent } from "./components/property/property.component";
import { PropertyDetailFormContainerComponent } from "./containers/property-detail-form/property-detail-form-container.component";
import { PropertyContainerComponent } from "./containers/property/property-container.component";
import { PropertyRoutingModule } from "./property-routing.module";

@NgModule({
  declarations: [
    PropertyContainerComponent,
    PropertyComponent,
    BasicPropertyDetailComponent,
    PropertyDetailFormContainerComponent,
    PropertyDetailFormComponent,
    PropertyStructureComponent,
    PropertyTreeComponent,
  ],
  imports: [PropertyRoutingModule, SharedModule, CrystalLightboxModule],
})
export class PropertyModule {}
