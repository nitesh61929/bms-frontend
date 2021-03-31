import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes, StorageKeys } from "@core/enums";
import { BaseService } from "@core/services";
import Utils from "@core/utilities/utils";
import { Store } from "@ngrx/store";
import { logout } from "app/store/actions/app.actions";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, filter, switchMap, take } from "rxjs/operators";
import { StorageService } from "./../services/storage/storage.service";

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  // Refresh Token Subject tracks the current token, or is null if no token is currently
  // available (e.g. refresh pending).
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private baseService: BaseService,
    private storageService: StorageService,
    private router: Router,
    private store: Store<any>
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error) => {
        return this.handleResponseError(error, request, next);
      })
    );
  }

  handleResponseError(error, request?, next?) {
    // If error status is different than 403 and 100 we want to skip refresh token
    // So we check that and throw the error if it's the case
    if (error.status !== 403 && error.error.statusCode !== 100) {
      return throwError(error);
    }

    if (this.refreshTokenInProgress) {
      // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
      // – which means the new token is ready and we can retry the request again
      return this.refreshTokenSubject.pipe(
        filter((result) => result !== null),
        take(1),
        switchMap(() => next.handle(this.addAuthenticationToken(request)))
      );
    } else {
      this.refreshTokenInProgress = true;

      // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
      this.refreshTokenSubject.next(null);

      const payload = {
        accessToken: this.storageService.get(StorageKeys.token),
        refreshToken: this.storageService.get(StorageKeys.REFRESH_TOKEN),
      };

      // Call baseService.refreshAccessToken(this is an Observable that will be returned)
      return this.baseService.refreshAccessToken(payload).pipe(
        switchMap((response: any) => {
          const newToken = response.headers.get("accessToken");
          const newRefreshToken = response.headers.get("refreshToken");
          const newClientId = response.headers.get("clientId");

          this.storageService.set(StorageKeys.token, newToken);
          this.storageService.set(StorageKeys.REFRESH_TOKEN, newRefreshToken);
          this.storageService.set(StorageKeys.CLIENTID, newClientId);

          //When the call to refreshToken completes we reset the refreshTokenInProgress to false
          // for the next time the token needs to be refreshed
          this.refreshTokenInProgress = false;
          this.refreshTokenSubject.next(newToken);

          return next.handle(this.addAuthenticationToken(request));
        }),
        catchError((err: any) => {
          this.refreshTokenInProgress = false;

          this.logout();
          return throwError(error);
        })
      );
    }
  }

  addAuthenticationToken(request) {
    // Get access token from Local Storage
    const accessToken = this.storageService.get(StorageKeys.token);

    // If access token is null this means that user is not logged in
    // And we return the original request
    if (!accessToken) {
      return request;
    }

    // We clone the request, because the original request is immutable
    if (request.body instanceof FormData) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } else {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
    }
  }

  logout() {
    localStorage.clear();
    this.store.dispatch(logout());
    if (Utils.urlIsApp()) {
      this.router.navigateByUrl(AppRoutes.ADMIN_LOGIN);
    } else {
      this.router.navigateByUrl(AppRoutes.REGISTRATION_PAGE);
    }
  }
}
