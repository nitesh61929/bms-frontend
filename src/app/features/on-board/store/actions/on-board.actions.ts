import { createAction, props } from "@ngrx/store";
export const loadOwnershipType = createAction("[ON_BOARD] Load Ownership Type", props<any>());

export const loadOwnershipTypeSuccess = createAction("[ON_BOARD] Load Ownership Type Success", props<{ data: any }>());

export const loadOwnershipTypeFailure = createAction("[ON_BOARD] Load Ownership TypeFailure", props<{ error: any }>());

export const getOwnerDetail = createAction("[ON_BOARD] Get owner Detail", props<{ id: string }>());

export const getOwnerDetailSuccess = createAction("[ON_BOARD] Get owner Detail Success", props<any>());

export const getOwnerDetailFailure = createAction("[ON_BOARD] Get owner Detail Failure", props<{ error: any }>());

export const onBoardOwner = createAction("[ON_BOARD] On Board Owner", props<{ payload: any }>());

export const onBoardOwnerSuccess = createAction("[ON_BOARD] On Board Owner Success", props<{ data: any }>());

export const onBoardOwnerFailure = createAction("[ON_BOARD] On Board Owner Failure", props<{ error: any }>());

export const onBoardOwnerUpdate = createAction("[ON_BOARD] On Board Owner Update", props<{ payload: any }>());

export const onBoardOwnerUpdateSuccess = createAction(
  "[ON_BOARD] On Board Owner Update Success",
  props<{ data: any }>()
);

export const onBoardOwnerUpdateFailure = createAction(
  "[ON_BOARD] On Board Owner Update Failure",
  props<{ error: any }>()
);

export const onBoardProperty = createAction("[ON_BOARD] On Board Property", props<{ payload: any }>());

export const onBoardPropertySuccess = createAction("[ON_BOARD] On Board Property Success", props<{ data: any }>());

export const onBoardPropertyFailure = createAction("[ON_BOARD] On Board Property Failure", props<{ error: any }>());

export const setOnBoardPropertyType = createAction("[ON_BOARD] On Board Property Type", props<{ data: any }>());
