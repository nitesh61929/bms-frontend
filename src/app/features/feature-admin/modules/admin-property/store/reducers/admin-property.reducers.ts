import { createReducer, on } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import * as AdminPropertyActions from "../actions/admin-property.actions";

export interface PropertyState {
  list: [];
  detail: IProperty;
  loading: boolean;
  message: string;
  error: Error;
}

export const initialPropertyState: PropertyState = {
  list: [],
  loading: false,
  message: "",
  detail: null,
  error: null,
};

export const propertyKey = "adminProperty";

export const propertyReducer = createReducer(
  initialPropertyState,
  on(AdminPropertyActions.loadPropertyForAdmin, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(AdminPropertyActions.loadPropertyForAdminSuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    list: action.data,
    message: action.message,
    pagination: action.paginationInfo,
  })),

  on(AdminPropertyActions.loadPropertyForAdminFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
