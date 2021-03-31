import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AppRoutes } from "@core/enums";
import Utils from "@core/utilities/utils";
import { RedirectionService } from "@shared/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NegateOnboardGuard implements CanActivate {
  constructor(private router: Router, private redirectionService: RedirectionService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (Utils.urlIsApp()) {
      if (this.redirectionService.negateOnboardRedirect()) {
        return true;
      }
    }
    this.router.navigateByUrl(AppRoutes.ROOT);
    return false;
  }
}
