import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminProfileContainerComponent } from "./containers/admin-profile-container/admin-profile-container.component";

const routes: Routes = [
  {
    path: "",
    component: AdminProfileContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProfileRoutingModule {}
