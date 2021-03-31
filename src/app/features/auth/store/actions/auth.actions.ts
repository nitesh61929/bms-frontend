import { createAction, props } from "@ngrx/store";
import { ILoginWithOTPPayload } from "./../../../../core/interfaces/login-with-otp-payload";
import { IRegisterMobileNumberPayload } from "./../../../../core/interfaces/register-mobile-number-payload";
import { IVerifyMobileNumberPayload } from "./../../../../core/interfaces/verify-mobile-number-payload";
import { IVerifyOTPPayload } from "./../../../../core/interfaces/verify-otp-payload";

export const verifyMobileNumber = createAction(
  "[AUTH] Verify Mobile Number",
  props<{ payload: IVerifyMobileNumberPayload }>()
);

export const verifyMobileNumberSuccess = createAction("[AUTH] Verify Mobile Number Success", props<any>());

export const verifyMobileNumberFailure = createAction("[AUTH] Verify Mobile Number Failure", props<{ error: any }>());

export const verifyOTP = createAction("[AUTH] Verify OTP", props<{ payload: IVerifyOTPPayload }>());

export const verifyOTPSuccess = createAction("[AUTH] Verify OTP Success", props<{ data: any }>());

export const verifyOTPFailure = createAction("[AUTH] Verify OTP Failure", props<{ error: any }>());

export const verifyInvitation = createAction("[AUTH] Verify Invitation", props<{ payload: any }>());

export const verifyInvitationSuccess = createAction("[AUTH] Verify Invitation Success", props<{ data: any }>());

export const verifyInvitationFailure = createAction("[AUTH] Verify Invitation Failure", props<{ error: any }>());

export const registerMobileNumber = createAction(
  "[AUTH] Register Mobile Number",
  props<{ payload: IRegisterMobileNumberPayload }>()
);

export const registerMobileNumberSuccess = createAction("[AUTH] Register Mobile Number Success", props<any>());

export const registerMobileNumberFailure = createAction(
  "[AUTH] Register Mobile Number Failure",
  props<{ error: any }>()
);

export const loginWithOTP = createAction("[AUTH] Login With OTP", props<{ payload: ILoginWithOTPPayload }>());

export const loginWithOTPSuccess = createAction("[AUTH] Login With OTP Success", props<{ data: any }>());

export const loginWithOTPFailure = createAction("[AUTH] Login With OTP Failure", props<{ error: any }>());

export const logoutUser = createAction("[Users] Logout User.", props<{ params?: any }>());

export const logoutUserSuccess = createAction("[Users] Logout User Success", props<any>());

export const logoutUserFailure = createAction("[Users] Logout User Failure", props<any>());
