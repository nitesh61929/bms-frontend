import { createReducer, on } from "@ngrx/store";
import * as residencesActions from "../actions/residence.actions";
import { IResidence } from "./../../interfaces/residence";
import { IResidenceDetail } from "./../../interfaces/residence-detail";

export interface ResidenceState {
  list: IResidence[];
  detail: IResidenceDetail;
  loading: boolean;
  message: string;
  error: Error;
}

export const initialResidenceState: ResidenceState = {
  list: [],
  loading: false,
  message: "",
  detail: null,
  error: null,
};

export const residenceKey = "residence";

export const residenceReducer = createReducer(
  initialResidenceState,
  on(residencesActions.loadActiveResidences, (state: ResidenceState) => ({
    ...state,
    loading: true,
  })),

  on(residencesActions.loadActiveResidencesSuccess, (state: ResidenceState, action) => ({
    ...state,
    loading: false,
    list: action.data,
    pagination: action.paginationInfo,
    message: action.message,
  })),

  on(residencesActions.loadActiveResidencesFailure, (state: ResidenceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(residencesActions.loadInvitedResidences, (state: ResidenceState) => ({
    ...state,
    loading: true,
  })),

  on(residencesActions.loadInvitedResidencesSuccess, (state: ResidenceState, action) => ({
    ...state,
    loading: false,
    list: action.data,
    pagination: action.paginationInfo,
    message: action.message,
  })),

  on(residencesActions.loadInvitedResidencesFailure, (state: ResidenceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(residencesActions.getResidenceDetail, (state: ResidenceState) => ({
    ...state,
    loading: true,
  })),

  on(residencesActions.getResidenceDetailSuccess, (state: ResidenceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    detail: action.data,
  })),

  on(residencesActions.getResidenceDetailFailure, (state: ResidenceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
