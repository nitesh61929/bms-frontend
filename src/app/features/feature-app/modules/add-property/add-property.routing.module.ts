import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PermissionGuard } from "@core/guards/permission/permission.guard";
import { AddPropertyContainerComponent } from "./containers/add-property-container/add-property-container.component";

const routes: Routes = [
  {
    path: "",
    component: AddPropertyContainerComponent,
    data: {
      hasAccess: AppPermissions.PROPERTY_CREATE,
    },
    canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPropertyRoutingModule {}
