import { createAction, props } from "@ngrx/store";

export const loadProperty = createAction("[PROPERTY] Load Property", props<any>());

export const loadPropertySuccess = createAction("[PROPERTY] Load Property Success", props<any>());

export const loadPropertyFailure = createAction("[PROPERTY] Load Property Failure", props<any>());

export const updatePropertyDetail = createAction("[PROPERTY] Update Property Detail", props<{ payload: any }>());

export const updatePropertyDetailSuccess = createAction("[PROPERTY] Update Property Detail Success", props<any>());

export const updatePropertyDetailFailure = createAction("[PROPERTY] Update Property Detail Failure", props<any>());

export const updateVerifiedPropertyDetail = createAction("[PROPERTY] Update Verified Property Detail", props<any>());

export const updateVerifiedPropertyDetailSuccess = createAction(
  "[PROPERTY] Update Verified Property Detail Success",
  props<any>()
);

export const updateVerifiedPropertyDetailFailure = createAction(
  "[PROPERTY] Update Verified Property Detail Failure",
  props<any>()
);

export const loadPropertyType = createAction("[ON_BOARD] Load Property Type", props<any>());

export const loadPropertyTypeSuccess = createAction("[ON_BOARD] Load Property Type Success", props<{ data: any }>());

export const loadPropertyTypeFailure = createAction("[ON_BOARD] Load Property TypeFailure", props<{ error: any }>());

export const getPropertyDetail = createAction("[PROPERTY] Get Property Detail", props<{ propertyId?: any }>());

export const getPropertyDetailSuccess = createAction("[PROPERTY] Get Property Detail Success", props<any>());

export const getPropertyDetailFailure = createAction("[PROPERTY] Get Property Detail Failure", props<any>());

export const assignStaffToProperty = createAction("[PROPERTY] Assign Staff to Property", props<{ payload: any }>());

export const assignStaffToPropertySuccess = createAction("[PROPERTY] Assign Staff to Property Success", props<any>());

export const assignStaffToPropertyFailure = createAction("[PROPERTY] Assign Staff to Property Failure", props<any>());

export const removeStaffFromProperty = createAction("[PROPERTY] Remove Staff From Property", props<{ payload: any }>());

export const removeStaffFromPropertySuccess = createAction(
  "[PROPERTY] Remove Staff From Property Success",
  props<any>()
);

export const removeStaffFromPropertyFailure = createAction(
  "[PROPERTY] Remove Staff From Property Failure",
  props<any>()
);

export const updateStaffRole = createAction("[PROPERTY] Update Staff Role", props<{ payload: any }>());

export const updateStaffRoleSuccess = createAction("[PROPERTY] Update Staff Role Success", props<any>());

export const updateStaffRoleFailure = createAction("[PROPERTY] Update Staff Role Failure", props<any>());

export const addProperty = createAction("[PROPERTY] Add Property By Admin", props<{ payload: any }>());

export const addPropertySuccess = createAction("[PROPERTY] Add Property By Admin Success", props<any>());

export const addPropertyFailure = createAction("[PROPERTY] Add Property By Admin Failure", props<any>());

export const addPropertyByAdminFailure = createAction("[PROPERTY] Add Property By Admin Failure", props<any>());

export const updatePropertyStatus = createAction(
  "[PROPERTY] Update Property Status",
  props<{ propertyId: string; params: any }>()
);

export const updatePropertyStatusSuccess = createAction("[PROPERTY] Update Property Status Success", props<any>());

export const updatePropertyStatusFailure = createAction("[PROPERTY] Update Property Status Failure", props<any>());

export const loadOwnerOnLogin = createAction("[PROPERTY] Load User Properties", props<any>());

export const loadOwnerOnLoginSuccess = createAction("[PROPERTY] Load User Properties Success", props<any>());

export const loadOwnerOnLoginFailure = createAction("[PROPERTY] Load User Properties Failure", props<any>());

export const getUserPropertyPermissions = createAction(
  "[PROPERTY] Get User Property Permissions",
  props<{ params: any }>()
);

export const getUserPropertyPermissionsSuccess = createAction(
  "[PROPERTY] Get User Property Permissions Success",
  props<any>()
);

export const getUserPropertyPermissionsFailure = createAction(
  "[PROPERTY] Get User Property Permissions Failure",
  props<any>()
);
