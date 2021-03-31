import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { ICreateUpdatePassword } from "@shared/interfaces/create-update-password";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProfileService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getProfileDetails(): Observable<any> {
    return this.http.get(`${ApiUrls.GET_USER_PROFILE}`);
  }

  updateProfileDetails(payload: any): Observable<any> {
    return this.http.put(`${ApiUrls.UPDATE_USER_PROFILE}`, payload);
  }

  getCompanyDetail(ownerId: string): Observable<any> {
    const headers = {
      ownerId,
    };
    return this.http.get(ApiUrls.OWNER_DETAIL, { headers: new HttpHeaders(headers) });
  }

  updateCompanyDetails(payload: any): Observable<any> {
    return this.http.put(ApiUrls.ONBOARD_OWNER, payload);
  }

  updateVerifiedCompanyDetails(payload: any): Observable<any> {
    return this.http.put(`${ApiUrls.UPDATE_COMPANY_DETAILS}`, payload);
  }

  uploadProfilePicture(payload: any): Observable<any> {
    return this.http.put(`${ApiUrls.PROFILE_PICTURE}`, payload);
  }

  updatePassword(updatePasswordPayload: ICreateUpdatePassword): Observable<any> {
    return this.http.put(ApiUrls.UPDATE_PASSWORD, updatePasswordPayload);
  }

  createPassword(createPasswordPayload: ICreateUpdatePassword): Observable<any> {
    return this.http.post(ApiUrls.CREATE_PASSWORD, createPasswordPayload);
  }

  updateProfileCredential(payload: any): Observable<any> {
    return this.http.put(ApiUrls.UPDATE_PROFILE_CREDENTIAL, payload);
  }

  verifyProfileCredential(payload: any): Observable<any> {
    return this.http.put(ApiUrls.VERIFY_PROFILE_CREDENTIAL, payload);
  }

  getBillingDetail(): Observable<any> {
    return this.http.get(ApiUrls.USER_TRIAL_DATES);
  }

  forgotPassword(payload: any): Observable<any> {
    return this.http.post(ApiUrls.FORGOT_PASSWORD, payload);
  }

  verifyForgotPasswordLink(payload: any): Observable<any> {
    return this.http.post(ApiUrls.VERIFY_FORGOT_PASSWORD, payload);
  }

  resetPassword(payload: any): Observable<any> {
    return this.http.put(ApiUrls.RESET_PASSWORD, payload);
  }
}
