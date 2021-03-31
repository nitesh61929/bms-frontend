import { Injectable, Injector } from "@angular/core";
import { ApiUrls, StorageKeys } from "@core/enums";
import { ILoginWithPasswordPayload } from "@core/interfaces";
import { IPostResponse } from "@core/interfaces/base-post-response";
import { ILoginWithOTPPayload } from "@core/interfaces/login-with-otp-payload";
import { IMobilePayload } from "@core/interfaces/mobile-payload";
import { IRegisterMobileNumberPayload } from "@core/interfaces/register-mobile-number-payload";
import { Store } from "@ngrx/store";
import { IUser } from "@shared/interfaces/user/user";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseService } from "../base";
import { IVerifyMobileNumberPayload } from "./../../interfaces/verify-mobile-number-payload";
import { IVerifyOTPPayload } from "./../../interfaces/verify-otp-payload";

@Injectable({
  providedIn: "root",
})
export class AuthService extends BaseService {
  constructor(injector: Injector, private store: Store<any>) {
    super(injector);
  }

  verifyMobileNumber(verifyMobileNumberPayload: IVerifyMobileNumberPayload) {
    return this.http.post<IPostResponse<null>>(ApiUrls.VERIFY_MOBILE_NUMBER, verifyMobileNumberPayload);
  }

  verifyOtp(verifyOTPPayload: IVerifyOTPPayload) {
    return this.http
      .post<IPostResponse<null>>(ApiUrls.VERIFY_OTP, verifyOTPPayload, {
        observe: "response" as "body",
      })
      .pipe(
        map((response: any) => {
          this.setTokenToStorage(response);
          this.setClientIdToStorage(response);
        })
      );
  }

  verifyInvitation(invitationId: string) {
    return this.http.post<IPostResponse<null>>(`${ApiUrls.VERIFY_INVITATION}/${invitationId}`, null);
  }

  /**
   * API call to generate OTP
   * @param mobilePayload
   */
  generateOTP(mobilePayload: IMobilePayload): Observable<IPostResponse<null>> {
    return this.http.post<IPostResponse<null>>(ApiUrls.GENERATE_OTP, mobilePayload);
  }

  /**
   * API for login with mobile number and password
   * @param loginWithPasswordPayload
   */
  loginWithPassword(loginWithPasswordPayload: ILoginWithPasswordPayload) {
    return this.http
      .post<IPostResponse<null>>(ApiUrls.PASSWORD_AUTHENTICATE, loginWithPasswordPayload, {
        observe: "response" as "body",
      })
      .pipe(
        map((response: any) => {
          this.onLoginSuccess(response);
        })
      );
  }

  /**
   * Check whether logged in or not
   */
  isLoggedIn(): boolean {
    return this.storage.get("token");
  }

  logOut(): Observable<IPostResponse<null>> {
    return this.http.post<IPostResponse<null>>(ApiUrls.LOGOUT, null);
  }

  /**
   * Fetch permissions from response body and set them to the storage
   * @param response
   */
  setPermissionToStorage(response: any): void {
    const userPermissions = response.body.data.permissionCode;
    this.storage.set(StorageKeys.USER_PERMISSIONS, userPermissions);
  }

  /**
   * Fetch token from headers and set it to the storage
   * @param response
   */
  setTokenToStorage(response: any): void {
    const token = response.headers.get("accessToken");
    const refreshToken = response.headers.get("refreshToken");
    this.storage.set(StorageKeys.token, token);
    this.storage.set(StorageKeys.REFRESH_TOKEN, refreshToken);
  }

  setClientIdToStorage(response: any): void {
    const clientId = response.headers.get("clientId");
    this.storage.set(StorageKeys.CLIENTID, clientId);
  }

  setUserIdToStorage(response: any): void {
    const userId = response.body.data.id;
    this.storage.set(StorageKeys.USERID, userId);
  }

  /**
   * Set user to local storage.
   * @private
   * @param userData
   */
  setUserToStorage(userData: IUser): void {
    const { id, name, email, mobileNumber, image, superAdmin, status } = userData;
    this.storage.set(StorageKeys.USER, { id, name, email, mobileNumber, image, superAdmin, status });
  }

  /**
   * Get current user from local storage.
   */
  getCurrentUser(): IUser {
    return this.storage.get(StorageKeys.USER);
  }

  registerMobileNumber(registerMobileNumberPayload: IRegisterMobileNumberPayload) {
    return this.http.post<IPostResponse<null>>(ApiUrls.GENERATE_OTP, registerMobileNumberPayload);
  }

  loginWithOtp(loginWithOTPPayload: ILoginWithOTPPayload) {
    return this.http
      .post<IPostResponse<null>>(ApiUrls.LOGIN_WITH_OTP, loginWithOTPPayload, {
        observe: "response" as "body",
      })
      .pipe(
        map((response: any) => {
          this.setTokenToStorage(response);
          this.setClientIdToStorage(response);
          this.setPermissionToStorage(response);
          this.setUserIdToStorage(response);
          return response;
        })
      );
  }

  logoutUser() {
    return this.http.put(`${ApiUrls.LOGOUT_USER}`, {});
  }
}
