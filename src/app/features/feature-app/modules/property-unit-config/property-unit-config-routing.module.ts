import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnitConfigContainerComponent } from "./containers/unit-config-container/unit-config-container.component";

const routes: Routes = [
  {
    path: "",
    component: UnitConfigContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyUnitConfigRoutingModule {}
