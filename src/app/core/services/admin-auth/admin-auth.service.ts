import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { IPostResponse } from "@core/interfaces";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseService } from "../base";
import { IAdminAuthPayload } from "./../../../shared/interfaces/admin-auth-payload";

@Injectable({
  providedIn: "root",
})
export class AdminAuthService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  adminLogin(adminAuthPayload: IAdminAuthPayload): Observable<any> {
    return this.http
      .post<IPostResponse<null>>(ApiUrls.ADMIN_AUTHENTICATE, adminAuthPayload, {
        observe: "response" as "body",
      })
      .pipe(
        map((response: any) => {
          this.onLoginSuccess(response);
          return response;
        })
      );
  }
}
