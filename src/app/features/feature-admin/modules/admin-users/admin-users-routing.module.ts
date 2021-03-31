import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminUsersContainerComponent } from "./containers/admin-users-container/admin-users-container.component";

const routes: Routes = [
  {
    path: "",
    component: AdminUsersContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUsersRoutingModule {}
