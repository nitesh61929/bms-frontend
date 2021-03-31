import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { AdminProfileRoutingModule } from "./admin-profile-routing.module";
import { AdminProfileComponent } from "./components/admin-profile/admin-profile.component";
import { AdminProfileContainerComponent } from "./containers/admin-profile-container/admin-profile-container.component";

@NgModule({
  declarations: [AdminProfileComponent, AdminProfileContainerComponent],
  imports: [CommonModule, SharedModule, AdminProfileRoutingModule],
})
export class AdminProfileModule {}
