import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { PropertyStaffComponent } from "./components/property-staff/property-staff.component";
import { PropertyStaffContainerComponent } from "./containers/property-staff-container/property-staff-container.component";
import { PropertyStaffRoutingModule } from "./property-staff-routing.module";
import { PropertyStaffEffects } from "./store/property-staff.effects";
import * as fromPropertyStaffReducers from "./store/property-staff.reducer";

@NgModule({
  declarations: [PropertyStaffComponent, PropertyStaffContainerComponent],
  imports: [
    CommonModule,
    PropertyStaffRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      fromPropertyStaffReducers.propertyStaffFeatureKey,
      fromPropertyStaffReducers.propertyStaffReducer
    ),
    EffectsModule.forFeature([PropertyStaffEffects]),
  ],
})
export class PropertyStaffModule {}
