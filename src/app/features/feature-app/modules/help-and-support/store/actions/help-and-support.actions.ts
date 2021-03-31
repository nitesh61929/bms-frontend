import { createAction, props } from "@ngrx/store";

export const createHelpAndSupport = createAction("[HelpAndSupport] Create HelpAndSupport", props<{ payload: any }>());

export const createHelpAndSupportSuccess = createAction(
  "[HelpAndSupport] Create HelpAndSupport Success",
  props<{ data: any }>()
);

export const createHelpAndSupportFailure = createAction(
  "[HelpAndSupport] Create HelpAndSupport Failure",
  props<{ error: any }>()
);
