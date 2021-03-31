import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PermissionGuard } from "@core/guards/permission/permission.guard";
import { NoticesContainerComponent } from "./containers/notices/notices-container.component";

const routes: Routes = [
  {
    path: "",
    component: NoticesContainerComponent,
    data: {
      hasAccess: AppPermissions.NOTICE_LIST,
    },
    canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticesRoutingModule {}
