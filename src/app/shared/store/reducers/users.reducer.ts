import { createReducer, on } from "@ngrx/store";
import { IRole } from "@shared/interfaces/user/role";
import { General } from "../../../core/enums";
import { IPagination, IParameters } from "../../interfaces";
import { IUser } from "../../interfaces/user/user";
import * as UserActions from "../actions/users.actions";

export interface UsersState {
  list: IUser[];
  detail: IUser;
  pagination: IPagination;
  loading: boolean;
  message: string;
  filterParams: IParameters;
  error: Error;
  currentUser: IUser;
  roles: IRole[];
  userSearch: [];
}

export const initialUsersState: UsersState = {
  list: [],
  pagination: null,
  loading: false,
  message: "",
  detail: null,
  currentUser: null,
  filterParams: {
    search: String(General.DEFAULT_SEARCH),
    page: Number(General.DEFAULT_PAGE),
    size: Number(General.PAGINATE_SMALL),
  },
  error: null,
  roles: [],
  userSearch: [],
};

export const usersKey = "users";

export const usersReducer = createReducer(
  initialUsersState,
  on(UserActions.setFilterParameters, (state: UsersState, action) => ({
    ...state,
    filterParams: action.params,
  })),

  on(UserActions.loadUsers, (state: UsersState) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.loadUsersSuccess, (state: UsersState, action) => ({
    ...state,
    loading: false,
    list: action.data,
    pagination: action.pagination,
    message: action.message,
  })),

  on(UserActions.loadUsersFailure, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UserActions.getUserById, (state: UsersState) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.getUserByIdSuccess, (state: UsersState, action) => ({
    ...state,
    loading: false,
    detail: action.data,
    message: action.message,
  })),

  on(UserActions.getUserByIdFailure, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UserActions.createNewUser, (state: UsersState) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.createNewUserSuccess, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UserActions.createNewUsersFailure, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error,
  })),

  on(UserActions.updateUser, (state: UsersState) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.updateUserSuccess, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UserActions.updateUserFailure, (state, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error,
  })),
  on(UserActions.deleteUser, (state: UsersState) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.deleteUserSuccess, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UserActions.deleteUserFailure, (state, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UserActions.updateProfile, (state: UsersState) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.updateProfileSuccess, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UserActions.updateProfileFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
    message: action.message,
  })),
  on(UserActions.getAllRoles, (state: UsersState) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.getAllRolesSuccess, (state: UsersState, action) => ({
    ...state,
    loading: false,
    roles: action.data,
    message: action.message,
  })),

  on(UserActions.getAllRolesFailure, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UserActions.createUpdatePassword, (state: UsersState) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.createUpdatePasswordSuccess, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UserActions.createUpdatePasswordFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
    message: action.message,
  })),
  on(UserActions.getUsersByNameOrMobile, (state: UsersState) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.getUsersByNameOrMobileSuccess, (state: UsersState, action) => ({
    ...state,
    loading: false,
    userSearch: action.data,
    message: action.message,
  })),

  on(UserActions.getUsersByNameOrMobileFailure, (state: UsersState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
