import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PermissionGuard } from "@core/guards/permission/permission.guard";
import { StaffsContainerComponent } from "./containers/staffs-container/staffs-container.component";

const routes: Routes = [
  {
    path: "",
    component: StaffsContainerComponent,
    data: {
      hasAccess: AppPermissions.OWNER_STAFF_LIST,
    },
    canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffsRoutingModule {}
