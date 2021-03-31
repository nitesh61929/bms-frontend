import { createReducer, on } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import * as PropertyActions from "../actions/property.actions";

export interface PropertyState {
  list: [];
  owner: any;
  detail: IProperty;
  loading: boolean;
  message: string;
  error: Error;
  propertyTypes: any;
  propertyPermissions: any;
  assignPropertyStaffError: Error;
}

export const initialPropertyState: PropertyState = {
  list: [],
  owner: null,
  loading: false,
  message: "",
  detail: null,
  error: null,
  propertyTypes: [],
  propertyPermissions: [],
  assignPropertyStaffError: null,
};

export const propertyKey = "property";

export const propertyReducer = createReducer(
  initialPropertyState,
  on(PropertyActions.loadProperty, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.loadPropertySuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    list: action.data,
    message: action.message,
  })),

  on(PropertyActions.loadPropertyFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyActions.getPropertyDetail, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.getPropertyDetailSuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    detail: action.data,
    message: action.message,
  })),

  on(PropertyActions.getPropertyDetailFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyActions.updatePropertyDetail, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.updatePropertyDetailSuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyActions.updatePropertyDetailFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),

  on(PropertyActions.updateVerifiedPropertyDetail, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.updateVerifiedPropertyDetailSuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyActions.updateVerifiedPropertyDetailFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),

  on(PropertyActions.loadPropertyType, (state) => ({
    ...state,
    loading: true,
  })),
  on(PropertyActions.loadPropertyTypeSuccess, (state, action) => ({
    ...state,
    propertyTypes: action.data,
    loading: false,
  })),
  on(PropertyActions.loadPropertyTypeFailure, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(PropertyActions.assignStaffToProperty, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.assignStaffToPropertySuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyActions.assignStaffToPropertyFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    assignPropertyStaffError: action.error.error,
  })),
  on(PropertyActions.removeStaffFromProperty, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.removeStaffFromPropertySuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyActions.removeStaffFromPropertyFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(PropertyActions.updateStaffRole, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.updateStaffRoleSuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyActions.updateStaffRoleFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(PropertyActions.addProperty, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.addPropertySuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyActions.addPropertyFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(PropertyActions.updatePropertyStatus, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.updatePropertyStatusSuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyActions.updatePropertyStatusFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(PropertyActions.loadOwnerOnLogin, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.loadOwnerOnLoginSuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    owner: action.data,
    message: action.message,
  })),

  on(PropertyActions.loadOwnerOnLoginFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(PropertyActions.getUserPropertyPermissions, (state: PropertyState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyActions.getUserPropertyPermissionsSuccess, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    propertyPermissions: action.data,
    message: action.message,
  })),

  on(PropertyActions.getUserPropertyPermissionsFailure, (state: PropertyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
