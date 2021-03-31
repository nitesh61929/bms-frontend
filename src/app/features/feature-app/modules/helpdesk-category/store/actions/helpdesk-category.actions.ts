import { createAction, props } from "@ngrx/store";
import { IParameters } from "@shared/interfaces";
import { IHelpdeskCategory } from "../../interfaces/ticket-category";

export const getHelpdeskCategories = createAction(
  "[HELPDESK] Get Helpdesk Categories",
  props<{ params?: IParameters }>()
);

export const getHelpdeskCategoriesSuccess = createAction(
  "[HELPDESK] Get Helpdesk Categories Success",
  props<{ data: any; paginationInfo: any }>()
);

export const getHelpdeskCategoriesFailure = createAction(
  "[HELPDESK] Get Helpdesk Categories Failure",
  props<{ error: any }>()
);

export const addHelpdeskCategory = createAction(
  "[HELPDESK] Add helpdesk Category",
  props<{ payload: IHelpdeskCategory }>()
);

export const addHelpdeskCategorySuccess = createAction(
  "[HELPDESK] Add helpdesk Category Success",
  props<{ data: any }>()
);

export const addHelpdeskCategoryFailure = createAction(
  "[HELPDESK] Add helpdesk Category Failure",
  props<{ error: any }>()
);

export const updateHelpdeskCategory = createAction(
  "[HELPDESK] Update Helpdesk Category",
  props<{ id: string; payload: IHelpdeskCategory }>()
);

export const updateHelpdeskCategorySuccess = createAction(
  "[HELPDESK] Update Helpdesk Category Success",
  props<{ data: any }>()
);

export const updateHelpdeskCategoryFailure = createAction(
  "[HELPDESK] Update Helpdesk Category Failure",
  props<{ error: any }>()
);

export const deleteHelpdeskCategory = createAction("[HELPDESK] Delete Helpdesk Category", props<{ id: string }>());

export const deleteHelpdeskCategorySuccess = createAction("[HELPDESK] Delete Helpdesk Category Success", props<any>());

export const deleteHelpdeskCategoryFailure = createAction("[HELPDESK] Delete Helpdesk Category Failure", props<any>());
