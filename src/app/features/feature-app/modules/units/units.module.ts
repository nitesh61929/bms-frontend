import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { InviteTenantComponent } from "./components/invite-tenant/invite-tenant.component";
import { RentConfigComponent } from "./components/rent-config/rent-config.component";
import { UnitDetailMaintenanceChargeComponent } from "./components/unit-detail-maintenance-charge/unit-detail-maintenance-charge.component";
import { UnitListComponent } from "./components/unit-list/unit-list.component";
import { UnitsComponent } from "./components/units/units.component";
import { UnitDetailContainerComponent } from "./containers/unit-detail/unit-detail-container.component";
import { UnitListContainerComponent } from "./containers/unit-list/unit-list-container.component";
import { UnitsContainerComponent } from "./containers/units/units-container.component";
import { UnitsRoutingModule } from "./units-routing.module";

@NgModule({
  declarations: [
    UnitsComponent,
    UnitsContainerComponent,
    UnitListContainerComponent,
    UnitListComponent,
    UnitDetailContainerComponent,

    InviteTenantComponent,
    UnitDetailMaintenanceChargeComponent,
    RentConfigComponent,
  ],
  imports: [SharedModule, UnitsRoutingModule],
})
export class UnitsModule {}
