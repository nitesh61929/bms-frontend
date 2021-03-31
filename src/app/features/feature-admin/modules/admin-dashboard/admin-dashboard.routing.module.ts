import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardContainerComponent } from "./containers/admin-dashboard-container.component";

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
