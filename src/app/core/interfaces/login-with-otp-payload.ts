export interface ILoginWithOTPPayload {
  otpLogin: boolean;
  otpToken: string;
  mobileNumberOrEmail?: string;
}
