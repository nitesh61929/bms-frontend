import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PermissionGuard } from "@core/guards/permission/permission.guard";
import { AddPropertyContainerComponent } from "../add-property/containers/add-property-container/add-property-container.component";
import { UnitConfigContainerComponent } from "../property-unit-config/containers/unit-config-container/unit-config-container.component";
import { PropertyContainerComponent } from "./containers/property/property-container.component";

const routes: Routes = [
  {
    path: "",
    component: PropertyContainerComponent,
  },
  {
    path: "add",
    component: AddPropertyContainerComponent,
    data: {
      hasAccess: AppPermissions.PROPERTY_CREATE,
    },
    canActivate: [PermissionGuard],
  },
  {
    path: "unit-setting",
    component: UnitConfigContainerComponent,
    data: {
      hasAccess: AppPermissions.CREATE_MAINTENANCE_CONFIG,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}
