import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OnBoardComponent } from "./components/on-board/on-board.component";
import { GreetContainerComponent } from "./containers/greet/greet-container.component";
import { OwnerDetailContainerComponent } from "./containers/owner-detail/owner-detail-container.component";
import { PropertyDetailContainerComponent } from "./containers/property-detail/property-detail-container.component";
import { PropertyTypeContainerComponent } from "./containers/property-type/property-type-container.component";

/**
 * Owner type can be 'individual' or 'company'
 */
const routes: Routes = [
  {
    path: "",
    component: OnBoardComponent,
    children: [
      {
        path: "",
        redirectTo: "owner-detail/company",
        pathMatch: "full",
      },
      // {
      //   path: "owner-type",
      //   component: OwnerTypeContainerComponent,
      // },
      {
        path: "owner-detail/:ownerType",
        component: OwnerDetailContainerComponent,
      },
      {
        path: "property-type/:ownerId",
        component: PropertyTypeContainerComponent,
      },
      {
        path: "property-detail/:ownerId/:propertyType",
        component: PropertyDetailContainerComponent,
      },
      {
        path: "greet",
        component: GreetContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnBoardRoutingModule {}
