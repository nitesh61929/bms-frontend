import { createReducer, on } from "@ngrx/store";
import { IPagination } from "@shared/interfaces/pagination";
import { IHelpdeskCategory } from "../../interfaces/ticket-category";
import * as HelpdeskCategoryActions from "../actions/helpdesk-category.actions";

export interface HelpdeskCategoryState {
  loading: boolean;
  message: string;
  error: Error;
  list: IHelpdeskCategory[];
  detail: IHelpdeskCategory;
  pagination: IPagination;
}

export const initialHelpdeskCategoryState: HelpdeskCategoryState = {
  loading: false,
  message: "",
  error: null,
  list: [],
  detail: null,
  pagination: null,
};

export const helpdeskCategoryKey = "helpdeskCategory";

export const helpdeskCategoryReducer = createReducer(
  initialHelpdeskCategoryState,
  on(HelpdeskCategoryActions.getHelpdeskCategories, (state) => ({
    ...state,
    loading: true,
  })),
  on(HelpdeskCategoryActions.getHelpdeskCategoriesSuccess, (state, action) => ({
    ...state,
    list: action.data,
    pagination: action.paginationInfo,
    loading: false,
  })),
  on(HelpdeskCategoryActions.getHelpdeskCategoriesFailure, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(HelpdeskCategoryActions.addHelpdeskCategory, (state) => ({ ...state, loading: true })),
  on(HelpdeskCategoryActions.addHelpdeskCategorySuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(HelpdeskCategoryActions.addHelpdeskCategoryFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),
  on(HelpdeskCategoryActions.deleteHelpdeskCategory, (state: HelpdeskCategoryState) => ({
    ...state,
    loading: true,
  })),

  on(HelpdeskCategoryActions.deleteHelpdeskCategorySuccess, (state: HelpdeskCategoryState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(HelpdeskCategoryActions.deleteHelpdeskCategoryFailure, (state: HelpdeskCategoryState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(HelpdeskCategoryActions.updateHelpdeskCategory, (state) => ({ ...state, loading: true })),
  on(HelpdeskCategoryActions.updateHelpdeskCategorySuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(HelpdeskCategoryActions.updateHelpdeskCategoryFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  }))
);
