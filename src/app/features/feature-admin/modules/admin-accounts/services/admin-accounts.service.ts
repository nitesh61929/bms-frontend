import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";
import { IUpdateInvitationStatus } from "../interfaces/update-invitation-status";

@Injectable({
  providedIn: "root",
})
export class AdminAccountsService extends BaseService {
  statuses = [
    {
      value: "INVITED",
      title: "Invited",
    },
    {
      value: "PENDING_VERIFICATION",
      title: "Pending Verification",
    },
    {
      value: "IN_VERIFICATION",
      title: "In Verification",
    },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  getActiveAccounts(parameters: any): Observable<any> {
    return this.http.get(ApiUrls.ACTIVE_ACCOUNTS, { params: parameters });
  }

  getPendingAccountInvitations(parameters: any): Observable<any> {
    return this.http.get(ApiUrls.PENDING_INVITATIONS, { params: parameters });
  }

  updateInvitationStatus(updateInvitationStatus: IUpdateInvitationStatus) {
    return this.http.put(`${ApiUrls.UPDATE_INVITATION_STATUS}`, updateInvitationStatus);
  }

  getAccountDetailsById(accountId: string) {
    const headers = {
      ownerId: accountId,
    };
    return this.http.get(ApiUrls.OWNER, { headers: new HttpHeaders(headers) });
  }
}
