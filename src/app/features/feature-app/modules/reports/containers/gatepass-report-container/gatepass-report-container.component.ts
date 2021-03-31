import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { IDropdownList } from "@shared/interfaces/dropdown-list";
import { Observable } from "rxjs";
import { IGatekeeper } from "../../interfaces/gatekeeper";
import { IGatepassReport } from "./../../interfaces/gatepass-report";
import { getGatekeeperList, getVisitPurposeList, loadGatepassReports } from "./../../store/reports.actions";

@Component({
  selector: "app-gatepass-report-container",
  templateUrl: "./gatepass-report-container.component.html",
})
export class GatepassReportContainerComponent extends BaseComponent implements OnInit {
  gatepassReports$: Observable<IGatepassReport[]>;
  visitPurposes$: Observable<IDropdownList[]>;
  gatekeepers$: Observable<IGatekeeper[]>;
  pagination$: Observable<IPagination>;
  activeProperty: string;
  params = {
    currentPage: 1,
    size: this.storage.get(StorageKeys.PER_PAGE),
    sortBy: "id",
    sortByOrder: "desc",
  };

  constructor(private store: Store<any>) {
    super();
    this.activeProperty = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
  }

  ngOnInit(): void {
    this.gatepassReports$ = this.store.select((store) => store.reports.gatepassReports);
    this.visitPurposes$ = this.store.select((store) => store.reports.visitPurposes);
    this.gatekeepers$ = this.store.select((store) => store.reports.gateKeepers);
    this.pagination$ = this.store.select((store) => store.reports.pagination);
    this.store.dispatch(loadGatepassReports({ params: this.params }));
    this.store.dispatch(getVisitPurposeList({}));
    this.store.dispatch(getGatekeeperList({}));
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadGatepassReports({ params: filteredParams }));
  }

  getParam(parameter?: IParameters) {
    return {
      currentPage: parameter.currentPage || parameter.currentPage === 0 ? parameter.currentPage : 1,
      size: parameter.size ?? this.storage.get(StorageKeys.PER_PAGE),
      searchKey: parameter.search || parameter.search === "" ? parameter.search : "",
      sortBy: (parameter.sortBy && parameter.sortByOrder) || parameter.sortBy === "" ? parameter.sortBy : "id",
      sortByOrder:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortByOrder === "" ? parameter.sortByOrder : "desc",
      visitPurposeId: parameter.visitPurposeId ?? "",
      checkedInBy: parameter.checkedInBy ?? "",
      unitName: parameter.unitName ?? "",
      startDate: parameter.startDate ?? "",
      endDate: parameter.endDate ?? "",
    };
  }
}
