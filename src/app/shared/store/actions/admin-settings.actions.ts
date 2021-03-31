import { createAction, props } from "@ngrx/store";

export const addOrUpdatePolicy = createAction("[ADMIN_SETTINGS] Add Or Update  Policy", props<{ payload: any }>());

export const addOrUpdatePolicySuccess = createAction("[ADMIN_SETTINGS] Add Or Update  Policy Success", props<any>());

export const addOrUpdatePolicyFailure = createAction("[ADMIN_SETTINGS] Add Or Update  Policy Failure", props<any>());

export const getPrivacyPolicy = createAction("[ADMIN_SETTINGS] Get Privacy Policy", props<any>());

export const getPrivacyPolicySuccess = createAction("[ADMIN_SETTINGS] Get Privacy Policy Success", props<any>());

export const getPrivacyPolicyFailure = createAction("[ADMIN_SETTINGS] Get Privacy Policy Failure", props<any>());

export const getTermsAndConditions = createAction("[ADMIN_SETTINGS] Get Terms And Conditions", props<any>());

export const getTermsAndConditionsSuccess = createAction(
  "[ADMIN_SETTINGS] Get Terms And Conditions Success",
  props<any>()
);

export const getTermsAndConditionsFailure = createAction(
  "[ADMIN_SETTINGS] Get Terms And Conditions Failure",
  props<any>()
);
