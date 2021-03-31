import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { IUnit } from "@shared/interfaces/unit";
import { loadUnits } from "@shared/store/actions/unit.actions";
import { Observable, Subject } from "rxjs";
import { IResidence } from "./../../interfaces/residence";
import { loadActiveResidences } from "./../../store/actions/residence.actions";

@Component({
  selector: "app-active-residences-container",
  templateUrl: "./active-residences-container.component.html",
})
export class ActiveResidencesContainerComponent extends BaseComponent implements OnInit {
  activeResidences$: Observable<IResidence[]>;
  unitList$: Observable<IUnit[]>;
  pagination$: Observable<IPagination>;
  filterParams: IParameters;
  destroyed$ = new Subject<boolean>();

  params = {
    currentPage: 1,
    size: 9999,
    sortBy: "id",
    sortByOrder: "desc",
  };

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.activeResidences$ = this.store.select((store) => store.residence.list);
    this.unitList$ = this.store.select((store) => store.sharedModule.unit.unitList);
    this.pagination$ = this.store.select((store) => store.residence.pagination);
    this.loadUnits();
    this.fetchActiveResidenceList();
  }

  fetchActiveResidenceList() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadActiveResidences({ params: filteredParams }));
  }

  loadUnits() {
    const activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadUnits({ payload: {}, params: filteredParams }));
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadActiveResidences({ params: filteredParams }));
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
      occupancyType: parameter.occupancyType || parameter.occupancyType === "" ? parameter.occupancyType : "",
      type: parameter.type || parameter.type === "" ? parameter.type : "",
      unitName: parameter.unitName || parameter.unitName === "" ? parameter.unitName : "",
    };
  }
}
