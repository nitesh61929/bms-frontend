import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { AdminPropertyRoutingModule } from "./admin-property-routing.module";
import { AdminPropertyDetailsComponent } from "./components/admin-property-details/admin-property-details.component";
import { AdminPropertyComponent } from "./components/admin-property/admin-property.component";
import { AdminPropertyContainerComponent } from "./containers/admin-property-container/admin-property-container.component";
import { PropertyEffects } from "./store/effects/admin-property.effects";
import * as fromProperty from "./store/reducers/admin-property.reducers";

@NgModule({
  declarations: [AdminPropertyContainerComponent, AdminPropertyComponent, AdminPropertyDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminPropertyRoutingModule,
    StoreModule.forFeature(fromProperty.propertyKey, fromProperty.propertyReducer),
    EffectsModule.forFeature([PropertyEffects]),
  ],
})
export class AdminPropertyModule {}
