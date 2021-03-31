import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { BaseUrlInterceptor } from "./base-url.interceptor";
import { ClientIdInterceptor } from "./client-id.interceptor";
import { ErrorInterceptor } from "./error.interceptor";
import { NotifyInterceptor } from "./notify.interceptor";
import { OwnerIdInterceptor } from "./owner-id.interceptor";
import { PropertyIdInterceptor } from "./property-id.interceptor";
import { RefreshTokenInterceptor } from "./refresh-token.interceptor";
import { RequestInterceptor } from "./request.interceptor";
import { TokenInterceptor } from "./token.interceptor";

export * from "./base-url.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: PropertyIdInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ClientIdInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: OwnerIdInterceptor, multi: true },
];
