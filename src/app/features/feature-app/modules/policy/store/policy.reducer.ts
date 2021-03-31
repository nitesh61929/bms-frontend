import { createReducer, on } from "@ngrx/store";
import { IPagination } from "@shared/interfaces";
import { IPolicy } from "../interfaces/policy";
import * as PolicyActions from "./policy.actions";

export interface PolicyState {
  loading: boolean;
  message: string;
  error: Error;
  list: IPolicy[];
  pagination: IPagination;
}

export const initialPolicyState: PolicyState = {
  loading: false,
  message: "",
  error: null,
  list: [],
  pagination: null,
};

export const policyKey = "policy";

export const policyReducer = createReducer(
  initialPolicyState,
  on(PolicyActions.loadPolicies, (state: PolicyState) => ({
    ...state,
    loading: true,
  })),

  on(PolicyActions.loadPoliciesSuccess, (state: PolicyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    list: action.data,
    pagination: action.paginationInfo,
  })),

  on(PolicyActions.loadPoliciesFailure, (state: PolicyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PolicyActions.addPolicy, (state) => ({ ...state, loading: true })),

  on(PolicyActions.addPolicySuccess, (state, action) => ({
    ...state,
    loading: false,
  })),

  on(PolicyActions.addPolicyFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),

  on(PolicyActions.updatePolicy, (state) => ({ ...state, loading: true })),

  on(PolicyActions.updatePolicySuccess, (state, action) => ({
    ...state,
    loading: false,
  })),

  on(PolicyActions.updatePolicyFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),

  on(PolicyActions.deletePolicy, (state: PolicyState) => ({
    ...state,
    loading: true,
  })),

  on(PolicyActions.deletePolicySuccess, (state: PolicyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(PolicyActions.deletePolicyFailure, (state: PolicyState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  }))
);
