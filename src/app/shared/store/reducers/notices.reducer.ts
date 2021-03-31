import { createReducer, on } from "@ngrx/store";
import * as NoticesActions from "../actions/notices.actions";
import { INotices } from "./../../interfaces/notices";
import { IPagination } from "./../../interfaces/pagination";

export interface NoticesState {
  loading: boolean;
  message: string;
  error: Error;
  list: INotices[];
  pagination: IPagination;
}

export const initialNoticesState: NoticesState = {
  loading: false,
  message: "",
  error: null,
  list: [],
  pagination: null,
};

export const noticeKey = "notice";

export const noticeReducer = createReducer(
  initialNoticesState,
  on(NoticesActions.loadNotices, (state: NoticesState) => ({
    ...state,
    loading: true,
  })),

  on(NoticesActions.loadNoticesSuccess, (state: NoticesState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    list: action.data,
    pagination: action.paginationInfo,
  })),

  on(NoticesActions.loadNoticesFailure, (state: NoticesState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(NoticesActions.addNotice, (state) => ({ ...state, loading: true })),
  on(NoticesActions.addNoticeSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(NoticesActions.addNoticeFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),
  on(NoticesActions.deleteNotice, (state: NoticesState) => ({
    ...state,
    loading: true,
  })),

  on(NoticesActions.deleteNoticeSuccess, (state: NoticesState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(NoticesActions.deleteNoticeFailure, (state: NoticesState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(NoticesActions.updateNoticeStatus, (state: NoticesState) => ({
    ...state,
    loading: true,
  })),

  on(NoticesActions.updateNoticeStatusSuccess, (state: NoticesState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(NoticesActions.updateNoticeStatusFailure, (state: NoticesState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(NoticesActions.updateNotice, (state) => ({ ...state, loading: true })),
  on(NoticesActions.updateNoticeSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(NoticesActions.updateNoticeFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  }))
);
