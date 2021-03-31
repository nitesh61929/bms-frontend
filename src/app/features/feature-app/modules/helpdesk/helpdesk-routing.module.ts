import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PermissionGuard } from "@core/guards/permission/permission.guard";
import { HelpdeskContainerComponent } from "./containers/helpdesk/helpdesk-container.component";

const routes: Routes = [
  {
    path: "",
    component: HelpdeskContainerComponent,
    data: {
      hasAccess: AppPermissions.HELPDESK,
    },
    canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpdeskRoutingModule {}
