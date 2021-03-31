import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileContainerComponent } from "./containers/profile/profile-container.component";

const routes: Routes = [
  {
    path: "",
    component: ProfileContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
