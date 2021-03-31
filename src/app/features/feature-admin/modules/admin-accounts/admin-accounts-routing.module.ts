import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActiveAccountsContainerComponent } from "./containers/active-accounts-container/active-accounts-container.component";
import { AdminAccountsContainerComponent } from "./containers/admin-accounts-container/admin-accounts-container.component";
import { InvitedAccountsContainerComponent } from "./containers/invited-accounts-container/invited-accounts-container.component";

const routes: Routes = [
  {
    path: "",
    component: AdminAccountsContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "active",
        pathMatch: "full",
      },
      {
        path: "active",
        component: ActiveAccountsContainerComponent,
      },
      {
        path: "invited",
        component: InvitedAccountsContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAccountsRoutingModule {}
