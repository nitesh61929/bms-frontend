import { createReducer, on } from "@ngrx/store";
import { IOwnerDetails } from "@shared/interfaces/owner-details";
import { ITrialDates } from "app/features/feature-app/modules/profile/interfaces/trial-dates";
import * as profileActions from "../actions/profile.actions";
import { IProfile } from "./../../interfaces/profile";

export interface ProfileState {
  list: [];
  detail: IProfile;
  loading: boolean;
  message: string;
  error: Error;
  companyDetail: IOwnerDetails;
  profileError: Error;
  companyProfileError: Error;
  updateCredentialError: Error;
  verifyCredentialError: Error;
  billingDetail: ITrialDates;
  billingDetailError: Error;
}

export const initialProfileState: ProfileState = {
  list: [],
  loading: false,
  message: "",
  detail: null,
  error: null,
  companyDetail: null,
  profileError: null,
  companyProfileError: null,
  updateCredentialError: null,
  verifyCredentialError: null,
  billingDetail: null,
  billingDetailError: null,
};

export const profileKey = "profile";

export const profileReducer = createReducer(
  initialProfileState,
  on(profileActions.getProfileDetails, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.getProfileDetailsSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    detail: action.data,
    message: action.message,
  })),

  on(profileActions.getProfileDetailsFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.updateProfileDetails, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.updateProfileDetailsSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.updateProfileDetailsFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    profileError: action.error.error,
  })),

  on(profileActions.getCompanyDetail, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.getCompanyDetailSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    companyDetail: action.data,
  })),

  on(profileActions.getCompanyDetailFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.updateCompanyDetails, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.updateCompanyDetailsSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.updateCompanyDetailsFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    companyProfileError: action.error.error,
  })),

  on(profileActions.updateVerifiedCompanyDetails, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.updateVerifiedCompanyDetailsSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.updateVerifiedCompanyDetailsFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),

  on(profileActions.uploadProfilePicture, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.uploadProfilePictureSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.uploadProfilePictureFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),

  on(profileActions.updatePassword, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.updatePasswordSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.updatePasswordFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),

  on(profileActions.createPassword, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.createPasswordSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.createPasswordFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),

  on(profileActions.updateProfileCredential, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.updateProfileCredentialSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.updateProfileCredentialFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    updateCredentialError: action.error.error,
  })),

  on(profileActions.verifyProfileCredential, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.verifyProfileCredentialSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.verifyProfileCredentialFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    verifyCredentialError: action.error.error,
  })),

  on(profileActions.getBillingDetail, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),

  on(profileActions.getBillingDetailSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    billingDetail: action.data,
  })),

  on(profileActions.getBillingDetailFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    billingDetailError: action.error,
  })),

  on(profileActions.forgotPassword, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),
  on(profileActions.forgotPasswordSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.forgotPasswordFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    forgotPasswordError: action.error.error,
  })),
  on(profileActions.verifyForgotPasswordLink, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),
  on(profileActions.verifyForgotPasswordLinkSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(profileActions.verifyForgotPasswordLinkFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    error: action.error.error,
  })),
  on(profileActions.resetPassword, (state: ProfileState) => ({
    ...state,
    loading: true,
  })),
  on(profileActions.resetPasswordSuccess, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),

  on(profileActions.resetPasswordFailure, (state: ProfileState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    resetPasswordError: action.error.error,
  }))
);
