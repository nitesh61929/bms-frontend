import { createReducer, on } from "@ngrx/store";
import * as InvitationsActions from "../actions/invitations.actions";

export const invitationsFeatureKey = "invitations";

export interface InvitationsState {
  loading: boolean;
  message: string;
  list: [];
  error: [];
}

export const initialInvitationsState: InvitationsState = {
  list: [],
  loading: false,
  message: "",
  error: [],
};

export const invitationsReducer = createReducer(
  initialInvitationsState,

  on(InvitationsActions.invitePropertyOwner, (state) => ({ ...state, loading: true })),
  on(InvitationsActions.invitePropertyOwnerSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(InvitationsActions.invitePropertyOwnerFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),
  on(InvitationsActions.resendInvitation, (state: InvitationsState) => ({
    ...state,
    loading: true,
  })),

  on(InvitationsActions.resendInvitationSuccess, (state: InvitationsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(InvitationsActions.resendInvitationFailure, (state: InvitationsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(InvitationsActions.resendTenantInvitation, (state: InvitationsState) => ({
    ...state,
    loading: true,
  })),

  on(InvitationsActions.resendTenantInvitationSuccess, (state: InvitationsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(InvitationsActions.resendTenantInvitationFailure, (state: InvitationsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(InvitationsActions.cancelTenantInvitation, (state: InvitationsState) => ({
    ...state,
    loading: true,
  })),

  on(InvitationsActions.cancelTenantInvitationSuccess, (state: InvitationsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(InvitationsActions.cancelTenantInvitationFailure, (state: InvitationsState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  }))
);
