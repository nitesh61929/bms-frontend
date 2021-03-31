import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { IPropertyList } from "@shared/interfaces";
import { IAddress } from "@shared/interfaces/address";
import { getPropertyDetail, getUserPropertyPermissions, loadProperty } from "@shared/store/actions/property.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent extends BaseComponent implements OnInit {
  propertyList$: Observable<Array<IPropertyList>>;
  propertyList: IPropertyList[];

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.listenObservables();
    this.loadProperties();
  }

  loadProperties() {
    this.listenPropertyList();
    if (this.propertyList.length === 0) {
      this.store.dispatch(loadProperty({}));
    }
  }

  private listenPropertyList() {
    this.store
      .select((store: any) => store.sharedModule.property.list)
      .subscribe((propertyList) => {
        this.propertyList = propertyList;
      });
  }

  listenObservables() {
    this.propertyList$ = this.store.select((store: any) => store.sharedModule.property.list);
    this.propertyList$.subscribe((properties) => {
      this.propertyList = properties;
    });
  }

  getAddress(address: IAddress) {
    if (address) {
      const filteredAddress = Object.keys(address)
        .filter((key) => !["wardNo", "zipCode"].includes(key))
        .reduce((obj, key) => {
          obj[key] = address[key];
          return obj;
        }, {});
      return Object.values(filteredAddress).filter(Boolean).join(", ");
    }
    return "N/A";
  }

  onPropertySelect(id: string) {
    this.storage.set(StorageKeys.ACTIVE_PROPERTY, id);
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
}
