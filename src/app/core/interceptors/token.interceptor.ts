import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiUrls, StorageKeys } from "@core/enums";
import { StorageService } from "@core/services";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storageService.get(StorageKeys.token);

    const tokenIndependentUrl: Array<string> = [ApiUrls.REFRESH_TOKEN];
    const isTokenIndependentUrl = tokenIndependentUrl.includes(request.url);

    if (token && !isTokenIndependentUrl) {
      if (request.body instanceof FormData) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      }
    }

    return next.handle(request);
  }
}
