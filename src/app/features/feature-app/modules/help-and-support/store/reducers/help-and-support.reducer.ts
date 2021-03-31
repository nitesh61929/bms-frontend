import { createReducer, on } from "@ngrx/store";
import * as HelpAndSupportActions from "../actions/help-and-support.actions";

export const helpAndSupportFeatureKey = "helpAndSupport";

export interface helpAndSupportState {
  loading: boolean;
  message: string;
  error: Error;
}

export const initialState: helpAndSupportState = {
  loading: false,
  message: "",
  error: null,
};

export const helpAndSupportReducer = createReducer(
  initialState,
  on(HelpAndSupportActions.createHelpAndSupport, (state) => ({ ...state, loading: true })),
  on(HelpAndSupportActions.createHelpAndSupportSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(HelpAndSupportActions.createHelpAndSupportFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  }))
);
