import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { IStaffs } from "@shared/interfaces/staffs";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StaffsService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getAllStaffs(parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.GET_OWNER_STAFF}`, { params: parameters });
  }

  addStaff(addStaffPayload: IStaffs) {
    return this.http.post(`${ApiUrls.ADD_STAFF}`, addStaffPayload);
  }

  getPropertyStaffs(parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.GET_PROPERTY_STAFF}`, {
      params: parameters,
    });
  }

  addStaffAsAdmin(addStaffPayload: IStaffs) {
    return this.http.post(`${ApiUrls.ADD_STAFF_AS_ADMIN}`, addStaffPayload);
  }

  searchPropertyStaff(): Observable<any> {
    return this.http.get(`${ApiUrls.SEARCH_PROPERTY_STAFF}`);
  }
}
