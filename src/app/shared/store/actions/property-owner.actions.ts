import { createAction, props } from "@ngrx/store";

export const getPropertyOwnerDetail = createAction(
  "[PROPERTYOWNER] Get Property Owner Full Details.",
  props<{ id: string }>()
);

export const getPropertyOwnerDetailSuccess = createAction(
  "[PROPERTYOWNER] Get Property Owner Full Details Success",
  props<any>()
);

export const getPropertyOwnerDetailFailure = createAction(
  "[PROPERTYOWNER] Get Property Owner Full Details Failure",
  props<any>()
);

export const getAccountDetail = createAction("[PROPERTYOWNER] Get Account Detail Details.", props<{ id: string }>());

export const getAccountDetailSuccess = createAction("[PROPERTYOWNER] Get Account Detail Details Success", props<any>());

export const getAccountDetailFailure = createAction("[PROPERTYOWNER] Get Account Detail Details Failure", props<any>());
