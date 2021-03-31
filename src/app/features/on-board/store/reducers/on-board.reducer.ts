import { createReducer, on } from "@ngrx/store";
import * as OnBoardActions from "../actions/on-board.actions";

export const onBoardFeatureKey = "on-board";

export interface IOnBoardState {
  ownershipTypes: any;
  loading: boolean;
  ownerDetail: any;
  propertyType: string;
}

export const initialState: IOnBoardState = {
  ownershipTypes: [],
  loading: false,
  ownerDetail: null,
  propertyType: "RESIDENTIAL",
};

export const onBoardReducer = createReducer(
  initialState,

  on(OnBoardActions.loadOwnershipType, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnBoardActions.loadOwnershipTypeSuccess, (state, action) => ({
    ...state,
    ownershipTypes: action.data,
    loading: false,
  })),
  on(OnBoardActions.loadOwnershipTypeFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),
  on(OnBoardActions.getOwnerDetail, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnBoardActions.getOwnerDetailSuccess, (state, action) => ({
    ...state,
    ownerDetail: action.data,
    loading: false,
  })),
  on(OnBoardActions.getOwnerDetailFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),
  on(OnBoardActions.onBoardOwner, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnBoardActions.onBoardOwnerSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(OnBoardActions.onBoardOwnerFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),
  on(OnBoardActions.onBoardOwnerUpdate, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnBoardActions.onBoardOwnerUpdateSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(OnBoardActions.onBoardOwnerUpdateFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),

  on(OnBoardActions.onBoardProperty, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnBoardActions.onBoardPropertySuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(OnBoardActions.onBoardPropertyFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),

  on(OnBoardActions.setOnBoardPropertyType, (state, action) => ({
    ...state,
    propertyType: action.data,
  }))
);
