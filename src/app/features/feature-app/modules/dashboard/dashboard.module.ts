import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardService } from "./services";

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, DashboardRoutingModule],
  providers: [DashboardService],
})
export class DashboardModule {}
