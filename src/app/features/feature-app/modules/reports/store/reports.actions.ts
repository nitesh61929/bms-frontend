import { createAction, props } from "@ngrx/store";
import { IParameters } from "@shared/interfaces";

export const loadPanicReports = createAction(
  "[Reports] Load Panic Reports",
  props<{ propertyId: string; params?: IParameters }>()
);

export const loadPanicReportsSuccess = createAction("[Reports] Load Panic Reports Success", props<{ data: any }>());

export const loadPanicReportsFailure = createAction("[Reports] Load Panic Reports Failure", props<{ error: any }>());

export const loadGatepassReports = createAction("[Reports] Load Gatepass Reports", props<{ params?: IParameters }>());

export const loadGatepassReportsSuccess = createAction(
  "[Reports] Load Gatepass Reports Success",
  props<{ data: any }>()
);

export const loadGatepassReportsFailure = createAction(
  "[Reports] Load Gatepass Reports Failure",
  props<{ error: any }>()
);

export const getVisitPurposeList = createAction("[Reports] Get Visit Purpose List", props<any>());

export const getVisitPurposeListSuccess = createAction(
  "[Reports] Get Visit Purpose List Success",
  props<{ data: any }>()
);

export const getVisitPurposeListFailure = createAction(
  "[Reports] Get Visit Purpose List Failure",
  props<{ error: any }>()
);

export const getGatekeeperList = createAction("[Reports] Get gatekeeper List", props<any>());

export const getGatekeeperListSuccess = createAction("[Reports] Get gatekeeper List Success", props<{ data: any }>());

export const getGatekeeperListFailure = createAction("[Reports] Get gatekeeper List Failure", props<{ error: any }>());
