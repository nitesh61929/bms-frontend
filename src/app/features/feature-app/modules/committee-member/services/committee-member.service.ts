import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommitteeMemberService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getPropertyDesignations(): Observable<any> {
    return this.http.get(`${ApiUrls.DESIGNATION_LIST}`);
  }

  getAllPropertyUsers(parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.ALL_PROPERTY_USERS}`, {
      params: parameters,
    });
  }

  getPropertyCommitteeMembers(parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.LIST_COMMITTEE_MEMBER}`, { params: parameters });
  }

  assignCommitteeMemberToProperty(payload: any): Observable<any> {
    return this.http.post(`${ApiUrls.ADD_COMMITTEE_MEMBER}`, payload);
  }

  removeCommitteeMemberFromProperty(committeeMemberId: string): Observable<any> {
    return this.http.delete(`${ApiUrls.REMOVE_COMMITTEE_MEMBER}/${committeeMemberId}`);
  }

  updateCommitteeMemberDesignation(committeeMemberId: string, params: any): Observable<any> {
    return this.http.put(`${ApiUrls.UPDATE_COMMITTEE_MEMBER_DESIGNATION}/${committeeMemberId}`, {}, { params });
  }
}
