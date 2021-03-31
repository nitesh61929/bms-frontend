import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { Observable } from "rxjs";
import { BaseService } from "./../../../core/services/base/base.service";

@Injectable({
  providedIn: "root",
})
export class OnBoardService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getOwnershipTypes(): Observable<any> {
    return this.http.get(ApiUrls.ACCOUNT_TYPES);
  }

  getOwnerDetail(ownerId: string) {
    const headers = {
      ownerId,
    };
    return this.http.get(ApiUrls.OWNER_DETAIL, { headers: new HttpHeaders(headers) });
  }

  onBoardOwner(ownerDetail: any): Observable<any> {
    return this.http.post(ApiUrls.ONBOARD_OWNER, ownerDetail);
  }

  onBoardOwnerUpdate(ownerDetail: any): Observable<any> {
    return this.http.put(ApiUrls.ONBOARD_OWNER, ownerDetail);
  }

  onBoardProperty(propertyDetail: any): Observable<any> {
    const headers = {
      ownerId: propertyDetail.ownerId,
    };
    return this.http.post(ApiUrls.ONBOARD_PROPERTY, propertyDetail, { headers: new HttpHeaders(headers) });
  }
}
