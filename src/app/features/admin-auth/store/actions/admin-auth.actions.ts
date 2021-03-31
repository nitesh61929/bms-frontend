import { createAction, props } from "@ngrx/store";
import { IAdminAuthPayload } from "./../../../../shared/interfaces/admin-auth-payload";

export const adminLogin = createAction("[ADMIN_AUTH] Login Admin", props<{ payload: IAdminAuthPayload }>());

export const adminLoginSuccess = createAction("[ADMIN_AUTH] Login Admin Success", props<{ data: any }>());

export const adminLoginFailure = createAction("[ADMIN_AUTH] Login Admin Failure", props<{ error: any }>());
