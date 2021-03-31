import { createAction, props } from "@ngrx/store";

export const loadActiveResidences = createAction("[RESIDENCES] Load Active Residences", props<{ params: any }>());

export const loadActiveResidencesSuccess = createAction("[RESIDENCES] Load Active Residences Success", props<any>());

export const loadActiveResidencesFailure = createAction("[RESIDENCES] Load Active Residences Failure", props<any>());

export const loadInvitedResidences = createAction("[RESIDENCES] Load Invited Residences", props<{ params: any }>());

export const loadInvitedResidencesSuccess = createAction("[RESIDENCES] Load Invited Residences Success", props<any>());

export const loadInvitedResidencesFailure = createAction("[RESIDENCES] Load Invited Residences Failure", props<any>());

export const getResidenceDetail = createAction(
  "[RESIDENCES] Get Residence Detail",
  props<{ residenceId: string; unitId: string }>()
);

export const getResidenceDetailSuccess = createAction("[RESIDENCES] Get Residence Detail Success", props<any>());

export const getResidenceDetailFailure = createAction("[RESIDENCES] Get Residence Detail Failure", props<any>());
