import { createAction, props } from "@ngrx/store";
export const loadAccountType = createAction("[ON_BOARD] Load Account Type", props<any>());

export const loadAccountTypeSuccess = createAction("[ON_BOARD] Load Account Type Success", props<{ data: any }>());

export const loadAccountTypeFailure = createAction("[ON_BOARD] Load Account Type Failure", props<{ error: any }>());
