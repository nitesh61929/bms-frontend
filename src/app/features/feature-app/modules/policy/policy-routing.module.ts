import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PolicyContainerComponent } from "./containers/policy-container/policy-container.component";

const routes: Routes = [
  {
    path: "",
    component: PolicyContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyRoutingModule {}
