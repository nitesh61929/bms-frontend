import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppPermissions, AppRoutes, StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import { IPropertyOwnerDetails } from "@shared/interfaces/property-owner-detail";
import { logoutUser } from "app/features/auth/store/actions/auth.actions";
import { Observable, Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";
import {
  getCompanyDetail,
  getCompanyDetailSuccess,
  getProfileDetails,
  getProfileDetailsSuccess,
  uploadProfilePictureSuccess
} from "./../../store/actions/profile.actions";
import { NavigationBarService } from "./../services/navigation-bar.service";

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
})
export class NavigationBarComponent extends BaseComponent implements OnInit {
  @ViewChild("drawer") drawer: any;
  @Input() showSidebar: boolean;
  @Input() currentUrl: string;
  propertyDetail: IProperty;
  ownerDetail: IPropertyOwnerDetails;
  ownerName: string = "";
  ownerLogo: any;
  userLogo: any;
  propertyList: IProperty[];
  menus: Array<any>;
  notificationCount$: Observable<number>;

  hasPropertyAddAccess = AppPermissions.PROPERTY_CREATE;
  hasPropertyListAccess = AppPermissions.BASIC_PROPERTY_LIST;

  destroyed$ = new Subject<boolean>();

  subscription: Subscription;

  constructor(
    private store: Store<any>,
    private navigationBarService: NavigationBarService,
    getCompanyDetailSuccess$: Actions,
    getProfileDetailSuccess$: Actions,
    uploadProfilePictureSuccess$: Actions
  ) {
    super();
    this.menus = this.navigationBarService.menus;

    getCompanyDetailSuccess$.pipe(ofType(getCompanyDetailSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      const ownerDetail = {
        id: d.data.id,
        logo: d.data.logo,
        name: d.data.name,
        ownerStatus: d.data.status,
        ownerTypeId: d.data.ownerType?.id,
        ownerTypeName: d.data.ownerType?.title,
      };
      this.storage.set(StorageKeys.OWNER, ownerDetail);
      this.ownerName = ownerDetail.name;
      this.ownerLogo = ownerDetail.logo;
    });

    getProfileDetailSuccess$.pipe(ofType(getProfileDetailsSuccess), takeUntil(this.destroyed$)).subscribe((data) => {
      this.userLogo = data.data.profileFile;
    });

    uploadProfilePictureSuccess$.pipe(ofType(uploadProfilePictureSuccess), takeUntil(this.destroyed$)).subscribe(() => {
      this.store.dispatch(getProfileDetails({}));
    });
  }

  ngOnInit(): void {
    this.tawkService.SetChatVisibility(true);
    this.fetchOwnerDetail();
    this.listenPropertyList();
    this.listenPropertyDetail();
    this.getMyProfileDetail();
    this.listenObservables();
  }

  private listenObservables() {
    this.notificationCount$ = this.store.select((store) => store.sharedModule.notifications.count);
  }

  private listenPropertyList() {
    this.store
      .select((store: any) => store.sharedModule.property.list)
      .subscribe((propertyList) => {
        this.propertyList = propertyList;
      });
  }

  private listenPropertyDetail() {
    this.store
      .select((store) => store.sharedModule.property.detail)
      .subscribe((propertyDetail) => {
        if (propertyDetail) this.propertyDetail = propertyDetail;
      });
  }

  fetchOwnerDetail() {
    const ownerId = this.storage.get(StorageKeys.OWNER).id;
    this.store.dispatch(getCompanyDetail({ id: ownerId }));
  }

  getMyProfileDetail() {
    this.store.dispatch(getProfileDetails({}));
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
        this.router.navigateByUrl(AppRoutes.REGISTRATION_PAGE);
      }
    });
  }

  onClickToggle() {
    this.drawer.toggle();
  }

  goToProfile() {
    this.router.navigateByUrl(AppRoutes.USER_PROFILE);
  }

  goToUnits() {
    this.redirectTo(AppRoutes.UNITS);
  }

  goToDashboard() {
    this.redirectTo(AppRoutes.DASHBOARD);
  }

  gotToProperty() {
    this.redirectTo(AppRoutes.PROPERTY);
  }

  onAddProperty() {
    const accountId = this.storage.get(StorageKeys.OWNER).id;
    this.router.navigate([AppRoutes.ADD_PROPERTY], { queryParams: { accountId: accountId } });
  }

  isOwnerVerified() {
    const owner = this.storage.get(StorageKeys.OWNER);
    return owner?.ownerStatus === "VERIFIED";
  }

  goToHelpAndSupport() {
    this.redirectTo(AppRoutes.HELP_AND_SUPPORT);
  }
}
