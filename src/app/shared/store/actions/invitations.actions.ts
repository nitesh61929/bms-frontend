import { createAction, props } from "@ngrx/store";
import { IPropertyOwnerInvitationPayload } from "./../../interfaces/property-owner-invitation-payload";

export const invitePropertyOwner = createAction(
  "[INVITATIONS] Invite Property Owner",
  props<{ payload: IPropertyOwnerInvitationPayload }>()
);

export const invitePropertyOwnerSuccess = createAction(
  "[INVITATIONS] Invite Property Owner Success",
  props<{ data: any }>()
);

export const invitePropertyOwnerFailure = createAction(
  "[INVITATIONS] Invite Property Owner Failure",
  props<{ error: any }>()
);

export const resendInvitation = createAction("[INVITATIONS] Resend Invitation.", props<{ invitationId: string }>());

export const resendInvitationSuccess = createAction("[INVITATIONS] Resend Invitation Success", props<any>());

export const resendInvitationFailure = createAction("[INVITATIONS] Resend Invitation Failure", props<any>());

export const resendTenantInvitation = createAction(
  "[INVITATIONS] Resend Tenant Invitation.",
  props<{ invitationId: string }>()
);

export const resendTenantInvitationSuccess = createAction(
  "[INVITATIONS] Resend Tenant Invitation Success",
  props<any>()
);

export const resendTenantInvitationFailure = createAction(
  "[INVITATIONS] Resend Tenant Invitation Failure",
  props<any>()
);

export const cancelTenantInvitation = createAction(
  "[INVITATIONS] Cancel Tenant Invitation.",
  props<{ invitationId: string }>()
);

export const cancelTenantInvitationSuccess = createAction(
  "[INVITATIONS] Cancel Tenant Invitation Success",
  props<any>()
);

export const cancelTenantInvitationFailure = createAction(
  "[INVITATIONS] Cancel Tenant Invitation Failure",
  props<any>()
);
