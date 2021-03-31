import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import Utils from "@core/utilities/utils";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (Utils.getSubDomain() === "app") {
      return true;
    }
    return false;
  }
}
