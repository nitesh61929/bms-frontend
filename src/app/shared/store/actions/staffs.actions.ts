import { createAction, props } from "@ngrx/store";
import { IStaffs } from "@shared/interfaces/staffs";
import { IParameters } from "../../interfaces";

export const loadStaffs = createAction("[Staffs] Load Staffs", props<{ params?: IParameters }>());

export const loadStaffsSuccess = createAction("[Staffs] Load Staffs Success", props<any>());

export const loadStaffsFailure = createAction("[Staffs] Load Staffs Failure", props<any>());

export const addStaff = createAction("[Staffs] Add Staff", props<{ payload: IStaffs }>());

export const addStaffSuccess = createAction("[Staffs] Add Staff Success", props<{ data: any }>());

export const addStaffFailure = createAction("[Staffs] Add Staff Failure", props<{ error: any }>());

export const addStaffAsAdmin = createAction("[Staffs] Add Staff As Admin", props<{ payload: IStaffs }>());

export const addStaffAsAdminSuccess = createAction("[Staffs] Add Staff As Admin Success", props<{ data: any }>());

export const addStaffAsAdminFailure = createAction("[Staffs] Add Staff As Admin Failure", props<{ error: any }>());

export const searchPropertyStaffs = createAction("[Staffs] Search Property Staffs", props<{ params?: IParameters }>());

export const searchPropertyStaffsSuccess = createAction("[Staffs] Search Property Staffs Success", props<any>());

export const searchPropertyStaffsFailure = createAction("[Staffs] Search Property Staffs Failure", props<any>());
