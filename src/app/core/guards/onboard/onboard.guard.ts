import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { Observable } from "rxjs";
import { RedirectionService } from "../../../shared/services";
import Utils from "../../utilities/utils";

@Injectable({
  providedIn: "root",
})
export class OnboardGuard implements CanActivate {
  constructor(private router: Router, private redirectionService: RedirectionService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (Utils.urlIsApp()) {
      const url = this.redirectionService.onboardRedirect(true);
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
