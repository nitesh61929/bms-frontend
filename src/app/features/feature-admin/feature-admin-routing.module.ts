import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureAdminContainerComponent } from "./containers/feature-admin-container/feature-admin-container.component";

const routes: Routes = [
  {
    path: "",
    component: FeatureAdminContainerComponent,
    children: [
      {
        path: "admin-accounts",
        loadChildren: () => import("./modules/admin-accounts/admin-accounts.module").then((m) => m.AdminAccountsModule),
      },
      {
        path: "admin-add-property",
        loadChildren: () =>
          import("./modules/admin-add-property/admin-add-property.module").then((m) => m.AdminAddPropertyModule),
      },
      {
        path: "admin-property",
        loadChildren: () => import("./modules/admin-property/admin-property.module").then((m) => m.AdminPropertyModule),
      },
      {
        path: "admin-settings",
        loadChildren: () => import("./modules/admin-settings/admin-settings.module").then((m) => m.AdminSettingsModule),
      },
      {
        path: "admin-profile",
        loadChildren: () => import("./modules/admin-profile/admin-profile.module").then((m) => m.AdminProfileModule),
      },
      {
        path: "admin-users",
        loadChildren: () => import("./modules/admin-users/admin-users.module").then((m) => m.AdminUsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureAdminRoutingModule {}
