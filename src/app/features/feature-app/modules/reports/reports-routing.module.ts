import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GatepassReportContainerComponent } from "./containers/gatepass-report-container/gatepass-report-container.component";
import { PanicAlertReportContainerComponent } from "./containers/panic-alert-report-container/panic-alert-report-container.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "panic-alert",
    pathMatch: "full",
  },
  {
    path: "panic-alert",
    component: PanicAlertReportContainerComponent,
  },
  {
    path: "gatepass",
    component: GatepassReportContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
