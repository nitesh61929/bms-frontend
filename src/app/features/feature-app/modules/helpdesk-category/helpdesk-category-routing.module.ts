import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HelpdeskCategoryContainerComponent } from "./containers/helpdesk-category/helpdesk-category-container.component";

const routes: Routes = [
  {
    path: "",
    component: HelpdeskCategoryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpdeskCategoryRoutingModule {}
