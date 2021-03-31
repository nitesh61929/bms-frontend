import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminSettingsContainerComponent } from "./containers/admin-settings/admin-settings-container.component";

const routes: Routes = [
  {
    path: "",
    component: AdminSettingsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSettingsRoutingModule {}
