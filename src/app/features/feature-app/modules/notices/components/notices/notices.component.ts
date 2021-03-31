import { animate, state, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSelectChange } from "@angular/material/select";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { PermissionsService } from "@core/services";
import DateUtils from "@core/utilities/date-utils";
import { Store } from "@ngrx/store";
import { IBreadcrumb } from "@shared/breadcrumb/breadcrumb";
import { IPagination, IProperty } from "@shared/interfaces";
import { INotices } from "@shared/interfaces/notices";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-notices",
  templateUrl: "./notices.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class NoticesComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() noticeList$: Observable<INotices[]>;
  @Input() pagination$: Observable<IPagination>;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() addNoticeClicked: EventEmitter<null> = new EventEmitter<null>();
  dataSource: MatTableDataSource<INotices>;
  listLength: number;
  dateRangeForm: FormGroup;
  statusFilter: any;
  startDate: any;
  endDate: any;
  searchValue: any;
  sortBy: any;
  sortByOrder: any;
  breadcrumbsList: Array<IBreadcrumb>;
  propertyDetail$: Observable<IProperty>;
  hasNoticeAddAccess = AppPermissions.NOTICE_ADD;

  displayedColumns: string[] = ["sn", "title", "updated_date", "status"];
  expandedElement: INotices | null;

  constructor(public dialog: MatDialog, public store: Store<any>, protected permissionService: PermissionsService) {
    super();
    this.setDateRangeForm();
    this.breadcrumbsList = [
      {
        displayText: "",
        routerLink: "/property",
      },
      {
        displayText: "Notice Board",
        routerLink: "",
      },
    ];
  }

  setDateRangeForm() {
    this.dateRangeForm = this.formBuilder.group({
      startDate: [""],
      endDate: [""],
    });
  }

  ngOnInit(): void {
    this.noticeList$.subscribe((noticeList) => {
      this.dataSource = new MatTableDataSource(noticeList);
    });

    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });

    this.propertyDetail$ = this.store.select((store) => store.sharedModule.property.detail);
    this.propertyDetail$.subscribe((propertyDetail) => {
      this.breadcrumbsList[0].displayText = propertyDetail?.name;
    });
  }

  ngAfterViewInit() {
    this.trackPaginator();
  }

  onSearch(searchValue: string) {
    if (this.paginator) {
      this.searchValue = searchValue;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  sortData(sort: Sort) {
    if (this.paginator) {
      this.sortBy = sort.active;
      this.sortByOrder = sort.direction;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
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

  onStatusFilter(statusFilter: MatSelectChange) {
    if (this.paginator) {
      this.statusFilter = statusFilter.value;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onDateRangeChange() {
    if (this.dateRangeForm.valid) {
      this.startDate = DateUtils.convertLocalDateTimeToUtcDateTime(this.dateRangeForm.get("startDate").value);
      this.endDate = DateUtils.convertLocalDateTimeToUtcDateTime(this.dateRangeForm.get("endDate").value);
      if (this.startDate === "Invalid date" || this.endDate === "Invalid date") {
        this.startDate = this.endDate = "";
      }
      if (this.paginator) {
        this.paginator.pageIndex = 0;
        const param = this.prepareFilterParams();
        this.paramChanged.emit(param);
      }
    }
  }

  prepareFilterParams() {
    var params = {};
    if (this.paginator) {
      params = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        startDate: this.startDate,
        endDate: this.endDate,
        published: this.statusFilter,
        search: this.searchValue,
        sortBy: this.sortBy,
        sortByOrder: this.sortByOrder,
      };
    }
    return params;
  }

  clearDateRange() {
    this.startDate = null;
    this.endDate = null;
    this.dateRangeForm.reset();
    this.dateRangeForm.markAsPristine();
    this.dateRangeForm.markAsUntouched();
    this.dateRangeForm.updateValueAndValidity();
    const param = this.prepareFilterParams();
    this.paramChanged.emit(param);
  }

  getNoticeStatus(status: boolean) {
    return status ? "published" : "unpublished";
  }

  onClickTableRow(element: any) {
    let bool = false;
    const bool$ = this.permissionService.checkAuthorization(AppPermissions.NOTICE_DETAIL);
    bool$.subscribe((b) => {
      bool = b;
    });
    if (!bool) return false;
    this.expandedElement = this.expandedElement === element ? null : element;

    if (this.expandedElement === element) {
      // expand row
    } else {
      // collapse row
    }
  }

  handleAddNoticeModal() {
    this.addNoticeClicked.emit();
  }
}
