import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { IPropertyOwnerInvitationPayload } from "./../../interfaces/property-owner-invitation-payload";

@Injectable({
  providedIn: "root",
})
export class PropertyOwnerInvitationService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  invitePropertyOwner(propertyOwnerInvitaionPayload: IPropertyOwnerInvitationPayload) {
    return this.http.post(`${ApiUrls.INVITE_ACCOUNT}`, propertyOwnerInvitaionPayload);
  }

  resendInvitation(invitationId: string) {
    return this.http.put(`${ApiUrls.RESEND_ACCOUNT_INVITATION}/${invitationId}`, null);
  }

  resendTenantInvitation(invitationId: string) {
    return this.http.put(`${ApiUrls.RESEND_TENANT_INVITATION}/${invitationId}`, null);
  }

  cancelTenantInvitation(invitationId: string) {
    return this.http.put(`${ApiUrls.CANCEL_TENANT_INVITATION}/${invitationId}`, null);
  }
}
