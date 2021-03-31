import { createReducer, on } from "@ngrx/store";
import * as PropertyStructureActions from "../actions/property-structure.actions";

export interface PropertyStructureState {
  loading: boolean;
  message: string;
  error: Error;
  propertyStructures: Array<any>;
  selectedPropertyStructures: any;
  propertyStructureDetail: any;
}

export const initialPropertyStructureState: PropertyStructureState = {
  loading: false,
  message: "",
  error: null,
  propertyStructures: [],
  selectedPropertyStructures: null,
  propertyStructureDetail: null,
};

export const propertyStructureKey = "property-structure";

export const propertyStructureReducer = createReducer(
  initialPropertyStructureState,
  on(PropertyStructureActions.getPropertyStructure, (state: PropertyStructureState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyStructureActions.getPropertyStructureSuccess, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    propertyStructures: action.data,
    message: action.message,
  })),

  on(PropertyStructureActions.getPropertyStructureFailure, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyStructureActions.getPropertyStructureDetail, (state: PropertyStructureState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyStructureActions.getPropertyStructureDetailSuccess, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    propertyStructureDetail: action.data,
    message: action.message,
  })),

  on(PropertyStructureActions.getPropertyStructureDetailFailure, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyStructureActions.getSelectedPropertyStructure, (state: PropertyStructureState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyStructureActions.getSelectedPropertyStructureSuccess, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    selectedPropertyStructures: action.data,
    message: action.message,
  })),

  on(PropertyStructureActions.getSelectedPropertyStructureFailure, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyStructureActions.savePropertyStructure, (state: PropertyStructureState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyStructureActions.savePropertyStructureSuccess, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyStructureActions.savePropertyStructureFailure, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(PropertyStructureActions.deletePropertyStructure, (state: PropertyStructureState) => ({
    ...state,
    loading: true,
  })),

  on(PropertyStructureActions.deletePropertyStructureSuccess, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PropertyStructureActions.deletePropertyStructureFailure, (state: PropertyStructureState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
