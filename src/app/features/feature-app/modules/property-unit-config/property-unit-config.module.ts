import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { MaintenanceChargeComponent } from "./components/unit-config/maintenance-charge/maintenance-charge.component";
import { UnitConfigComponent } from "./components/unit-config/unit-config.component";
import { UnitConfigContainerComponent } from "./containers/unit-config-container/unit-config-container.component";
import { PropertyUnitConfigRoutingModule } from "./property-unit-config-routing.module";

@NgModule({
  declarations: [UnitConfigComponent, MaintenanceChargeComponent, UnitConfigContainerComponent],
  imports: [SharedModule, PropertyUnitConfigRoutingModule],
})
export class PropertyUnitConfigModule {}
