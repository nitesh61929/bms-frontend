import { createAction, props } from "@ngrx/store";
import { IUser } from "@shared/interfaces/user/user";
import { ICreateUpdatePassword, IParameters } from "../../interfaces";

export const setFilterParameters = createAction("[Users] Set Filter parameters", props<{ params: IParameters }>());

export const loadUsers = createAction("[Users] Load Users", props<{ params?: IParameters }>());

export const loadUsersSuccess = createAction("[Users] Load Users Success", props<any>());

export const loadUsersFailure = createAction("[Users] Load Users Failure", props<any>());

export const getUserById = createAction("[Users] Get User by id.", props<{ id: number }>());

export const getUserByIdSuccess = createAction("[Users] Get Users Success", props<any>());

export const getUserByIdFailure = createAction("[Users] Get Users Failure", props<any>());

export const getUserTypes = createAction("[Users] Get User Types", props<any>());

export const getUserTypesSuccess = createAction("[Users] Get Users Types Success", props<any>());

export const getUsersTypesFailure = createAction("[Users] Get Users Types Failure", props<any>());

export const createNewUser = createAction("[Users] Create new User", props<{ payload: IUser }>());

export const createNewUserSuccess = createAction("[Users] Create User Success", props<any>());

export const createNewUsersFailure = createAction("[Users] Save Users Failure", props<any>());

export const updateUser = createAction("[Users] Update User", props<{ payload: IUser }>());

export const updateUserSuccess = createAction("[Users] Update Users Success", props<any>());

export const updateUserFailure = createAction("[Users] Update Users Failure", props<any>());

export const deleteUser = createAction("[Users] Delete User", props<{ id: number }>());

export const deleteUserSuccess = createAction("[Users] Delete Users Success", props<any>());

export const deleteUserFailure = createAction("[Users] Delete Users Failure", props<any>());

export const setCurrentUser = createAction("[Users] Set current logged in user", props<{ payload: IUser }>());

export const updateProfile = createAction("[Users] Update Profile Of the user", props<{ payload: IUser }>());

export const updateProfileSuccess = createAction("[User] Update profile success", props<any>());

export const updateProfileFailure = createAction("[User Profile] Update profile failure", props<any>());

export const getAllRoles = createAction("[Users] Get all roles", props<{ params?: IParameters }>());

export const getAllRolesSuccess = createAction("[Users] Get all roles Success", props<any>());

export const getAllRolesFailure = createAction("[Users] Get all roles Failure", props<any>());

export const createUpdatePassword = createAction(
  "[Users] Create or update password Of the user",
  props<{ payload: ICreateUpdatePassword }>()
);

export const createUpdatePasswordSuccess = createAction("[Users] Create or update password success", props<any>());

export const createUpdatePasswordFailure = createAction("[Users] Create or update password failure", props<any>());

export const getUsersByNameOrMobile = createAction("[Users] Get Users by name or mobile.", props<{ params: any }>());

export const getUsersByNameOrMobileSuccess = createAction("[Users] Get Users by name or mobile Success", props<any>());

export const getUsersByNameOrMobileFailure = createAction("[Users] Get Users by name or mobile Failure", props<any>());
