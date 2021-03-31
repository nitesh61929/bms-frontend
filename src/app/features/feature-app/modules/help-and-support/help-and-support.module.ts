import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { HelpAndSupportComponent } from "./components/help-and-support/help-and-support.component";
import { HelpAndSupportContainerComponent } from "./containers/help-and-support-container/help-and-support-container.component";
import { HelpAndSupportRoutingModule } from "./help-and-support-routing.module";
import { HelpAndSupportEffects } from "./store/effects/help-and-support.effects";
import * as fromReducer from "./store/reducers/help-and-support.reducer";

@NgModule({
  declarations: [HelpAndSupportComponent, HelpAndSupportContainerComponent],
  imports: [
    CommonModule,
    HelpAndSupportRoutingModule,
    SharedModule,
    EffectsModule.forFeature([HelpAndSupportEffects]),
    StoreModule.forFeature(fromReducer.helpAndSupportFeatureKey, fromReducer.helpAndSupportReducer),
  ],
})
export class HelpAndSupportModule {}
