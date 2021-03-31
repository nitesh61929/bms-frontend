import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AppRoutes } from "@core/enums";
import Utils from "@core/utilities/utils";
import { RedirectionService } from "@shared/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PasswordGuard implements CanActivate {
  constructor(private router: Router, private redirectionService: RedirectionService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (Utils.urlIsApp()) {
      const url = this.redirectionService.passwordRedirect(true);
      if (url === AppRoutes.DEFAULT) {
        return true;
      } else {
        this.router.navigateByUrl(url);
        return false;
      }
    }
    return false;
  }
}
