import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { Observable } from "rxjs";
import { IPanicAlertReport } from "../../interfaces/panic-alert-report";
import { loadPanicReports } from "../../store/reports.actions";

@Component({
  selector: "app-panic-alert-report-container",
  templateUrl: "./panic-alert-report-container.component.html",
  styleUrls: ["./panic-alert-report-container.component.scss"],
})
export class PanicAlertReportContainerComponent extends BaseComponent implements OnInit {
  panicAlertReports$: Observable<IPanicAlertReport[]>;
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
    this.panicAlertReports$ = this.store.select((store) => store.reports.panicReports);
    this.pagination$ = this.store.select((store) => store.reports.pagination);
    this.store.dispatch(loadPanicReports({ propertyId: this.activeProperty, params: this.params }));
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadPanicReports({ propertyId: this.activeProperty, params: filteredParams }));
  }

  getParam(parameter?: IParameters) {
    return {
      currentPage: parameter.currentPage || parameter.currentPage === 0 ? parameter.currentPage : 1,
      size: parameter.size ?? this.storage.get(StorageKeys.PER_PAGE),
      searchKey: parameter.search || parameter.search === "" ? parameter.search : "",
      sortBy: (parameter.sortBy && parameter.sortByOrder) || parameter.sortBy === "" ? parameter.sortBy : "id",
      sortByOrder:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortByOrder === "" ? parameter.sortByOrder : "desc",
      startDate: parameter.startDate ?? "",
      endDate: parameter.endDate ?? "",
    };
  }
}
