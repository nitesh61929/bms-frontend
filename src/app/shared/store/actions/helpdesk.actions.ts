import { createAction, props } from "@ngrx/store";
import { IParameters } from "@shared/interfaces";

export const loadHelpdesk = createAction("[HELPDESK] Load Helpdesk", props<{ params?: IParameters }>());

export const loadHelpdeskSuccess = createAction("[HELPDESK] Load Helpdesk Success", props<any>());

export const loadHelpdeskFailure = createAction("[HELPDESK] Load Helpdesk Failure", props<any>());

export const getHelpdeskDetail = createAction("[HELPDESK] Get Helpdesk Detail", props<{ id: string }>());

export const getHelpdeskDetailSuccess = createAction("[HELPDESK] Get Helpdesk Detail Success", props<any>());

export const getHelpdeskDetailFailure = createAction("[HELPDESK] Get Helpdesk Detail Failure", props<any>());

export const getHelpdeskComments = createAction(
  "[HELPDESK] Get Helpdesk Comments",
  props<{ id: string; params: IParameters }>()
);

export const getHelpdeskCommentsSuccess = createAction("[HELPDESK] Get Helpdesk Comments Success", props<any>());

export const getHelpdeskCommentsFailure = createAction("[HELPDESK] Get Helpdesk Comments Failure", props<any>());

export const postComment = createAction("[HELPDESK] Post Comment", props<{ helpdeskId: string; payload: any }>());

export const postCommentSuccess = createAction("[HELPDESK] Post Comment Success", props<{ data: any }>());

export const postCommentFailure = createAction("[HELPDESK] Post Comment Failure", props<{ error: any }>());

export const updateHelpdeskStatus = createAction(
  "[HELPDESK] Update Helpdesk Status",
  props<{ id: string; params?: any }>()
);

export const updateHelpdeskStatusSuccess = createAction("[HELPDESK] Update Helpdesk Status Success", props<any>());

export const updateHelpdeskStatusFailure = createAction("[HELPDESK] Update Helpdesk Status Failure", props<any>());

export const updateHelpdeskDueDate = createAction(
  "[HELPDESK] Update Helpdesk Due Date",
  props<{ id: string; params?: any }>()
);

export const updateHelpdeskDueDateSuccess = createAction("[HELPDESK] Update Helpdesk Due Date Success", props<any>());

export const updateHelpdeskDueDateFailure = createAction("[HELPDESK] Update Helpdesk Due Date Failure", props<any>());

export const updateHelpdeskAssignee = createAction(
  "[HELPDESK] Update Helpdesk Assignee",
  props<{ id: string; params?: any }>()
);

export const updateHelpdeskAssigneeSuccess = createAction("[HELPDESK] Update Helpdesk Assignee Success", props<any>());

export const updateHelpdeskAssigneeFailure = createAction("[HELPDESK] Update Helpdesk Assignee Failure", props<any>());

export const getPossibleAssignees = createAction(
  "[HELPDESK] Get Possible Assignees",
  props<{ params?: IParameters }>()
);

export const getPossibleAssigneesSuccess = createAction("[HELPDESK] Get Possible Assignees Success", props<any>());

export const getPossibleAssigneesFailure = createAction("[HELPDESK] Get Possible Assignees Failure", props<any>());

export const loadHelpdeskCategories = createAction(
  "[HELPDESK] Load Helpdesk Categories",
  props<{ params?: IParameters }>()
);

export const loadHelpdeskCategoriesSuccess = createAction(
  "[HELPDESK] Load Helpdesk Categories Success",
  props<{ data: any; paginationInfo: any }>()
);

export const loadHelpdeskCategoriesFailure = createAction(
  "[HELPDESK] Load Helpdesk Categories Failure",
  props<{ error: any }>()
);
