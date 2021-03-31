import { createReducer, on } from "@ngrx/store";
import * as PropertyOwnerActions from "../actions/property-owner.actions";
import { IPropertyOwnerDetails } from "./../../interfaces/property-owner-detail";

export interface PropertyOwnerState {
  list: [];
  detail: IPropertyOwnerDetails;
  loading: boolean;
  message: string;
  error: Error;
}

export const initialPropertyOwnerState: PropertyOwnerState = {
  list: [],
  loading: false,
  message: "",
  detail: null,
  error: null,
};

export const propertyOwnerKey = "propertyOwner";

export const propertyOwnerReducer = createReducer(
  initialPropertyOwnerState,
  on(PropertyOwnerActions.getPropertyOwnerDetail, (state: PropertyOwnerState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyOwnerActions.getPropertyOwnerDetailSuccess, (state: PropertyOwnerState, action) => ({
    ...state,
    loading: false,
    detail: action.data,
    message: action.message,
  })),

  on(PropertyOwnerActions.getPropertyOwnerDetailFailure, (state: PropertyOwnerState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(PropertyOwnerActions.getAccountDetail, (state: PropertyOwnerState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyOwnerActions.getAccountDetailSuccess, (state: PropertyOwnerState, action) => ({
    ...state,
    loading: false,
    detail: action.data,
    message: action.message,
  })),

  on(PropertyOwnerActions.getAccountDetailFailure, (state: PropertyOwnerState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
