import { createReducer, on } from "@ngrx/store";
import * as AdminAuthActions from "../actions/admin-auth.actions";

export const adminAuthFeatureKey = "admin_auth";

export interface IAdminAuthState {
  loading: boolean;
}

export const initialState: IAdminAuthState = {
  loading: false,
};

export const adminAuthReducer = createReducer(
  initialState,

  on(AdminAuthActions.adminLogin, (state) => ({
    ...state,
    loading: true,
  })),
  on(AdminAuthActions.adminLoginSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(AdminAuthActions.adminLoginFailure, (state, action) => ({
    ...state,
    loading: false,
  }))
);
