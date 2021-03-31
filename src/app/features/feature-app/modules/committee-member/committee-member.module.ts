import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { CommitteeMemberRoutingModule } from "./committee-member-routing.module";
import { CommitteeMemberComponent } from "./components/committee-member/committee-member.component";
import { CommitteeMemberContainerComponent } from "./containers/committee-member-container/committee-member-container.component";
import { CommitteeMemberEffects } from "./store/committee-member.effects";
import * as fromCommitteeMemberReducers from "./store/committee-member.reducer";

@NgModule({
  declarations: [CommitteeMemberComponent, CommitteeMemberContainerComponent],
  imports: [
    CommonModule,
    CommitteeMemberRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      fromCommitteeMemberReducers.committeeMemberKey,
      fromCommitteeMemberReducers.committeeMemberReducer
    ),
    EffectsModule.forFeature([CommitteeMemberEffects]),
  ],
})
export class CommitteeMemberModule {}
