import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSelectChange } from "@angular/material/select";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import DateUtils from "@core/utilities/date-utils";
import { IPagination } from "@shared/interfaces";
import { IDropdownList } from "@shared/interfaces/dropdown-list";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IGatekeeper } from "../../interfaces/gatekeeper";
import { IGatepassReport } from "./../../interfaces/gatepass-report";

@Component({
  selector: "app-gatepass-report",
  templateUrl: "./gatepass-report.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class GatepassReportComponent extends BaseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() gatepassReports$: Observable<IGatepassReport[]>;
  @Input() visitPurposes$: Observable<IDropdownList[]>;
  @Input() gatekeepers$: Observable<IGatekeeper[]>;
  @Input() pagination$: Observable<IPagination>;
  dataSource = new MatTableDataSource<any>();
  listLength: number;
  searchText: string = "";
  filterStartDate: string = "";
  filterEndDate: string = "";
  visitPurposeFilterValue: string = "";
  checkedInByFilterValue: string = "";
  dateRangeForm: FormGroup;

  columnsToDisplay = [
    "sn",
    "image",
    "visitorName",
    "visitorMobileNumber",
    "checkedInByName",
    "checkedInDate",
    "unitName",
    "visitPurposeName",
  ];

  expandedElement: IGatepassReport | null;
  constructor() {
    super();
  }

  ngOnInit() {
    this.dateRangeForm = this.formBuilder.group({
      startDate: [""],
      endDate: [""],
    });
    this.listenObservables();
  }

  listenObservables() {
    this.gatepassReports$.subscribe((gatepassReports) => {
      this.dataSource = new MatTableDataSource(gatepassReports);
    });

    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });
  }

  prepareFilterParams() {
    var param = {};
    if (this.paginator) {
      param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        search: this.searchText,
        startDate: this.filterStartDate,
        endDate: this.filterEndDate,
        visitPurposeId: this.visitPurposeFilterValue,
        checkedInBy: this.checkedInByFilterValue,
      };
    }
    return param;
  }

  ngAfterViewInit() {
    this.trackPaginator();
  }

  trackPaginator() {
    if (this.paginator) {
      this.paginator.page
        .pipe(
          tap(() => {
            this.storage.set(StorageKeys.PER_PAGE, this.paginator.pageSize);
            const param = this.prepareFilterParams();
            this.paramChanged.emit(param);
          })
        )
        .subscribe();
    }
  }

  onSearch(searchValue: string) {
    if (this.paginator) {
      this.searchText = searchValue;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  sortData(sort: Sort) {
    if (this.paginator) {
      const param = this.prepareFilterParams();
      param["sortBy"] = sort.active;
      param["sortByOrder"] = sort.direction;
      this.paramChanged.emit(param);
    }
  }

  onDateRangeChange() {
    if (this.dateRangeForm.valid) {
      this.filterStartDate = DateUtils.convertLocalDateTimeToUtcDateTime(this.dateRangeForm.get("startDate").value);
      this.filterEndDate = DateUtils.convertLocalDateTimeToUtcDateTime(this.dateRangeForm.get("endDate").value);
      if (this.filterStartDate === "Invalid date" || this.filterEndDate === "Invalid date") {
        this.filterStartDate = this.filterEndDate = "";
      }
      if (this.paginator) {
        this.paginator.pageIndex = 0;
        const param = this.prepareFilterParams();
        this.paramChanged.emit(param);
      }
    }
  }

  clearDateRange() {
    this.dateRangeForm.reset();
    this.dateRangeForm.markAsPristine();
    this.dateRangeForm.markAsUntouched();
    this.dateRangeForm.updateValueAndValidity();
    this.filterStartDate = this.filterEndDate = "";
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onVisitPurposeFilter(visitPurposeFilter: MatSelectChange) {
    if (this.paginator) {
      this.visitPurposeFilterValue = visitPurposeFilter.value;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onCheckedInByFilter(checkedInByFilter: MatSelectChange) {
    if (this.paginator) {
      this.checkedInByFilterValue = checkedInByFilter.value;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  getStatusClass(status: string) {
    if (status === "PENDING") {
      return "Pending";
    }
    if (status === "APPROVED") {
      return "verified";
    }

    if (status === "DECLINED") {
      return "Declined";
    }
  }
}
