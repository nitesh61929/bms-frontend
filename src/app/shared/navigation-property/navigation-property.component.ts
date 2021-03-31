import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IProperty, IPropertyList } from "@shared/interfaces";
import {
  getPropertyDetail,
  getUserPropertyPermissions,
  getUserPropertyPermissionsSuccess,
  loadProperty,
} from "@shared/store/actions/property.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AppRoutes } from "./../../core/enums/app-routes";

@Component({
  selector: "app-navigation-property",
  templateUrl: "./navigation-property.component.html",
})
export class NavigationPropertyComponent extends BaseComponent implements OnInit {
  properties$: Observable<Array<IPropertyList>>;
  properties: Array<IPropertyList>;
  destroyed$ = new Subject<boolean>();
  activePropertyId: string;
  hasPropertyAddAccess = AppPermissions.PROPERTY_CREATE;

  constructor(private store: Store, getPropertyDetailSuccess$: Actions, getUserPropertyPermissionsSuccess$: Actions) {
    super();
    getUserPropertyPermissionsSuccess$
      .pipe(ofType(getUserPropertyPermissionsSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        const storagePermissions = this.storage.get(StorageKeys.USER_PERMISSIONS).concat(d.data);
        this.storage.set(StorageKeys.PERMISSIONS, storagePermissions);
        this.redirectTo(AppRoutes.PROPERTY);
      });
  }

  ngOnInit(): void {
    this.listenObservables();
    this.checkStorage();
    // this.fetchProperties();
  }

  listenObservables() {
    this.properties$ = this.store.select((store: any) => store.sharedModule.property.list);
    this.properties$.subscribe((properties) => {
      this.properties = properties;
      this.checkStorage();
    });
  }

  checkStorage() {
    this.activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);

    if (!this.activePropertyId) {
      this.fetchProperties();
      if (this.properties.length > 0) {
        this.storage.set(StorageKeys.ACTIVE_PROPERTY, this.properties[0].id);
        this.store.dispatch(getPropertyDetail({}));
      }
    } else if (this.activePropertyId) {
      this.store.dispatch(getPropertyDetail({}));
    }
  }

  fetchProperties() {
    this.listenPropertyList();

    const userId = this.storage.get(StorageKeys.USERID);
    if (this.properties.length === 0 && userId) {
      this.store.dispatch(loadProperty({}));
    }
  }

  private listenPropertyList() {
    this.store
      .select((store: any) => store.sharedModule.property.list)
      .subscribe((propertyList) => {
        this.properties = propertyList;
      });
  }

  onSelectProperty(property: IProperty) {
    this.storage.set(StorageKeys.ACTIVE_PROPERTY, property.id);
    this.store.dispatch(getPropertyDetail({}));
    this.fetchPropertyPermissions();
  }

  private fetchPropertyPermissions() {
    const params = {
      ownerId: this.storage.get(StorageKeys.OWNER) ? this.storage.get(StorageKeys.OWNER).id : null,
      propertyId: this.storage.get(StorageKeys.ACTIVE_PROPERTY) ?? null,
    };
    this.store.dispatch(getUserPropertyPermissions({ params }));
  }

  onAddProperty() {
    const accountId = this.storage.get(StorageKeys.OWNER).id;
    this.router.navigate([AppRoutes.ADD_PROPERTY], { queryParams: { accountId: accountId } });
  }

  isOwnerVerified() {
    const owner = this.storage.get(StorageKeys.OWNER);
    return owner?.ownerStatus === "VERIFIED";
  }
}
