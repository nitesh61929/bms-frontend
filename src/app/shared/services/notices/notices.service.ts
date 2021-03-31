import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { INotices } from "@shared/interfaces/notices";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NoticesService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getNotices(parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.NOTICES}`, { params: parameters });
  }

  addNotice(addNoticePayload: INotices) {
    return this.http.post(`${ApiUrls.NOTICE_ADD}`, addNoticePayload);
  }

  deleteNotice(noticeId: string): Observable<any> {
    return this.http.delete(`${ApiUrls.NOTICE_DELETE}/${noticeId}`);
  }

  updateNoticeStatus(noticeId: string, parameters: any): Observable<any> {
    return this.http.put(`${ApiUrls.NOTICE_STATUS_UPDATE}/${noticeId}`, {}, { params: parameters });
  }

  updateNotice(noticeId: string, updateNoticePayload: INotices): Observable<any> {
    return this.http.put(`${ApiUrls.NOTICE_UPDATE}/${noticeId}`, updateNoticePayload);
  }
}
