import { createReducer, on } from "@ngrx/store";
import { IDropdownList, IPagination, IPropertyUser } from "@shared/interfaces";
import * as CommitteeMemberActions from "./committee-member.actions";

export interface CommitteeMemberState {
  list: [];
  detail: any;
  loading: boolean;
  message: string;
  error: Error;
  pagination: IPagination;
  propertyUsers: IPropertyUser[];
  propertyCommitteeMembers: [];
  designations: IDropdownList[];
}

export const initialCommitteeMemberState: CommitteeMemberState = {
  list: [],
  loading: false,
  message: "",
  detail: null,
  error: null,
  pagination: null,
  propertyUsers: [],
  propertyCommitteeMembers: [],
  designations: [],
};

export const committeeMemberKey = "committeeMember";

export const committeeMemberReducer = createReducer(
  initialCommitteeMemberState,
  on(CommitteeMemberActions.getPropertyDesignations, (state: CommitteeMemberState) => ({
    ...state,
    loading: true,
  })),

  on(CommitteeMemberActions.getPropertyDesignationsSuccess, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    designations: action.data,
    message: action.message,
  })),

  on(CommitteeMemberActions.getPropertyDesignationsFailure, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(CommitteeMemberActions.loadAllPropertyUsers, (state: CommitteeMemberState) => ({
    ...state,
    loading: true,
  })),

  on(CommitteeMemberActions.loadAllPropertyUsersSuccess, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    propertyUsers: action.data,
    pagination: action.paginationInfo,
    message: action.message,
  })),

  on(CommitteeMemberActions.loadAllPropertyUsersFailure, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(CommitteeMemberActions.loadPropertyCommitteeMembers, (state: CommitteeMemberState) => ({
    ...state,
    loading: true,
  })),

  on(CommitteeMemberActions.loadPropertyCommitteeMembersSuccess, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    propertyCommitteeMembers: action.data,
    pagination: action.paginationInfo,
    message: action.message,
  })),

  on(CommitteeMemberActions.loadPropertyCommitteeMembersFailure, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(CommitteeMemberActions.assignCommitteeMemberToProperty, (state: CommitteeMemberState) => ({
    ...state,
    loading: true,
  })),

  on(CommitteeMemberActions.assignCommitteeMemberToPropertySuccess, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(CommitteeMemberActions.assignCommitteeMemberToPropertyFailure, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(CommitteeMemberActions.removeCommitteeMemberFromProperty, (state: CommitteeMemberState) => ({
    ...state,
    loading: true,
  })),

  on(CommitteeMemberActions.removeCommitteeMemberFromPropertySuccess, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(CommitteeMemberActions.removeCommitteeMemberFromPropertyFailure, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(CommitteeMemberActions.updateCommitteeMemberDesignation, (state: CommitteeMemberState) => ({
    ...state,
    loading: true,
  })),

  on(CommitteeMemberActions.updateCommitteeMemberDesignationSuccess, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(CommitteeMemberActions.updateCommitteeMemberDesignationFailure, (state: CommitteeMemberState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  }))
);
