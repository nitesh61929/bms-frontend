import { createAction, props } from "@ngrx/store";
import { IParameters } from "../../interfaces/parameters";
import { IMarkRead } from "./../../interfaces/mark-read";

export const setParameters = createAction("[Notifications] Set Filter", props<{ params: IParameters }>());

export const loadNotifications = createAction(
  "[Notifications] Load Notifications",
  props<{ id?: string; params?: IParameters }>()
);

export const loadNotificationsSuccess = createAction("[Notifications] Load Notifications Success", props<any>());

export const loadNotificationsFailure = createAction("[Notifications] Load Notifications Failure", props<any>());

export const loadNotificationCount = createAction("[Notifications] Load Notification Count", props<{ id?: string }>());

export const loadNotificationCountSuccess = createAction(
  "[Notifications] Load Notification Count Success",
  props<any>()
);

export const loadNotificationCountFailure = createAction(
  "[Notifications] Load Notification Count Failure",
  props<any>()
);

export const markAsRead = createAction("[Notifications] Mark As Read", props<{ payload: IMarkRead }>());

export const markAsReadSuccess = createAction("[Notifications] Mark As Read Success", props<any>());

export const markAsReadFailure = createAction("[Notifications] Mark As Read Failure", props<any>());
