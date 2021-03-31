import { createReducer, on } from "@ngrx/store";
import { IPagination } from "@shared/interfaces";
import * as StaffsActions from "./property-staff.actions";

export const propertyStaffFeatureKey = "propertyStaff";

export interface PropertyStaffState {
  loading: boolean;
  message: string;
  error: Error;
  pagination: IPagination;
  list: [];
}

export const initialPropertyStaffState: PropertyStaffState = {
  loading: false,
  message: "",
  error: null,
  pagination: null,
  list: [],
};

export const propertyStaffReducer = createReducer(
  initialPropertyStaffState,
  on(StaffsActions.loadPropertyStaffs, (state: PropertyStaffState) => ({
    ...state,
    loading: true,
  })),

  on(StaffsActions.loadPropertyStaffsSuccess, (state: PropertyStaffState, action) => ({
    ...state,
    loading: false,
    list: action.data,
    pagination: action.paginationInfo,
    message: action.message,
  })),

  on(StaffsActions.loadPropertyStaffsFailure, (state: PropertyStaffState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
