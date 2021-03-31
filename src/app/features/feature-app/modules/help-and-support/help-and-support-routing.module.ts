import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HelpAndSupportContainerComponent } from "./containers/help-and-support-container/help-and-support-container.component";

const routes: Routes = [
  {
    path: "",
    component: HelpAndSupportContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpAndSupportRoutingModule {}
