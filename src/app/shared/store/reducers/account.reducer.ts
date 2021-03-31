import { createReducer, on } from "@ngrx/store";
import * as AccountActions from "../actions/account.actions";

export const accountFeatureKey = "account";

export interface IAccountState {
  accountTypes: any;
  loading: boolean;
}

export const initialState: IAccountState = {
  accountTypes: [],
  loading: false,
};

export const accountReducer = createReducer(
  initialState,

  on(AccountActions.loadAccountType, (state) => ({
    ...state,
    loading: true,
  })),
  on(AccountActions.loadAccountTypeSuccess, (state, action) => ({
    ...state,
    accountTypes: action.data,
    loading: false,
  })),
  on(AccountActions.loadAccountTypeFailure, (state, action) => ({
    ...state,
    loading: false,
  }))
);
