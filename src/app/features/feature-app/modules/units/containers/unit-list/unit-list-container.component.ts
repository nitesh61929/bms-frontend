import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { IUnit } from "@shared/interfaces/unit";
import { getSelectedPropertyStructure } from "@shared/store/actions/property-structure.actions";
import * as unitAction from "@shared/store/actions/unit.actions";
import { loadUnits } from "@shared/store/actions/unit.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-unit-list-container",
  templateUrl: "./unit-list-container.component.html",
})
export class UnitListContainerComponent extends BaseComponent implements OnInit {
  @Input() activePropertyId: string;
  unitList$: Observable<IUnit[]>;
  pagination$: Observable<IPagination>;
  destroyed$ = new Subject<boolean>();
  selectedPropertyStructures$: Observable<any>;

  params = {
    currentPage: 1,
    size: this.storage.get(StorageKeys.PER_PAGE),
    sortBy: "id",
    sortByOrder: "desc",
  };

  constructor(
    private store: Store<any>,
    public inviteTenantSuccess$: Actions,
    updateUnitMaintenanceChargeSuccess$: Actions
  ) {
    super();
    inviteTenantSuccess$.pipe(ofType(unitAction.inviteTenantSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.loadUnits();
    });
  }

  ngOnInit(): void {
    this.listenObservables();
    this.loadUnits();
    this.fetchSelectedPropertyStructure();
  }

  listenObservables() {
    this.unitList$ = this.store.select((store) => store.sharedModule.unit.unitList);
    this.pagination$ = this.store.select((store) => store.sharedModule.unit.pagination);
    this.selectedPropertyStructures$ = this.store.select(
      (store) => store.sharedModule.propertyStructure.selectedPropertyStructures
    );
  }

  loadUnits() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadUnits({ payload: {}, params: filteredParams }));
  }

  fetchSelectedPropertyStructure() {
    this.store.dispatch(getSelectedPropertyStructure({}));
  }

  onParamChange(data: any) {
    var filteredParams = data.param;
    var filteredPayload = data.payload;
    if (data.param) {
      filteredParams = Utils.getFilteredParams(this.getParam(data.param));
    }
    if (data.payload) {
      filteredPayload = Utils.getFilteredParams(data.payload);
    }
    this.store.dispatch(loadUnits({ payload: filteredPayload, params: filteredParams }));
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
    };
  }

  onUpdateUnitMaintenanceChargeSuccess() {
    this.loadUnits();
  }
}
