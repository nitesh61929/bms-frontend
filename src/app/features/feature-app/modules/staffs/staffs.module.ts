import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { StaffsComponent } from "./components/staffs/staffs.component";
import { StaffsContainerComponent } from "./containers/staffs-container/staffs-container.component";
import { StaffsRoutingModule } from "./staffs-routing.module";
import { AddStaffComponent } from './components/add-staff/add-staff/add-staff.component';

@NgModule({
  declarations: [StaffsContainerComponent, StaffsComponent, AddStaffComponent],
  imports: [SharedModule, StaffsRoutingModule],
})
export class StaffsModule {}
