import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";
import { IProperty } from "./../../interfaces/property";

@Injectable({
  providedIn: "root",
})
export class PropertyService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getPropertyList(): Observable<any> {
    return this.http.get(`${ApiUrls.PROPERTIES}`);
  }

  getPropertyDetail(propertyId?: any): Observable<any> {
    let headers = {};
    if (propertyId) {
      headers = {
        propertyId: propertyId,
      };
    }
    return this.http.get(`${ApiUrls.PROPERTY}`, { headers: new HttpHeaders(headers) });
  }

  updatePropertyDetail(propertyPayload: IProperty): Observable<any> {
    return this.http.put(`${ApiUrls.PROPERTY_ON_BOARD}`, propertyPayload);
  }

  updateVerifiedPropertyDetail(propertyPayload: IProperty): Observable<any> {
    return this.http.put(`${ApiUrls.UPDATE_VERIFIED_PROPERTY}`, propertyPayload);
  }

  getPropertyTypes(): Observable<any> {
    return this.http.get(ApiUrls.PROPERTY_TYPES);
  }

  assignStaffToProperty(payload: any): Observable<any> {
    return this.http.put(`${ApiUrls.ASSIGN_STAFF}`, payload);
  }

  removeStaffFromProperty(payload: any): Observable<any> {
    return this.http.put(`${ApiUrls.REMOVE_STAFF}`, payload);
  }

  updateStaffRole(payload: any): Observable<any> {
    return this.http.put(`${ApiUrls.UPDATE_STAFF_ROLE}`, payload);
  }

  addProperty(payload: IProperty) {
    const header = {
      ownerId: payload.ownerId,
    };
    return this.http.post(`${ApiUrls.PROPERTY}`, payload, { headers: new HttpHeaders(header) });
  }

  updatePropertyStatus(propertyId: string, params: any): Observable<any> {
    const headers = {
      propertyId,
    };
    return this.http.put(`${ApiUrls.UPDATE_PROPERTY_STATUS}`, {}, { params, headers: new HttpHeaders(headers) });
  }

  getUserPropertyList(): Observable<any> {
    return this.http.get(ApiUrls.USER_PROPERTIES);
  }

  getUserPropertyPermissions(params: any): Observable<any> {
    return this.http.get(ApiUrls.USER_PROPERTY_PERMISSIONS, { params });
  }
}
