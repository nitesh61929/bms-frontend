import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { ActiveResidencesComponent } from "./components/active-residences/active-residences.component";
import { InvitedResidencesComponent } from "./components/invited-residences/invited-residences.component";
import { ResidenceDetailComponent } from "./components/residence-detail/residence-detail.component";
import { ResidencesComponent } from "./components/residences/residences.component";
import { ActiveResidencesContainerComponent } from "./containers/active-residences-container/active-residences-container.component";
import { InvitedResidencesContainerComponent } from "./containers/invited-residences-container/invited-residences-container.component";
import { ResidencesContainerComponent } from "./containers/residences-container/residences-container.component";
import { ResidencesRoutingModule } from "./residences-routing.module";
import { ResidencesEffects } from "./store/effects/residence.effects";
import * as fromResidenceReducer from "./store/reducers/residence.reducer";

@NgModule({
  declarations: [
    ResidencesContainerComponent,
    ActiveResidencesContainerComponent,
    InvitedResidencesContainerComponent,
    ResidencesComponent,
    ActiveResidencesComponent,
    InvitedResidencesComponent,
    ResidenceDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResidencesRoutingModule,
    StoreModule.forFeature(fromResidenceReducer.residenceKey, fromResidenceReducer.residenceReducer),
    EffectsModule.forFeature([ResidencesEffects]),
  ],
})
export class ResidencesModule {}
