import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { GreetComponent } from "./components/greet/greet.component";
import { OnBoardComponent } from "./components/on-board/on-board.component";
import { OwnerCompanyComponent } from "./components/owner-company/owner-company.component";
import { OwnerIndividualComponent } from "./components/owner-individual/owner-individual.component";
import { OwnerTypeComponent } from "./components/owner-type/owner-type.component";
import { PropertyDetailComponent } from "./components/property-detail/property-detail.component";
import { PropertyTypeComponent } from "./components/property-type/property-type.component";
import { GreetContainerComponent } from "./containers/greet/greet-container.component";
import { OwnerDetailContainerComponent } from "./containers/owner-detail/owner-detail-container.component";
import { OwnerTypeContainerComponent } from "./containers/owner-type/owner-type-container.component";
import { PropertyDetailContainerComponent } from "./containers/property-detail/property-detail-container.component";
import { PropertyTypeContainerComponent } from "./containers/property-type/property-type-container.component";
import { OnBoardRoutingModule } from "./on-board.routing.module";
import { OnBoardEffects } from "./store/effects/on-board.effects";
import { onBoardReducer } from "./store/reducers/on-board.reducer";

@NgModule({
  declarations: [
    OnBoardComponent,
    OwnerTypeContainerComponent,
    OwnerTypeComponent,

    OwnerDetailContainerComponent,
    PropertyTypeContainerComponent,
    PropertyTypeComponent,
    PropertyDetailContainerComponent,
    PropertyDetailComponent,
    OwnerCompanyComponent,
    OwnerIndividualComponent,
    GreetContainerComponent,
    GreetComponent,
  ],
  imports: [
    SharedModule,
    OnBoardRoutingModule,
    StoreModule.forFeature("onBoard", onBoardReducer),
    EffectsModule.forFeature([OnBoardEffects]),
  ],
})
export class OnBoardModule {}
