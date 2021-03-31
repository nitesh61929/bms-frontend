import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import * as propertyActions from "@shared/store/actions/property.actions";
import { loadPropertyType } from "@shared/store/actions/property.actions";
import { Subject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { takeUntil } from "rxjs/operators";
import { IPropertyList } from "./../../interfaces/property-list";
import { loadPropertyForAdmin } from "./../../store/actions/admin-property.actions";

@Component({
  selector: "app-admin-property-container",
  templateUrl: "./admin-property-container.component.html",
})
export class AdminPropertyContainerComponent extends BaseComponent implements OnInit {
  properties$: Observable<IPropertyList[]>;
  propertyTypes$: Observable<any>;
  pagination$: Observable<IPagination>;
  filterParams: IParameters;
  destroyed$ = new Subject<boolean>();

  params = {
    currentPage: 1,
    size: this.storage.get(StorageKeys.PER_PAGE),
    sortBy: "id",
    sortByOrder: "desc",
  };
  constructor(private store: Store<any>, public updatePropertyStatusSuccess$: Actions) {
    super();
    updatePropertyStatusSuccess$
      .pipe(ofType(propertyActions.updatePropertyStatusSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.fetchAllProperties();
      });
  }

  ngOnInit(): void {
    this.properties$ = this.store.select((store) => store.adminProperty.list);
    this.pagination$ = this.store.select((store) => store.adminProperty.pagination);
    this.propertyTypes$ = this.store.select((store) => store.sharedModule.property.propertyTypes);
    this.fetchAllProperties();
    this.loadPropertyTypes();
  }

  fetchAllProperties() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadPropertyForAdmin({ params: filteredParams }));
  }

  loadPropertyTypes() {
    this.store.dispatch(loadPropertyType(null));
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadPropertyForAdmin({ params: filteredParams }));
  }

  getParam(parameter?: IParameters) {
    return {
      currentPage:
        parameter.currentPage || parameter.currentPage === 0 ? parameter.currentPage : this.params.currentPage,
      size: parameter.size ?? this.params.size,
      searchKey: parameter.search || parameter.search === "" ? parameter.search : "",
      sortBy:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortBy === "" ? parameter.sortBy : this.params.sortBy,
      sortByOrder:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortByOrder === ""
          ? parameter.sortByOrder
          : this.params.sortByOrder,
      status: parameter.status || parameter.status === "" ? parameter.status : "",
      propertyType: parameter.propertyType || parameter.propertyType === "" ? parameter.propertyType : "",
    };
  }
}
