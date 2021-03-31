import { createAction, props } from "@ngrx/store";
import { IParameters } from "@shared/interfaces";
import { INotices } from "@shared/interfaces/notices";

export const loadNotices = createAction("[NOTICES] Load Notices", props<{ params?: IParameters }>());

export const loadNoticesSuccess = createAction("[NOTICES] Load Notices Success", props<any>());

export const loadNoticesFailure = createAction("[NOTICES] Load Notices Failure", props<any>());

export const addNotice = createAction("[NOTICES] Add Notice", props<{ payload: INotices }>());

export const addNoticeSuccess = createAction("[NOTICES] Add Notice Success", props<{ data: any }>());

export const addNoticeFailure = createAction("[NOTICES] Add Notice Failure", props<{ error: any }>());

export const deleteNotice = createAction("[NOTICES] Delete Notice", props<{ id: string }>());

export const deleteNoticeSuccess = createAction("[NOTICES] Delete Notice Success", props<any>());

export const deleteNoticeFailure = createAction("[NOTICES] Delete Notice Failure", props<any>());

export const updateNoticeStatus = createAction(
  "[NOTICES] Update Notice Status",
  props<{ id: string; params?: IParameters }>()
);

export const updateNoticeStatusSuccess = createAction("[NOTICES] Update Notice Status Success", props<any>());

export const updateNoticeStatusFailure = createAction("[NOTICES] Update Notice Status Failure", props<any>());

export const updateNotice = createAction("[NOTICES] Update Notice", props<{ id: string; payload: INotices }>());

export const updateNoticeSuccess = createAction("[NOTICES] Update Notice Success", props<{ data: any }>());

export const updateNoticeFailure = createAction("[NOTICES] Update Notice Failure", props<{ error: any }>());
