import { createReducer, on } from "@ngrx/store";
import { IPagination } from "@shared/interfaces";
import { IDropdownList } from "@shared/interfaces/dropdown-list";
import { IPanicAlertReport } from "../interfaces/panic-alert-report";
import { IGatekeeper } from "./../interfaces/gatekeeper";
import { IGatepassReport } from "./../interfaces/gatepass-report";
import * as ReportsActions from "./reports.actions";

export const reportsFeatureKey = "reports";

export interface ReportsState {
  loading: boolean;
  message: string;
  error: Error;
  pagination: IPagination;
  panicReports: IPanicAlertReport[];
  gatepassReports: IGatepassReport[];
  visitPurposes: IDropdownList[];
  gateKeepers: IGatekeeper[];
}

export const reportsInitialState: ReportsState = {
  loading: false,
  message: "",
  error: null,
  pagination: null,
  panicReports: [],
  gatepassReports: [],
  visitPurposes: [],
  gateKeepers: [],
};

export const reportsReducer = createReducer(
  reportsInitialState,
  on(ReportsActions.loadPanicReports, (state: ReportsState, action) => ({
    ...state,
    loading: true,
  })),

  on(ReportsActions.loadPanicReportsSuccess, (state: ReportsState, action: any) => ({
    ...state,
    loading: false,
    message: action.message,
    panicReports: action.data,
    pagination: action.paginationInfo,
  })),

  on(ReportsActions.loadPanicReportsFailure, (state: ReportsState, action: any) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(ReportsActions.loadGatepassReports, (state: ReportsState, action) => ({
    ...state,
    loading: true,
  })),

  on(ReportsActions.loadGatepassReportsSuccess, (state: ReportsState, action: any) => ({
    ...state,
    loading: false,
    message: action.message,
    gatepassReports: action.data,
    pagination: action.paginationInfo,
  })),

  on(ReportsActions.loadGatepassReportsFailure, (state: ReportsState, action: any) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(ReportsActions.getVisitPurposeList, (state: ReportsState, action) => ({
    ...state,
    loading: true,
  })),

  on(ReportsActions.getVisitPurposeListSuccess, (state: ReportsState, action: any) => ({
    ...state,
    loading: false,
    message: action.message,
    visitPurposes: action.data,
  })),

  on(ReportsActions.getVisitPurposeListFailure, (state: ReportsState, action: any) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(ReportsActions.getGatekeeperList, (state: ReportsState, action) => ({
    ...state,
    loading: true,
  })),

  on(ReportsActions.getGatekeeperListSuccess, (state: ReportsState, action: any) => ({
    ...state,
    loading: false,
    message: action.message,
    gateKeepers: action.data,
  })),

  on(ReportsActions.getGatekeeperListFailure, (state: ReportsState, action: any) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
