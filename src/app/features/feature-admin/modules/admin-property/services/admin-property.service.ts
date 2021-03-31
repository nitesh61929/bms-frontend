import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminPropertyService extends BaseService {
  propertyStatuses = [
    {
      value: "PENDING_VERIFICATION",
      title: "Pending Verification",
      position: 1,
    },
    {
      value: "IN_VERIFICATION",
      title: "In Verification",
      position: 2,
    },
    {
      value: "VERIFIED",
      title: "Verified",
      position: 3,
    },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  getPropertyListForAdmin(params: any): Observable<any> {
    return this.http.get(ApiUrls.GET_ALL_PROPERTIES, { params });
  }
}
