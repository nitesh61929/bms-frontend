import { createAction, props } from "@ngrx/store";
import { IParameters } from "@shared/interfaces";

export const loadPropertyStaffs = createAction("[Staffs] Load Property Staffs", props<{ params?: IParameters }>());

export const loadPropertyStaffsSuccess = createAction("[Staffs] Load Property Staffs Success", props<any>());

export const loadPropertyStaffsFailure = createAction("[Staffs] Load Property Staffs Failure", props<any>());
