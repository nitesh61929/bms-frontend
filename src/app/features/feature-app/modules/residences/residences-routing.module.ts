import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PermissionGuard } from "@core/guards/permission/permission.guard";
import { ActiveResidencesContainerComponent } from "./containers/active-residences-container/active-residences-container.component";
import { InvitedResidencesContainerComponent } from "./containers/invited-residences-container/invited-residences-container.component";
import { ResidencesContainerComponent } from "./containers/residences-container/residences-container.component";

const routes: Routes = [
  {
    path: "",
    component: ResidencesContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "active",
        pathMatch: "full",
      },
      {
        path: "active",
        component: ActiveResidencesContainerComponent,
        data: {
          hasAccess: AppPermissions.GET_ACTIVE_RESIDENCE,
        },
        canActivate: [PermissionGuard],
      },
      {
        path: "invited",
        component: InvitedResidencesContainerComponent,
        data: {
          hasAccess: AppPermissions.GET_INVITED_RESIDENCE,
        },
        canActivate: [PermissionGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidencesRoutingModule {}
