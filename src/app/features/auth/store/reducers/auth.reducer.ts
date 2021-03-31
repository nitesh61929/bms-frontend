import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "../actions/auth.actions";

export const authFeatureKey = "auth";

export interface IAuthState {
  loading: boolean;
  message: string;
  error: Error;
}

export const initialState: IAuthState = {
  loading: false,
  message: "",
  error: null,
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.verifyMobileNumber, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.verifyMobileNumberSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(AuthActions.verifyMobileNumberFailure, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(AuthActions.registerMobileNumber, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.registerMobileNumberSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(AuthActions.registerMobileNumberFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),
  on(AuthActions.loginWithOTP, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.loginWithOTPSuccess, (state, action) => ({
    ...state,
    loginResponse: action.data,
    loading: false,
  })),
  on(AuthActions.loginWithOTPFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),
  on(AuthActions.logoutUser, (state) => ({
    ...state,
    loading: true,
  })),

  on(AuthActions.logoutUserSuccess, (state, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(AuthActions.logoutUserFailure, (state, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
