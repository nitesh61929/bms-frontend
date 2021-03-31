import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { PolicyComponent } from "./components/policy/policy.component";
import { PolicyContainerComponent } from "./containers/policy-container/policy-container.component";
import { PolicyRoutingModule } from "./policy-routing.module";
import { PolicyEffects } from "./store/policy.effects";
import * as fromPolicyReducer from "./store/policy.reducer";

@NgModule({
  declarations: [PolicyComponent, PolicyContainerComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromPolicyReducer.policyKey, fromPolicyReducer.policyReducer),
    EffectsModule.forFeature([PolicyEffects]),
  ],
})
export class PolicyModule {}
