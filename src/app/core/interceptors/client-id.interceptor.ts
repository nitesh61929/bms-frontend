import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { StorageService } from "@core/services";
import { Observable } from "rxjs";
import { StorageKeys } from "./../enums/storage-keys";

@Injectable()
export class ClientIdInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clentidAttachedUrls: Array<string> = [ApiUrls.REFRESH_TOKEN, ApiUrls.LOGOUT_USER];

    if (clentidAttachedUrls.includes(request.url)) {
      const clientIdFromStorage = this.storageService.get(StorageKeys.CLIENTID);
      request = request.clone({
        setHeaders: {
          clientId: clientIdFromStorage,
        },
      });
    }

    return next.handle(request);
  }
}
