import { createAction, props } from "@ngrx/store";
import { IParameters } from "@shared/interfaces";

export const getPropertyDesignations = createAction(
  "[COMMITTEE_MEMBER] Get Designation list of a Property",
  props<any>()
);

export const getPropertyDesignationsSuccess = createAction(
  "[COMMITTEE_MEMBER] Get Designation list of a Property Success",
  props<any>()
);

export const getPropertyDesignationsFailure = createAction(
  "[COMMITTEE_MEMBER] Get Designation list of a Property Failure",
  props<any>()
);

export const loadAllPropertyUsers = createAction(
  "[COMMITTEE_MEMBER] Load All Property Users",
  props<{ params?: any }>()
);

export const loadAllPropertyUsersSuccess = createAction(
  "[COMMITTEE_MEMBER] Load All Property Users Success",
  props<any>()
);

export const loadAllPropertyUsersFailure = createAction(
  "[COMMITTEE_MEMBER] Load All Property Users Failure",
  props<any>()
);

export const loadPropertyCommitteeMembers = createAction(
  "[COMMITTEE_MEMBER] Load Property Committee Members",
  props<{ params?: IParameters }>()
);

export const loadPropertyCommitteeMembersSuccess = createAction(
  "[COMMITTEE_MEMBER] Load Property Committee Members Success",
  props<any>()
);

export const loadPropertyCommitteeMembersFailure = createAction(
  "[COMMITTEE_MEMBER] Load Property Committee Members Failure",
  props<any>()
);

export const assignCommitteeMemberToProperty = createAction(
  "[COMMITTEE_MEMBER] Assign Committee Member to Property",
  props<{ payload: any }>()
);

export const assignCommitteeMemberToPropertySuccess = createAction(
  "[COMMITTEE_MEMBER] Assign Committee Member to Property Success",
  props<any>()
);

export const assignCommitteeMemberToPropertyFailure = createAction(
  "[COMMITTEE_MEMBER] Assign Committee Member to Property Failure",
  props<any>()
);

export const removeCommitteeMemberFromProperty = createAction(
  "[COMMITTEE_MEMBER] Remove Committee Member From Property",
  props<{ committeeMemberId: string }>()
);

export const removeCommitteeMemberFromPropertySuccess = createAction(
  "[COMMITTEE_MEMBER] Remove Committee Member From Property Success",
  props<any>()
);

export const removeCommitteeMemberFromPropertyFailure = createAction(
  "[COMMITTEE_MEMBER] Remove Committee Member From Property Failure",
  props<any>()
);

export const updateCommitteeMemberDesignation = createAction(
  "[COMMITTEE_MEMBER] Update Committe Member Designation",
  props<{ committeeMemberId: string; params: any }>()
);

export const updateCommitteeMemberDesignationSuccess = createAction(
  "[COMMITTEE_MEMBER] Update Committe Member Designation Success",
  props<any>()
);

export const updateCommitteeMemberDesignationFailure = createAction(
  "[COMMITTEE_MEMBER] Update Committe Member Designation Failure",
  props<any>()
);
