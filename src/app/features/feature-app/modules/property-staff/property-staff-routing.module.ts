import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PropertyStaffContainerComponent } from "./containers/property-staff-container/property-staff-container.component";

const routes: Routes = [
  {
    path: "",
    component: PropertyStaffContainerComponent,
    data: {
      hasAccess: AppPermissions.PROPERTY_STAFF_LIST,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyStaffRoutingModule {}
