import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { StorageService } from "@core/services";
import { Observable } from "rxjs";
import { StorageKeys } from "./../enums/storage-keys";

@Injectable()
export class PropertyIdInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const propertyIdRequiredUrls: Array<string> = [
      ApiUrls.HELPDESK_COMMENTS,
      ApiUrls.POST_COMMENT,
      ApiUrls.UPDATE_TICKET_STATUS,
      ApiUrls.UPDATE_TICKET_DUE_DATE,
      ApiUrls.UPDATE_TICKET_ASSIGNEE,
      ApiUrls.TICKET_CATEGORIES,
      ApiUrls.ADD_TICKET_CATEGORY,
      ApiUrls.UPDATE_TICKET_CATEGORY,
      ApiUrls.REMOVE_TICKET_CATEGORY,
      ApiUrls.ADD_DESIGNATION,
      ApiUrls.DESIGNATION_LIST,
      ApiUrls.ADD_COMMITTEE_MEMBER,
      ApiUrls.LIST_COMMITTEE_MEMBER,
      ApiUrls.UPDATE_COMMITTEE_MEMBER_DESIGNATION,
      ApiUrls.REMOVE_COMMITTEE_MEMBER,
      ApiUrls.PROPERTY_POLICY,
      ApiUrls.ACTIVE_RESIDENCE_LIST,
      ApiUrls.INVITED_RESIDENCE_LIST,
      ApiUrls.GET_PROPERTY_STAFF,
      ApiUrls.ALL_PROPERTY_USERS,
      ApiUrls.PROPERTY_MAINTENANCE_CONFIG,
      ApiUrls.UNIT,
      ApiUrls.SELECTED_PROPERTY_STRUCTURE,
      ApiUrls.PROPERTY,
      ApiUrls.PROPERTY_ON_BOARD,
      ApiUrls.NOTICE_ADD,
      ApiUrls.NOTICES,
      ApiUrls.PROPERTY_USERS,
      ApiUrls.UPDATE_PROPERTY_STATUS,
      ApiUrls.HELPDESK,
      ApiUrls.HELPDESK_DETAIL,
      ApiUrls.PROPERTY_STRUCTURE,
      ApiUrls.ASSIGN_STAFF,
      ApiUrls.UPDATE_STAFF_ROLE,
      ApiUrls.UPDATE_VERIFIED_PROPERTY,
      ApiUrls.PROPERTY_STRUCTURE_DETAIL,
      ApiUrls.MAINTENANCE_CHARGE,
      ApiUrls.MAINTENANCE_FEATURE,
      ApiUrls.MAINTENANCE_CONFIG,
      ApiUrls.UNIT_DETAIL,
      ApiUrls.INVITE_RESIDENCE,
      ApiUrls.RESIDENCE_DETAIL,
      ApiUrls.RESEND_TENANT_INVITATION,
      ApiUrls.CANCEL_TENANT_INVITATION,
      ApiUrls.GET_ROLES,
      ApiUrls.SEARCH_PROPERTY_STAFF,
      ApiUrls.PANIC_ALERT_REPORT,
      ApiUrls.GATEPASS_REPORT,
      ApiUrls.GET_VISIT_PURPOSES,
      ApiUrls.GET_GATEKEEPER_LIST,
      ApiUrls.DELETE_PROPERTY_STRUCTURE,
      ApiUrls.SET_INVOICE_SETTING,
      ApiUrls.GET_INVOICE_SETTING,
      ApiUrls.SET_KHALTI_PAYMENT_CONFIG,
      ApiUrls.GET_KHALTI_PAYMENT_CONFIG,
      ApiUrls.VERIFY_CHEQUE_PAYMENT,
      ApiUrls.SET_PROPERTY_CURRENCY_CONFIG,
      ApiUrls.GET_PROPERTY_CURRENCY_CONFIG,
      ApiUrls.DOWNLOAD_INVOICE,
    ];
    if (propertyIdRequiredUrls.some((v) => request.url.includes(v))) {
      const activePropertyId = this.storageService.get(StorageKeys.ACTIVE_PROPERTY);
      if (activePropertyId) {
        request = request.clone({
          setHeaders: {
            propertyId: activePropertyId,
          },
        });
      }
    }

    return next.handle(request);
  }
}
