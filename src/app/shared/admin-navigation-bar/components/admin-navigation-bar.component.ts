import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppPermissions, AppRoutes } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {
  getProfileDetails,
  getProfileDetailsSuccess,
  uploadProfilePictureSuccess,
} from "@shared/store/actions/profile.actions";
import { logoutUser } from "app/features/auth/store/actions/auth.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AdminNavigationBarService } from "../services/admin-navigation-bar.service";

@Component({
  selector: "app-admin-navigation-bar",
  templateUrl: "./admin-navigation-bar.component.html",
})
export class AdminNavigationBarComponent extends BaseComponent implements OnInit {
  @ViewChild("drawer") drawer: any;
  @Input() showSidebar: Boolean;
  @Input() currentUrl: string;
  currentSegment: string;
  adminMenus: Array<any>;
  hasAllUserListAccess = AppPermissions.USER_ALL;
  destroyed$ = new Subject<boolean>();
  adminLogo: any;
  notificationCount$: Observable<number>;

  constructor(
    private adminNavigationBarService: AdminNavigationBarService,
    private store: Store<any>,
    getProfileDetailSuccess$: Actions,
    uploadProfilePictureSuccess$: Actions
  ) {
    super();
    this.adminMenus = adminNavigationBarService.adminMenus;

    getProfileDetailSuccess$.pipe(ofType(getProfileDetailsSuccess), takeUntil(this.destroyed$)).subscribe((data) => {
      this.adminLogo = data.data.profileFile;
    });

    uploadProfilePictureSuccess$.pipe(ofType(uploadProfilePictureSuccess), takeUntil(this.destroyed$)).subscribe(() => {
      this.store.dispatch(getProfileDetails({}));
    });
  }

  ngOnInit(): void {
    this.listenObservables();
  }

  private listenObservables() {
    this.notificationCount$ = this.store.select((store) => store.sharedModule.notifications.count);
  }

  getSegment() {
    var segments = window.location.href.split("/");
    this.currentSegment = segments[4];
  }

  onViewProfile() {
    this.router.navigateByUrl(AppRoutes.ADMIN_PROFILE);
  }

  onLogout() {
    const options = {
      message: this.getTranslatedString("confirm_logout"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(logoutUser({}));
        localStorage.clear();
        this.snackBar.open(this.translate.instant("logout_success"));
        this.router.navigateByUrl(AppRoutes.ADMIN_LOGIN);
      }
    });
  }

  goTo(route: string) {
    this.router.navigateByUrl(route);
  }

  goToSettings() {
    this.router.navigateByUrl(AppRoutes.ADMIN_SETTINGS);
  }

  goToUsers() {
    this.router.navigateByUrl(AppRoutes.ADMIN_USERS);
  }
}
