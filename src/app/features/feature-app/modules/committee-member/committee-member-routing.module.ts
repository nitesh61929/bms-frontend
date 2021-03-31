import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommitteeMemberContainerComponent } from "./containers/committee-member-container/committee-member-container.component";

const routes: Routes = [
  {
    path: "",
    component: CommitteeMemberContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommitteeMemberRoutingModule {}
