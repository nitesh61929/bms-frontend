import { NgModule } from "@angular/core";
import { SharedModule } from "../../../../shared/shared.module";
import { AdminDashboardRoutingModule } from "./admin-dashboard.routing.module";
import { AdminDashboardComponent } from "./components/admin-dashboard.component";
import { AdminDashboardContainerComponent } from "./containers/admin-dashboard-container.component";

@NgModule({
  declarations: [AdminDashboardContainerComponent, AdminDashboardComponent],
  imports: [AdminDashboardRoutingModule, SharedModule],
})
export class AdminDashboardModule {}
