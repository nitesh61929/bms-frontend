import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { AuthService, StorageService } from "@core/services";
import Utils from "@core/utilities/utils";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NegateAuthGuard implements CanActivate {
  constructor(
    private router: Router,

    private storage: StorageService,
    private authService: AuthService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (Utils.urlIsApp()) {
      return true;
    }
    this.router.navigateByUrl(AppRoutes.ROOT);
    return false;
  }
}
