import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { StorageService } from "@core/services";
import Utils from "@core/utilities/utils";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (Utils.urlIsAdmin()) {
      if (this.storage.get("token")) {
        return true;
      } else {
        this.router.navigateByUrl(AppRoutes.ADMIN_LOGIN);
        return false;
      }
    }
    // history.back();
    return false;
  }
}
