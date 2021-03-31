import { createAction, props } from "@ngrx/store";
import { IParameters } from "@shared/interfaces";
import { IUpdateInvitationStatus } from "../../interfaces/update-invitation-status";

export const loadActiveAccounts = createAction("[ACCOUNTS] Load Active Accounts", props<{ params?: IParameters }>());

export const loadActiveAccountsSuccess = createAction(
  "[ACCOUNTS] Load Active Accounts Success",
  props<{ data: any; paginationInfo: any }>()
);

export const loadActiveAccountsFailure = createAction(
  "[ACCOUNTS] Load Active Accounts Failure",
  props<{ error: any }>()
);

export const loadPendingAccountInvitations = createAction(
  "[ACCOUNTS] Load Pending Invitations",
  props<{ params?: IParameters }>()
);

export const loadPendingAccountInvitationsSuccess = createAction(
  "[ACCOUNTS] Load Pending Account Invitations Success",
  props<{ data: any; paginationInfo: any }>()
);

export const loadPendingAccountInvitationsFailure = createAction(
  "[ACCOUNTS] Load Pending Account Invitations Failure",
  props<{ error: any }>()
);

export const updateInvitationStatus = createAction(
  "[ACCOUNTS] Update Invitation Status",
  props<{ payload: IUpdateInvitationStatus }>()
);

export const updateInvitationStatusSuccess = createAction(
  "[ACCOUNTS] Update Invitation Status Success",
  props<{ data: any }>()
);

export const updateInvitationStatusFailure = createAction(
  "[ACCOUNTS] Update Invitation Status Failure",
  props<{ error: any }>()
);

export const getAccountDetails = createAction("[ACCOUNTS] Get Account Details", props<{ id: string }>());

export const getAccountDetailsSuccess = createAction("[ACCOUNTS] Get Account Details Success", props<any>());

export const getAccountDetailsFailure = createAction("[ACCOUNTS] Get Account Details Failure", props<any>());
