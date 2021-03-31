import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { StorageService } from "@core/services";
import { AuthService } from "@core/services/auth/auth.service";
import Utils from "@core/utilities/utils";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private storage: StorageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (Utils.urlIsApp()) {
      if (this.storage.get("token")) {
        return true;
      } else {
        this.router.navigateByUrl(AppRoutes.REGISTRATION_PAGE);
        return false;
      }
    }
    // history.back();
    return false;
  }
}
