import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HelpdeskService extends BaseService {
  statuses = [
    {
      value: "NEW",
      title: "New",
    },
    {
      value: "IN_PROGRESS",
      title: "In Progress",
    },
    {
      value: "RESOLVED",
      title: "Resolved",
    },
    {
      value: "CLOSED",
      title: "Closed",
    },
  ];

  priorities = [
    {
      value: "CRITICAL",
      title: "Critical",
    },
    {
      value: "HIGH",
      title: "High",
    },
    {
      value: "MEDIUM",
      title: "Medium",
    },
    {
      value: "LOW",
      title: "Low",
    },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  getHelpDeskList(parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.HELPDESK}`, { params: parameters });
  }

  getHelpdeskDetail(helpdeskId: string) {
    return this.http.get(`${ApiUrls.HELPDESK_DETAIL}/${helpdeskId}`);
  }

  getHelpdeskComments(helpdeskId: string, params: any) {
    return this.http.get(`${ApiUrls.HELPDESK_COMMENTS}/${helpdeskId}`, { params });
  }

  postComment(helpdeskId: string, payload: any): Observable<any> {
    return this.http.post(`${ApiUrls.POST_COMMENT}/${helpdeskId}`, payload);
  }

  updateHelpdeskStatus(helpdeskId: string, parameters: any): Observable<any> {
    return this.http.put(`${ApiUrls.UPDATE_TICKET_STATUS}/${helpdeskId}`, {}, { params: parameters });
  }

  updateHelpdeskDueDate(helpdeskId: string, parameters: any): Observable<any> {
    return this.http.put(`${ApiUrls.UPDATE_TICKET_DUE_DATE}/${helpdeskId}`, {}, { params: parameters });
  }

  updateHelpdeskAssignee(helpdeskId: string, parameters: any): Observable<any> {
    return this.http.put(`${ApiUrls.UPDATE_TICKET_ASSIGNEE}/${helpdeskId}`, {}, { params: parameters });
  }

  getPossibleAssignees(params: any) {
    return this.http.get(`${ApiUrls.PROPERTY_USERS}`, { params });
  }
}
