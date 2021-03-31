import { createAction, props } from "@ngrx/store";

export const getProfileDetails = createAction("[PROFILE] Get profile Details", props<any>());

export const getProfileDetailsSuccess = createAction("[PROFILE] Get profile Details Success", props<any>());

export const getProfileDetailsFailure = createAction("[PROFILE] Get profile Details Failure", props<any>());

export const updateProfileDetails = createAction("[PROFILE] Update Profile Details", props<{ payload: any }>());

export const updateProfileDetailsSuccess = createAction("[PROFILE] Update Profile Details Success", props<any>());

export const updateProfileDetailsFailure = createAction("[PROFILE] Update Profile Details Failure", props<any>());

export const getCompanyDetail = createAction("[PROFILE] Get Company Detail", props<{ id: string }>());

export const getCompanyDetailSuccess = createAction("[PROFILE] Get Company Detail Success", props<any>());

export const getCompanyDetailFailure = createAction("[PROFILE] Get Company Detail Failure", props<any>());

export const updateCompanyDetails = createAction("[PROFILE] Update Company Details", props<{ payload: any }>());

export const updateCompanyDetailsSuccess = createAction("[PROFILE] Update Company Details Success", props<any>());

export const updateCompanyDetailsFailure = createAction("[PROFILE] Update Company Details Failure", props<any>());

export const updateVerifiedCompanyDetails = createAction(
  "[PROFILE] Update Verified Company Details",
  props<{ payload: any }>()
);

export const updateVerifiedCompanyDetailsSuccess = createAction(
  "[PROFILE] Update Verified Company Details Success",
  props<any>()
);

export const updateVerifiedCompanyDetailsFailure = createAction(
  "[PROFILE] Update Verified Company Details Failure",
  props<any>()
);

export const uploadProfilePicture = createAction("[PROFILE] Upload Profile Picture", props<{ payload: any }>());

export const uploadProfilePictureSuccess = createAction("[PROFILE] Upload Profile Picture Success", props<any>());

export const uploadProfilePictureFailure = createAction("[PROFILE] Upload Profile Picture Failure", props<any>());

export const updatePassword = createAction("[PROFILE] Update Password", props<{ payload: any }>());

export const updatePasswordSuccess = createAction("[PROFILE] Update Password Success", props<any>());

export const updatePasswordFailure = createAction("[PROFILE] Update Password Failure", props<any>());

export const createPassword = createAction("[PROFILE] Create Password", props<{ payload: any }>());

export const createPasswordSuccess = createAction("[PROFILE] Create Password Success", props<any>());

export const createPasswordFailure = createAction("[PROFILE] Create Password Failure", props<any>());

export const updateProfileCredential = createAction("[PROFILE] Update Profile Credentials", props<{ payload: any }>());

export const updateProfileCredentialSuccess = createAction("[PROFILE] Update Profile Credential Success", props<any>());

export const updateProfileCredentialFailure = createAction("[PROFILE] Update Profile Credential Failure", props<any>());

export const verifyProfileCredential = createAction("[PROFILE] Verify Profile Credential", props<{ payload: any }>());

export const verifyProfileCredentialSuccess = createAction("[PROFILE] Verify Profile Credential Success", props<any>());

export const verifyProfileCredentialFailure = createAction("[PROFILE] Verify Profile Credential Failure", props<any>());

export const getBillingDetail = createAction("[PROFILE] Get Billing Detail", props<any>());

export const getBillingDetailSuccess = createAction("[PROFILE] Get Billing Detail Success", props<any>());

export const getBillingDetailFailure = createAction("[PROFILE] Get Billing Detail Failure", props<any>());

export const forgotPassword = createAction("[PROFILE] Forgot Password", props<{ payload: any }>());

export const forgotPasswordSuccess = createAction("[PROFILE] Forgot Password Success", props<any>());

export const forgotPasswordFailure = createAction("[PROFILE] Forgot Password Failure", props<any>());

export const verifyForgotPasswordLink = createAction(
  "[PROFILE] Verify Forgot Password Link",
  props<{ payload: any }>()
);

export const verifyForgotPasswordLinkSuccess = createAction(
  "[PROFILE] Verify Forgot Password Link Success",
  props<any>()
);

export const verifyForgotPasswordLinkFailure = createAction(
  "[PROFILE] Verify Forgot Password Link Failure",
  props<any>()
);

export const resetPassword = createAction("[PROFILE] Reset Password", props<{ payload: any }>());

export const resetPasswordSuccess = createAction("[PROFILE] Reset Password Success", props<any>());

export const resetPasswordFailure = createAction("[PROFILE] Reset Password Failure", props<any>());
