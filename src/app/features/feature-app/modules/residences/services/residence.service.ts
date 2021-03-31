import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ResidencesService extends BaseService {
  occupancyTypes = [
    {
      value: "RENTED",
      title: "Rented",
    },
    {
      value: "OWNED",
      title: "Owned",
    },
  ];

  residenceTypes = [
    {
      value: "UNIT_OWNER",
      title: "Unit Owner",
    },
    {
      value: "TENANT",
      title: "Tenant",
    },
  ];

  statuses = [
    {
      value: "ACTIVE",
      title: "Active",
    },
    {
      value: "INACTIVE",
      title: "Inactive",
    },
  ];

  twoWheelerVehicleType = "TWO_WHEELER";
  fourWheelerVehicleType = "FOUR_WHEELER";

  constructor(injector: Injector) {
    super(injector);
  }

  getActiveResidences(params: any): Observable<any> {
    return this.http.get(ApiUrls.ACTIVE_RESIDENCE_LIST, { params });
  }

  getInvitedResidences(params: any): Observable<any> {
    return this.http.get(ApiUrls.INVITED_RESIDENCE_LIST, { params });
  }

  getResidenceDetail(residenceId: string, unitId: string): Observable<any> {
    return this.http.get(`${ApiUrls.RESIDENCE_DETAIL}/${residenceId}/${unitId}`);
  }
}
