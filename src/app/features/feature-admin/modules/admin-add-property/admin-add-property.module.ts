import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { AdminAddPropertyRoutingModule } from "./admin-add-property-routing.module";
import { AdminAddPropertyContainerComponent } from "./containers/admin-add-property-container/admin-add-property-container.component";

@NgModule({
  declarations: [AdminAddPropertyContainerComponent],
  imports: [SharedModule, AdminAddPropertyRoutingModule],
})
export class AdminAddPropertyModule {}
