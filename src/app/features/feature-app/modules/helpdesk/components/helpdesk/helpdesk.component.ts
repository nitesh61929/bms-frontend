import { animate, state, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
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
import { IDropdownList } from "@shared/interfaces/dropdown-list";
import { IHelpdesk } from "@shared/interfaces/helpdesk";
import { HelpdeskService } from "@shared/services/helpdesk/helpdesk.service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-helpdesk",
  templateUrl: "./helpdesk.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class HelpdeskComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() helpdeskList$: Observable<IHelpdesk[]>;
  @Input() categories$: Observable<IDropdownList[]>;
  @Input() pagination$: Observable<IPagination>;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  breadcrumbsList: Array<IBreadcrumb>;
  propertyDetail$: Observable<IProperty>;
  categories: IDropdownList[];

  dataSource: MatTableDataSource<IHelpdesk>;
  listLength: number;
  dateRangeForm: FormGroup;
  statusFilter: string;
  categoryFilter: string;
  priorityFilter: string;
  currentElement: any;
  startDate: any;
  endDate: any;
  searchValue: string;
  sortBy: any;
  sortByOrder: any;

  displayedColumns: string[] = ["ticket_ID", "title", "category", "priority", "status", "created_date", "due_date"];
  expandedElement: IHelpdesk | null;

  helpdeskStatuses = [];
  helpdeskPriorities = [];
  activeElement: any;

  constructor(
    public store: Store<any>,
    protected helpdeskService: HelpdeskService,
    protected permissionService: PermissionsService
  ) {
    super();
    this.helpdeskStatuses = this.helpdeskService.statuses;
    this.helpdeskPriorities = this.helpdeskService.priorities;
    this.setDateRangeForm();
    this.breadcrumbsList = [
      {
        displayText: "",
        routerLink: "/property",
      },
      {
        displayText: "Helpdesk",
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
    this.helpdeskList$.subscribe((helpdeskList) => {
      this.dataSource = new MatTableDataSource(helpdeskList);
    });

    this.categories$.subscribe((categories) => {
      this.categories = categories;
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
    this.searchValue = searchValue;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  sortData(sort: Sort) {
    this.sortBy = sort.active;
    this.sortByOrder = sort.direction;
    if (this.paginator) {
      const param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        sortBy: this.sortBy,
        sortByOrder: this.sortByOrder,
      };
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

  onCategoryFilter(categoryFilter: MatSelectChange) {
    if (this.paginator) {
      this.categoryFilter = categoryFilter.value;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onPriorityFilter(priorityFilter: MatSelectChange) {
    if (this.paginator) {
      this.priorityFilter = priorityFilter.value;
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

  prepareFilterParams() {
    var param = {};
    if (this.paginator) {
      param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        startDate: this.startDate,
        endDate: this.endDate,
        status: this.statusFilter,
        category: this.categoryFilter,
        priority: this.priorityFilter,
        search: this.searchValue,
        sortBy: this.sortBy,
        sortByOrder: this.sortByOrder,
      };
    }
    return param;
  }

  getStatusClass(status: string) {
    if (status === "NEW") {
      return "pending_verification";
    }
    if (status === "IN_PROGRESS") {
      return "Processed";
    }

    if (status === "RESOLVED") {
      return "verified";
    }

    if (status === "CLOSED") {
      return "Closed";
    }
  }

  getStatus(status: string) {
    return status.replace("_", " ");
  }

  onClickTableRow(element: any) {
    this.setExpandedElement(element);

    let bool = false;
    const bool$ = this.permissionService.checkAuthorization(AppPermissions.GET_TICKETS_DETAILS);
    bool$.subscribe((b) => {
      bool = b;
    });
    if (!bool) {
      return false;
    }
  }

  setExpandedElement(element: any) {
    this.expandedElement = this.currentElement && element.id === this.currentElement?.id ? null : element;
    if (this.expandedElement === element) {
      this.currentElement = element;
    } else {
      this.currentElement = null;
    }
  }

  isRowExpanded(element: any) {
    return this.currentElement && element.id === this.currentElement?.id;
  }
}
