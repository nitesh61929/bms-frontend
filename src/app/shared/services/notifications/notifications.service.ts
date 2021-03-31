import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";
import { IMarkRead } from "./../../interfaces/mark-read";

@Injectable({
  providedIn: "root",
})
export class NotificationsService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   *
   * @param userId
   * @param parameters
   */
  getNotificationsList(userId: string, parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.NOTIFICATIONS}/${userId}`, { params: parameters });
  }

  /**
   *
   * @param userId
   */
  getNotificationCount(userId: string): Observable<any> {
    return this.http.get(`${ApiUrls.NOTIFICATIONS_COUNT}/${userId}`);
  }

  /**
   *
   * @param markReadPayload
   */
  markAsRead(markReadPayload: IMarkRead) {
    return this.http.put(`${ApiUrls.MARK_READ}`, markReadPayload);
  }
}
