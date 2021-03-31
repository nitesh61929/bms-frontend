import { createReducer, on } from "@ngrx/store";
import { IPagination } from "@shared/interfaces";
import { IAdminUsers } from "../../interfaces/admin-users";
import * as AdminUsersAction from "../actions/admin-users.actions";

export const adminUsersFeatureKey = "adminUsers";

export interface AdminUsersState {
  loading: boolean;
  message: string;
  list: IAdminUsers[];
  pagination: IPagination;
  error: Error;
}

export const initialAdminUsersState: AdminUsersState = {
  list: [],
  pagination: null,
  loading: false,
  message: "",
  error: null,
};

export const adminUsersReducer = createReducer(
  initialAdminUsersState,
  on(AdminUsersAction.loadAdminUsers, (state: AdminUsersState, action) => ({
    ...state,
    loading: true,
  })),
  on(AdminUsersAction.loadAdminUsersSuccess, (state: AdminUsersState, action) => ({
    ...state,
    loading: false,
    list: action.data,
    pagination: action.paginationInfo,
  })),

  on(AdminUsersAction.loadAdminUsersFailure, (state: AdminUsersState) => ({
    ...state,
    loading: false,
  }))
);
