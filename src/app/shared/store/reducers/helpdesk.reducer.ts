import { createReducer, on } from "@ngrx/store";
import * as HelpdeskActions from "../actions/helpdesk.actions";
import { IHelpDesk } from "./../../../designs/design-helpdesk/design-helpdesk.component";
import { IDropdownList } from "./../../interfaces/dropdown-list";
import { IPagination } from "./../../interfaces/pagination";

export interface HelpdeskState {
  loading: boolean;
  message: string;
  error: Error;
  list: IHelpDesk[];
  detail: IHelpDesk;
  pagination: IPagination;
  categories: IDropdownList[];
  assignees: [];
  postCommentError: Error;
  updateHelpdeskStatusError: Error;
  updateHelpdeskDueDateError: Error;
  updateHelpdeskAssigneeError: Error;
}

export const initialHelpdeskState: HelpdeskState = {
  loading: false,
  message: "",
  error: null,
  list: [],
  detail: null,
  pagination: null,
  categories: [],
  assignees: [],
  postCommentError: null,
  updateHelpdeskStatusError: null,
  updateHelpdeskDueDateError: null,
  updateHelpdeskAssigneeError: null,
};

export const helpdeskKey = "helpdesk";

export const helpdeskReducer = createReducer(
  initialHelpdeskState,
  on(HelpdeskActions.loadHelpdesk, (state: HelpdeskState) => ({
    ...state,
    loading: true,
  })),

  on(HelpdeskActions.loadHelpdeskSuccess, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    list: action.data,
    pagination: action.paginationInfo,
  })),

  on(HelpdeskActions.loadHelpdeskFailure, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(HelpdeskActions.getHelpdeskDetail, (state: HelpdeskState) => ({
    ...state,
    loading: true,
  })),

  on(HelpdeskActions.getHelpdeskDetailSuccess, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    detail: action.data,
  })),

  on(HelpdeskActions.getHelpdeskDetailFailure, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    detail: null,
    message: action.message,
  })),
  on(HelpdeskActions.getHelpdeskComments, (state) => ({
    ...state,
    loading: true,
  })),
  on(HelpdeskActions.getHelpdeskCommentsSuccess, (state, action) => ({
    ...state,
    comments: action.data,
    loading: false,
  })),
  on(HelpdeskActions.getHelpdeskCommentsFailure, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(HelpdeskActions.postComment, (state) => ({ ...state, loading: true })),
  on(HelpdeskActions.postCommentSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(HelpdeskActions.postCommentFailure, (state, action) => ({
    ...state,
    loading: false,
    postCommentError: action.error.error,
  })),

  on(HelpdeskActions.updateHelpdeskStatus, (state: HelpdeskState) => ({
    ...state,
    loading: true,
  })),

  on(HelpdeskActions.updateHelpdeskStatusSuccess, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(HelpdeskActions.updateHelpdeskStatusFailure, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    updateHelpdeskStatusError: action.error.error,
  })),

  on(HelpdeskActions.updateHelpdeskDueDate, (state: HelpdeskState) => ({
    ...state,
    loading: true,
  })),

  on(HelpdeskActions.updateHelpdeskDueDateSuccess, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(HelpdeskActions.updateHelpdeskDueDateFailure, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    updateHelpdeskDueDateError: action.error.error,
  })),

  on(HelpdeskActions.updateHelpdeskAssignee, (state: HelpdeskState) => ({
    ...state,
    loading: true,
  })),

  on(HelpdeskActions.updateHelpdeskAssigneeSuccess, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(HelpdeskActions.updateHelpdeskAssigneeFailure, (state: HelpdeskState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    updateHelpdeskAssigneeError: action.error.error,
  })),
  on(HelpdeskActions.getPossibleAssignees, (state) => ({
    ...state,
    loading: true,
  })),
  on(HelpdeskActions.getPossibleAssigneesSuccess, (state, action) => ({
    ...state,
    assignees: action.data,
    loading: false,
  })),
  on(HelpdeskActions.getPossibleAssigneesFailure, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(HelpdeskActions.loadHelpdeskCategories, (state) => ({
    ...state,
    loading: true,
  })),
  on(HelpdeskActions.loadHelpdeskCategoriesSuccess, (state, action) => ({
    ...state,
    categories: action.data,
    loading: false,
  })),
  on(HelpdeskActions.loadHelpdeskCategoriesFailure, (state, action) => ({
    ...state,
    loading: false,
  }))
);
