import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PermissionGuard } from "@core/guards/permission/permission.guard";
import { UnitsContainerComponent } from "./containers/units/units-container.component";

const routes: Routes = [
  {
    path: "",
    component: UnitsContainerComponent,
    data: {
      hasAccess: AppPermissions.UNIT_LIST,
    },
    canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsRoutingModule {}
