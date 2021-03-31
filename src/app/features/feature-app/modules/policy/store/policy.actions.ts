import { createAction, props } from "@ngrx/store";

export const loadPolicies = createAction("[POLICY] Load Policies", props<{ params?: any }>());

export const loadPoliciesSuccess = createAction("[POLICY] Load Policies Success", props<any>());

export const loadPoliciesFailure = createAction("[POLICY] Load Policies Failure", props<any>());

export const addPolicy = createAction("[POLICY]] Add Policy", props<{ payload: any }>());

export const addPolicySuccess = createAction("[POLICY]] Add Policy Success", props<{ data: any }>());

export const addPolicyFailure = createAction("[POLICY]] Add Policy Failure", props<{ error: any }>());

export const deletePolicy = createAction("[POLICY] Delete Policy", props<{ policyId: string }>());

export const deletePolicySuccess = createAction("[POLICY] Delete Policy Success", props<any>());

export const deletePolicyFailure = createAction("[POLICY] Delete Policy Failure", props<any>());

export const updatePolicy = createAction("[POLICY]] Update Policy", props<{ policyId: string; payload: any }>());

export const updatePolicySuccess = createAction("[POLICY]] Update Policy Success", props<{ data: any }>());

export const updatePolicyFailure = createAction("[POLICY]] Update Policy Failure", props<{ error: any }>());
