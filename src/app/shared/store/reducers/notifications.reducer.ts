import { createReducer, on } from "@ngrx/store";
import * as NotificationsActions from "../actions/notifications.actions";
import { IPagination } from "./../../interfaces/pagination";
import { IParameters } from "./../../interfaces/parameters";

export const notificationFeatureKey = "notification";

export interface NotificationsState {
  list: Array<any>;
  pagination: IPagination;
  loading: boolean;
  message: string;
  parameters: IParameters;
  error: Error;
  count: number;
}

export const initialNotificationsState: NotificationsState = {
  list: [],
  pagination: null,
  loading: false,
  message: "",
  parameters: null,
  error: null,
  count: null,
};

export const notificationsReducer = createReducer(
  initialNotificationsState,

  on(NotificationsActions.loadNotifications, (state) => ({
    ...state,
    loading: true,
  })),
  on(NotificationsActions.loadNotificationsSuccess, (state, action) => ({
    ...state,
    list: action.data,
    pagination: action.paginationInfo,
    message: action.message,
    loading: false,
  })),
  on(NotificationsActions.loadNotificationsFailure, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(NotificationsActions.loadNotificationCount, (state) => ({
    ...state,
    loading: true,
  })),
  on(NotificationsActions.loadNotificationCountSuccess, (state, action) => ({
    ...state,
    count: action.data.count,
    message: action.message,
    loading: false,
  })),
  on(NotificationsActions.loadNotificationCountFailure, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(NotificationsActions.markAsRead, (state) => ({
    ...state,
    loading: true,
  })),
  on(NotificationsActions.markAsReadSuccess, (state, action) => ({
    ...state,
    message: action.message,
    loading: false,
  })),
  on(NotificationsActions.markAsReadFailure, (state, action) => ({
    ...state,
    loading: false,
  }))
);
