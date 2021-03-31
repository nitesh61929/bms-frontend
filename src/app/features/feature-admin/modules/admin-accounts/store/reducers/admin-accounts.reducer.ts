import { createReducer, on } from "@ngrx/store";
import { IInvitations } from "@shared/interfaces/invitations";
import { IPagination } from "@shared/interfaces/pagination";
import { IAccounts } from "../../interfaces/accounts";
import * as AdminAccountsActions from "../actions/admin-accounts.actions";

export const adminAccountFeatureKey = "adminAccounts";

export interface AdminAccountsState {
  loading: boolean;
  message: string;
  list: IAccounts[];
  detail: IAccounts;
  pagination: IPagination;
  error: Error;
  invitations: IInvitations[];
}

export const initialAdminAccountsState: AdminAccountsState = {
  list: [],
  pagination: null,
  loading: false,
  message: "",
  detail: null,
  error: null,
  invitations: [],
};

export const adminAccountsReducer = createReducer(
  initialAdminAccountsState,
  on(AdminAccountsActions.loadActiveAccounts, (state: AdminAccountsState) => ({
    ...state,
    loading: true,
  })),

  on(AdminAccountsActions.loadActiveAccountsSuccess, (state: AdminAccountsState, action) => ({
    ...state,
    loading: false,
    list: action.data,
    pagination: action.paginationInfo,
  })),

  on(AdminAccountsActions.loadActiveAccountsFailure, (state: AdminAccountsState, action) => ({
    ...state,
    loading: false,
  })),

  on(AdminAccountsActions.loadPendingAccountInvitations, (state: AdminAccountsState) => ({
    ...state,
    loading: true,
  })),

  on(AdminAccountsActions.loadPendingAccountInvitationsSuccess, (state: AdminAccountsState, action) => ({
    ...state,
    loading: false,
    invitations: action.data,
    pagination: action.paginationInfo,
  })),

  on(AdminAccountsActions.loadPendingAccountInvitationsFailure, (state: AdminAccountsState, action) => ({
    ...state,
    loading: false,
  })),
  on(AdminAccountsActions.getAccountDetails, (state: AdminAccountsState) => ({
    ...state,
    loading: true,
  })),

  on(AdminAccountsActions.getAccountDetailsSuccess, (state: AdminAccountsState, action) => ({
    ...state,
    loading: false,
    detail: action.data,
    message: action.message,
  })),

  on(AdminAccountsActions.getAccountDetailsFailure, (state: AdminAccountsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
