import { createReducer, on } from "@ngrx/store";
import * as AdminSettingsActions from "../actions/admin-settings.actions";

export const adminSettingsFeatureKey = "adminSettings";

export interface AdminSettingsState {
  loading: boolean;
  message: string;
  privacyPolicy: any;
  termsAndConditions: any;
  error: Error;
}

export const initialAdminSettingsState: AdminSettingsState = {
  loading: false,
  message: "",
  privacyPolicy: null,
  termsAndConditions: null,
  error: null,
};

export const adminSettingsReducer = createReducer(
  initialAdminSettingsState,
  on(AdminSettingsActions.addOrUpdatePolicy, (state: AdminSettingsState) => ({
    ...state,
    loading: true,
  })),

  on(AdminSettingsActions.addOrUpdatePolicySuccess, (state: AdminSettingsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(AdminSettingsActions.addOrUpdatePolicyFailure, (state: AdminSettingsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(AdminSettingsActions.getPrivacyPolicy, (state: AdminSettingsState) => ({
    ...state,
    loading: true,
  })),

  on(AdminSettingsActions.getPrivacyPolicySuccess, (state: AdminSettingsState, action) => ({
    ...state,
    loading: false,
    privacyPolicy: action.data,
    message: action.message,
  })),

  on(AdminSettingsActions.getPrivacyPolicyFailure, (state: AdminSettingsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(AdminSettingsActions.getTermsAndConditions, (state: AdminSettingsState) => ({
    ...state,
    loading: true,
  })),

  on(AdminSettingsActions.getTermsAndConditionsSuccess, (state: AdminSettingsState, action) => ({
    ...state,
    loading: false,
    termsAndConditions: action.data,
    message: action.message,
  })),

  on(AdminSettingsActions.getTermsAndConditionsFailure, (state: AdminSettingsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
