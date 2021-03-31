import { createAction, props } from "@ngrx/store";
import { IParameters } from "@shared/interfaces";

export const getMaintenanceCharge = createAction("[PROPERTY] Get Maintenance Charge", props<any>());

export const getMaintenanceChargeSuccess = createAction("[PROPERTY] Get Maintenance Charge Success", props<any>());

export const getMaintenanceChargeFailure = createAction("[PROPERTY] Get Maintenance Charge Failure", props<any>());

export const getMaintenanceFeature = createAction("[PROPERTY] Get Maintenance Feature", props<any>());

export const getMaintenanceFeatureSuccess = createAction("[PROPERTY] Get Maintenance Feature Success", props<any>());

export const getMaintenanceFeatureFailure = createAction("[PROPERTY] Get Maintenance Feature Failure", props<any>());

export const updatePropertyMaintenanceConfig = createAction(
  "[PROPERTY] Update Maintenance Config",
  props<{ payload: any }>()
);

export const updatePropertyMaintenanceConfigSuccess = createAction(
  "[PROPERTY] Update Maintenance Config Success",
  props<any>()
);

export const updatePropertyMaintenanceConfigFailure = createAction(
  "[PROPERTY] Update Maintenance Config Failure",
  props<any>()
);

export const getPropertyMaintenanceConfig = createAction("[PROPERTY] Get property unit config", props<any>());

export const getPropertyMaintenanceConfigSuccess = createAction(
  "[PROPERTY] Get property unit config Success",
  props<any>()
);

export const getPropertyMaintenanceConfigFailure = createAction(
  "[PROPERTY] Get property unit config Failure",
  props<any>()
);

export const loadUnits = createAction("[PROPERTY] Load Units", props<{ payload?: any; params?: IParameters }>());

export const loadUnitsSuccess = createAction("[PROPERTY] Load Units Success", props<any>());

export const loadUnitsFailure = createAction("[PROPERTY] Load Units Failure", props<any>());

export const getUnitDetail = createAction("[PROPERTY] Get Unit Detail", props<{ id: string }>());

export const getUnitDetailSuccess = createAction("[PROPERTY] Get Unit Detail Success", props<any>());

export const getUnitDetailFailure = createAction("[PROPERTY] Get Unit Detail Failure", props<any>());

export const inviteTenant = createAction("[PROPERTY] Invite Tenant", props<{ payload: any }>());

export const inviteTenantSuccess = createAction("[PROPERTY] Invite Tenant Success", props<{ data: any }>());

export const inviteTenantFailure = createAction("[PROPERTY] Invite Tenant Failure", props<{ error: any }>());

export const updateUnitAreaAndOccupancy = createAction(
  "[PROPERTY] Update Unit Area and Occupancy",
  props<{ payload: any; id: string }>()
);

export const updateUnitAreaAndOccupancySuccess = createAction(
  "[PROPERTY] Update Unit Area and Occupancy Success",
  props<any>()
);

export const updateUnitAreaAndOccupancyFailure = createAction(
  "[PROPERTY] Update Unit Area and Occupancy Failure",
  props<any>()
);

export const updateUnitRentConfig = createAction(
  "[PROPERTY] Update Unit Rent Config",
  props<{ payload: any; id: string }>()
);

export const updateUnitRentConfigSuccess = createAction("[PROPERTY] Update Unit Rent Config Success", props<any>());

export const updateUnitRentConfigFailure = createAction("[PROPERTY] Update Unit Rent Config Failure", props<any>());

export const updateUnitDocuments = createAction(
  "[PROPERTY] Update Unit Documents",
  props<{ payload: any; id: string }>()
);

export const updateUnitDocumentsSuccess = createAction("[PROPERTY] Update Unit Documents Success", props<any>());

export const updateUnitDocumentsFailure = createAction("[PROPERTY] Update Unit Documents Failure", props<any>());

export const updateUnitContractDate = createAction(
  "[PROPERTY] Update Unit Contract Date",
  props<{ payload: any; id: string }>()
);

export const updateUnitContractDateSuccess = createAction("[PROPERTY] Update Unit Contract Date Success", props<any>());

export const updateUnitContractDateFailure = createAction("[PROPERTY] Update Unit Contract Date Failure", props<any>());

export const updateUnitMaintenanceCharge = createAction(
  "[PROPERTY] Update Unit Maintenance Charge",
  props<{ payload: any; id: string }>()
);

export const updateUnitMaintenanceChargeSuccess = createAction(
  "[PROPERTY] Update Unit Maintenance Charge Success",
  props<any>()
);

export const updateUnitMaintenanceChargeFailure = createAction(
  "[PROPERTY] Update Unit Maintenance Charge Failure",
  props<any>()
);

export const getUnitFilterDropdown = createAction("[UNIT] Get Unit Filter dropdown", props<{ payload?: any }>());

export const getUnitFilterDropdownSuccess = createAction("[UNIT] Get Unit Filter dropdown Success", props<any>());

export const getUnitFilterDropdownFailure = createAction("[UNIT] Get Unit Filter dropdown Failure", props<any>());

// export const getPropertyElectricityConfig = createAction(
//   "[Property] Get property unit electricity config",
//   props<any>()
// );

// export const getPropertyElectricityConfigSuccess = createAction(
//   "[PROPERTY] Get property unit electricity config Success",
//   props<any>()
// );

// export const getPropertyElectricityConfigFailure = createAction(
//   "[PROPERTY] Get property unit electricity config Failure",
//   props<any>()
// );

// export const savePropertyElectricityConfig = createAction(
//   "[PROPERTY] Save property unit electricity config",
//   props<{ payload: any }>()
// );

// export const savePropertyElectricityConfigSuccess = createAction(
//   "[PROPERTY] Save property unit electricity config Success",
//   props<any>()
// );

// export const savePropertyElectricityConfigFailure = createAction(
//   "[PROPERTY] Save property unit electricity config Failure",
//   props<any>()
// );

// export const getPropertyWaterChargeConfig = createAction("[Property] Get property unit Water config", props<any>());

// export const getPropertyWaterChargeConfigSuccess = createAction(
//   "[PROPERTY] Get property unit Water config Success",
//   props<any>()
// );

// export const getPropertyWaterChargeConfigFailure = createAction(
//   "[PROPERTY] Get property unit Water config Failure",
//   props<any>()
// );

// export const savePropertyWaterChargeConfig = createAction(
//   "[PROPERTY] Save property unit Water config",
//   props<{ payload: any }>()
// );

// export const savePropertyWaterChargeConfigSuccess = createAction(
//   "[PROPERTY] Save property unit Water config Success",
//   props<any>()
// );

// export const savePropertyWaterChargeConfigFailure = createAction(
//   "[PROPERTY] Save property unit Water config Failure",
//   props<any>()
// );
export const getAmountChargeTypes = createAction("[PROPERTY] Get Amount Charge", props<any>());

export const getAmountChargeTypesSuccess = createAction("[PROPERTY] Get Amount Charge Success", props<any>());

export const getAmountChargeTypesFailure = createAction("[PROPERTY] Get Amount Charge Failure", props<any>());
