import { createAction, props } from "@ngrx/store";
import { IParameters } from "@shared/interfaces";

export const loadAdminUsers = createAction("[AdminUsers] Load AdminUsers", props<{ params?: IParameters }>());

export const loadAdminUsersSuccess = createAction(
  "[AdminUsers] Load AdminUsers Success",
  props<{ data: any; paginationInfo: any }>()
);

export const loadAdminUsersFailure = createAction("[AdminUsers] Load AdminUsers Failure", props<{ error: any }>());
