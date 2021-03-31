import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminAddPropertyContainerComponent } from "./containers/admin-add-property-container/admin-add-property-container.component";

const routes: Routes = [
  {
    path: "",
    component: AdminAddPropertyContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAddPropertyRoutingModule {}
