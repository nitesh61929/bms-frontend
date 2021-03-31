import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import DateUtils from "@core/utilities/date-utils";
import { IPagination } from "@shared/interfaces";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IPanicAlertReport } from "../../interfaces/panic-alert-report";
@Component({
  selector: "app-panic-alert-report",
  templateUrl: "./panic-alert-report.component.html",
  styleUrls: ["./panic-alert-report.component.scss"],
})
export class PanicAlertReportComponent extends BaseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() panicAlertReports$: Observable<IPanicAlertReport[]>;
  @Input() pagination$: Observable<IPagination>;
  searchText: string;
  filterStartDate: string;
  filterEndDate: string;
  dateRangeForm: FormGroup;
  dataSource = new MatTableDataSource<any>();
  listLength: number;
  columnsToDisplay = [
    "sn",
    "tenantName",
    "unitName",
    "createdDateTime",
    "responseInterval",
    "gateKeeperName",
    "getGateKeeperMobileNumber",
  ];
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.dateRangeForm = this.formBuilder.group({
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
    });
    this.listenObservables();
  }

  listenObservables() {
    this.panicAlertReports$.subscribe((panicAlertReports) => {
      this.dataSource = new MatTableDataSource(panicAlertReports);
    });
    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });
  }

  onSearch(searchValue: string) {
    this.searchText = searchValue;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      const param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        search: this.searchText,
        startDate: this.filterStartDate,
        endDate: this.filterEndDate,
      };
      this.paramChanged.emit(param);
    }
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
            const param = {
              currentPage: this.paginator.pageIndex + 1,
              size: this.paginator.pageSize,
              search: this.searchText,
              startDate: this.filterStartDate,
              endDate: this.filterEndDate,
            };

            this.paramChanged.emit(param);
          })
        )
        .subscribe();
    }
  }

  sortData(sort: Sort) {
    if (this.paginator) {
      const param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        sortBy: sort.active,
        sortByOrder: sort.direction,
        search: this.searchText,
        startDate: this.filterStartDate,
        endDate: this.filterEndDate,
      };

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
        const param = {
          currentPage: this.paginator.pageIndex + 1,
          size: this.paginator.pageSize,
          startDate: this.filterStartDate,
          endDate: this.filterEndDate,
          searchKey: this.searchText,
        };
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
      const param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        startDate: this.filterStartDate,
        endDate: this.filterEndDate,
        searchKey: this.searchText,
      };
      this.paramChanged.emit(param);
    }
  }

  toMinuteSecond(millisecond: any) {
    const time = DateUtils.millisToMinutesAndSeconds(millisecond);
    return time;
  }
}
