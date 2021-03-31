import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ApiUrls } from "./../enums/api-urls";
import { LoadingService } from "./../services/loading/loading.service";

/**
 * This class is for intercepting http requests. When a request starts, we set the loadingSub property
 * in the LoadingService to true. Once the request completes and we have a response, set the loadingSub
 * property to false. If an error occurs while servicing the request, set the loadingSub property to false.
 * @class {HttpRequestInterceptor}
 */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ignoreInterceptorOn: Array<string> = [ApiUrls.NOTIFICATIONS, ApiUrls.UNIT_FILTER_DROPDOWN];
    if (!ignoreInterceptorOn.some((v) => request.url.includes(v))) {
      this.loadingService.setLoading(true, request.url);
    }
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.loadingService.setLoading(false, request.url);
          }
          return event;
        },
        (error) => {
          this.loadingService.setLoading(false, request.url);
          return error;
        }
      )
    );
  }
}
