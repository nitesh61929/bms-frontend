import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { StorageKeys } from "@core/enums";
import { Observable } from "rxjs";
import { ApiUrls } from "./../../../core/enums/api-urls";
import { BaseService } from "./../../../core/services/base/base.service";

@Injectable({
  providedIn: "root",
})
export class PropertyOwnerService extends BaseService {
  http: any;
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   *
   * @param id
   */
  getAccountDetail(accountId: string): Observable<any> {
    const headers = {
      ownerId: accountId,
    };
    return this.http.get(ApiUrls.OWNER, { headers: new HttpHeaders(headers) });
  }

  getPropertyOwnerDetail(userId: string): Observable<any> {
    return this.http.get(`${ApiUrls.PROPERTY_OWNER_FULL_DETAIL}/${userId}`);
  }

  isOwnerVerified() {
    const owner = this.storage.get(StorageKeys.OWNER);
    return owner?.status === "VERIFIED";
  }
}
