import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminPropertyContainerComponent } from "./containers/admin-property-container/admin-property-container.component";

const routes: Routes = [
  {
    path: "",
    component: AdminPropertyContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPropertyRoutingModule {}
