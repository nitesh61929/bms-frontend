import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { StorageService } from "@core/services";
import { Observable } from "rxjs";
import { StorageKeys } from "./../enums/storage-keys";

@Injectable()
export class OwnerIdInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ownerIdRequiredUrls: Array<string> = [
      ApiUrls.GET_OWNER_STAFF,
      ApiUrls.PROPERTIES,
      ApiUrls.ADD_STAFF,
      ApiUrls.ADD_STAFF_AS_ADMIN,
      ApiUrls.PANIC_ALERT_REPORT,
      ApiUrls.GET_ROLES,
      ApiUrls.SEARCH_PROPERTY_STAFF,
      ApiUrls.UPDATE_COMPANY_DETAILS,
      ApiUrls.USER_TRIAL_DATES,
    ];
    if (ownerIdRequiredUrls.some((v) => request.url.includes(v))) {
      const owner = this.storageService.get(StorageKeys.OWNER);
      if (owner) {
        const activeOwnerId = this.storageService.get(StorageKeys.OWNER).id;
        if (activeOwnerId) {
          request = request.clone({
            setHeaders: {
              ownerId: activeOwnerId,
            },
          });
        }
      }
    }

    return next.handle(request);
  }
}
