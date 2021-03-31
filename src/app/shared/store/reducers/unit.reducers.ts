import { createReducer, on } from "@ngrx/store";
import { IAmountChargeType } from "@shared/interfaces/amount-charge-type";
import { IWaterChargeConfig } from "@shared/interfaces/water-charge-config";
import { IMaintenanceCharge } from "../../interfaces/maintenance-charge";
import { IMaintenanceFeature } from "../../interfaces/maintenance-feature";
import { IUnit } from "../../interfaces/unit";
import * as UnitActions from "../actions/unit.actions";
import { IPagination } from "./../../interfaces/pagination";
import { IUnitConfig } from "./../../interfaces/unit-config";
import { IUnitElectricityConfig } from "./../../interfaces/unit-electricity-config";

export interface UnitState {
  loading: boolean;
  message: string;
  error: Error;
  maintenanceCharges: IMaintenanceCharge[];
  maintenanceFeatures: IMaintenanceFeature[];
  amountChargeTypes: IAmountChargeType[];
  propertyUnitConfig: IUnitConfig;
  propertyWaterConfig: IWaterChargeConfig;
  propertyUnitElectricityConfig: IUnitElectricityConfig;
  unitList: IUnit[];
  unitDetail: IUnit;
  pagination: IPagination;
}

export const initialUnitState: UnitState = {
  loading: false,
  message: "",
  error: null,
  maintenanceCharges: [],
  maintenanceFeatures: [],
  amountChargeTypes: [],
  propertyUnitConfig: null,
  propertyWaterConfig: null,
  propertyUnitElectricityConfig: null,
  unitList: [],
  unitDetail: null,
  pagination: null,
};

export const unitKey = "unit";

export const unitReducer = createReducer(
  initialUnitState,
  on(UnitActions.getMaintenanceCharge, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.getMaintenanceChargeSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    maintenanceCharges: action.data,
  })),

  on(UnitActions.getMaintenanceChargeFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.getMaintenanceFeature, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.getMaintenanceFeatureSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    maintenanceFeatures: action.data,
  })),

  on(UnitActions.getMaintenanceFeatureFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.getAmountChargeTypes, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.getAmountChargeTypesSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    amountChargeTypes: action.data,
  })),

  on(UnitActions.getAmountChargeTypesFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updatePropertyMaintenanceConfig, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.updatePropertyMaintenanceConfigSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updatePropertyMaintenanceConfigFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),

  on(UnitActions.getPropertyMaintenanceConfig, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.getPropertyMaintenanceConfigSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    propertyUnitConfig: action.data,
  })),

  on(UnitActions.getPropertyMaintenanceConfigFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.loadUnits, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.loadUnitsSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    unitList: action.data,
    pagination: action.paginationInfo,
  })),

  on(UnitActions.loadUnitsFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    unitList: [],
    message: action.message,
  })),

  on(UnitActions.getUnitDetail, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.getUnitDetailSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    unitDetail: action.data,
  })),

  on(UnitActions.getUnitDetailFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.inviteTenant, (state) => ({ ...state, loading: true })),

  on(UnitActions.inviteTenantSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),

  on(UnitActions.inviteTenantFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),

  on(UnitActions.updateUnitAreaAndOccupancy, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.updateUnitAreaAndOccupancySuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updateUnitAreaAndOccupancyFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updateUnitRentConfig, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.updateUnitRentConfigSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updateUnitRentConfigFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updateUnitDocuments, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.updateUnitDocumentsSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updateUnitDocumentsFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updateUnitContractDate, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.updateUnitContractDateSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updateUnitContractDateFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updateUnitMaintenanceCharge, (state: UnitState) => ({
    ...state,
    loading: true,
  })),

  on(UnitActions.updateUnitMaintenanceChargeSuccess, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(UnitActions.updateUnitMaintenanceChargeFailure, (state: UnitState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),

  on(UnitActions.getUnitFilterDropdown, (state: UnitState) => ({
    ...state,
    loadingUnitFilters: true,
  })),

  on(UnitActions.getUnitFilterDropdownSuccess, (state: UnitState, action) => ({
    ...state,
    loadingUnitFilters: false,
    message: action.message,
    filterDropdown: action.data,
    pagination: action.paginationInfo,
  })),

  on(UnitActions.getUnitFilterDropdownFailure, (state: UnitState, action) => ({
    ...state,
    loadingUnitFilters: false,
    message: action.message,
  }))

  // on(UnitActions.getPropertyElectricityConfig, (state: UnitState) => ({
  //   ...state,
  //   loading: true,
  // })),

  // on(UnitActions.getPropertyElectricityConfigSuccess, (state: UnitState, action) => ({
  //   ...state,
  //   loading: false,
  //   message: action.message,
  //   propertyUnitElectricityConfig: action.data,
  // })),

  // on(UnitActions.getPropertyElectricityConfigFailure, (state: UnitState, action) => ({
  //   ...state,
  //   loading: false,
  //   message: action.message,
  // })),

  // on(UnitActions.savePropertyElectricityConfig, (state: UnitState) => ({
  //   ...state,
  //   loading: true,
  // })),

  // on(UnitActions.savePropertyElectricityConfigSuccess, (state: UnitState, action) => ({
  //   ...state,
  //   loading: false,
  //   message: action.message,
  // })),

  // on(UnitActions.savePropertyElectricityConfigFailure, (state: UnitState, action) => ({
  //   ...state,
  //   loading: false,
  //   message: action.message,
  // }))

  // on(UnitActions.getPropertyWaterChargeConfig, (state: UnitState) => ({
  //   ...state,
  //   loading: true,
  // })),

  // on(UnitActions.getPropertyWaterChargeConfigSuccess, (state: UnitState, action) => ({
  //   ...state,
  //   loading: false,
  //   message: action.message,
  //   propertyWaterConfig: action.data,
  // })),

  // on(UnitActions.getPropertyWaterChargeConfigFailure, (state: UnitState, action) => ({
  //   ...state,
  //   loading: false,
  //   message: action.message,
  // })),

  // on(UnitActions.savePropertyWaterChargeConfig, (state: UnitState) => ({
  //   ...state,
  //   loading: true,
  // })),

  // on(UnitActions.savePropertyWaterChargeConfigSuccess, (state: UnitState, action) => ({
  //   ...state,
  //   loading: false,
  //   message: action.message,
  // })),

  // on(UnitActions.savePropertyWaterChargeConfigFailure, (state: UnitState, action) => ({
  //   ...state,
  //   loading: false,
  //   message: action.message,
  //   error: action.error.error,
  // }))
);
