import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { SnackBarService, StorageService } from "@core/services";
import Utils from "@core/utilities/utils";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private snackbar: SnackBarService,
    private storage: StorageService,
    private router: Router,
    private translate: TranslateService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        (event) => {
          // success code
        },
        (error) => {
          if (error.status === 403) {
            this.router.navigateByUrl(AppRoutes.ACCESS_DENIED);
          }
          if (error.status === 401 && error.error.statusCode === 403) {
            localStorage.clear();
            if (Utils.urlIsApp()) {
              this.router.navigateByUrl(AppRoutes.REGISTRATION_PAGE);
            } else {
              this.router.navigateByUrl(AppRoutes.ADMIN_LOGIN);
            }
          }
          if (error.status === 500) {
            this.router.navigateByUrl(AppRoutes.SERVER_ERROR_PAGE);
          }
          if (error.status === 422 && error.error.message.toLowerCase() === "invalid token") {
            this.snackbar.open(error.error.message);
            this.storage.clear();
            this.router.navigateByUrl(AppRoutes.LOGIN_PAGE);
          } else {
            if (error.error && error.error.message && error.error.statusCode !== 400) {
              this.snackbar.open(error.error.message);
            }
            if (error.error && error.error.message && error.error.statusCode === 400) {
              this.snackbar.open(this.translate.instant("invalid_form_message"));
            }
          }
        }
      )
    );
  }
}
