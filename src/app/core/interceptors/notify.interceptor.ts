import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SnackBarService } from "@core/services";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackBarService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Ignore the request from translation files
    if (request.url.startsWith("/assets/i18n") && request) {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        // if (event instanceof HttpResponse && event.status === 200) {
        //   this.snackBarService.open("List fetched successfully");
        // }
      })
    );
  }
}
