import { createReducer, on } from "@ngrx/store";
import { IPagination } from "@shared/interfaces";
import * as StaffsActions from "../actions/staffs.actions";

export interface StaffsState {
  list: [];
  detail: any;
  loading: boolean;
  message: string;
  error: Error;
  pagination: IPagination;
  propertyStaffs: [];
  staffsForProperty: [];
}

export const initialStaffsState: StaffsState = {
  list: [],
  loading: false,
  message: "",
  detail: null,
  error: null,
  pagination: null,
  propertyStaffs: [],
  staffsForProperty: [],
};

export const staffsKey = "staffs";

export const staffsReducer = createReducer(
  initialStaffsState,
  on(StaffsActions.loadStaffs, (state: StaffsState) => ({
    ...state,
    loading: true,
  })),

  on(StaffsActions.loadStaffsSuccess, (state: StaffsState, action) => ({
    ...state,
    loading: false,
    list: action.data,
    pagination: action.paginationInfo,
    message: action.message,
  })),

  on(StaffsActions.loadStaffsFailure, (state: StaffsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(StaffsActions.addStaff, (state) => ({ ...state, loading: true })),
  on(StaffsActions.addStaffSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(StaffsActions.addStaffFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),

  on(StaffsActions.addStaffAsAdmin, (state) => ({ ...state, loading: true })),

  on(StaffsActions.addStaffAsAdminSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),

  on(StaffsActions.addStaffAsAdminFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),

  on(StaffsActions.searchPropertyStaffs, (state: StaffsState) => ({
    ...state,
    loading: true,
  })),

  on(StaffsActions.searchPropertyStaffsSuccess, (state: StaffsState, action) => ({
    ...state,
    loading: false,
    staffsForProperty: action.data,
    pagination: action.paginationInfo,
    message: action.message,
  })),

  on(StaffsActions.searchPropertyStaffsFailure, (state: StaffsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
