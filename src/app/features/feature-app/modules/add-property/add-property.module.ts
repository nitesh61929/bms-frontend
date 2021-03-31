import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { AddPropertyRoutingModule } from "./add-property.routing.module";
import { AddPropertyContainerComponent } from "./containers/add-property-container/add-property-container.component";

@NgModule({
  declarations: [AddPropertyContainerComponent],
  imports: [SharedModule, AddPropertyRoutingModule],
})
export class AddPropertyModule {}
