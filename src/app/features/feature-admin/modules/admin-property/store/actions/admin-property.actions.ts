import { createAction, props } from "@ngrx/store";

export const loadPropertyForAdmin = createAction("[ADMIN_PROPERTY] Load Property for Admin", props<{ params?: any }>());

export const loadPropertyForAdminSuccess = createAction(
  "[ADMIN_PROPERTY] Load Property for Admin Success",
  props<any>()
);

export const loadPropertyForAdminFailure = createAction(
  "[ADMIN_PROPERTY] Load Property for Admin Failure",
  props<any>()
);
