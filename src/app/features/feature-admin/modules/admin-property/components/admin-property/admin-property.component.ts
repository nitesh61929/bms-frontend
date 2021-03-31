import { animate, state, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSelectChange } from "@angular/material/select";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { IBreadcrumb } from "@shared/breadcrumb/breadcrumb";
import { IPagination, IProperty } from "@shared/interfaces";
import { updatePropertyStatusFailure } from "@shared/store/actions/property.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";
import { AdminPropertyDetailsComponent } from "../admin-property-details/admin-property-details.component";
import { IPropertyList } from "./../../interfaces/property-list";
import { AdminPropertyService } from "./../../services/admin-property.service";

@Component({
  selector: "app-admin-property",
  templateUrl: "./admin-property.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class AdminPropertyComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild("adminPropertyDetailCmp") adminPropertyDetailCmp: AdminPropertyDetailsComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() properties$: Observable<IPropertyList[]>;
  @Input() propertyTypes$: Observable<any>;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() pagination$: Observable<IPagination>;
  listLength: number;
  statusFilterValue: string;
  searchValue: string;
  propertyTypeFilterValue: string;
  propertyStatuses = [];
  destroyed$ = new Subject<boolean>();

  dataSource = new MatTableDataSource<IPropertyList>();
  columnsToDisplay = ["sn", "propertyName", "phoneNumber", "propertyEmail", "propertyType", "ownername", "status"];
  expandedElement: IProperty | null;

  breadcrumbsList: Array<IBreadcrumb>;

  constructor(protected adminPropertyService: AdminPropertyService, updatePropertyStatusFailure$: Actions) {
    super();
    this.propertyStatuses = this.adminPropertyService.propertyStatuses;
    this.breadcrumbsList = [
      {
        displayText: "Dashboard",
        routerLink: "/admin-dashboard",
      },
      {
        displayText: "Property",
        routerLink: "",
      },
    ];

    updatePropertyStatusFailure$
      .pipe(ofType(updatePropertyStatusFailure), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.adminPropertyDetailCmp.resetInitialStatus();
      });
  }

  ngOnInit(): void {
    this.listenObservables();
  }

  listenObservables() {
    this.properties$.subscribe((properties) => {
      this.dataSource = new MatTableDataSource(properties);
    });

    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });
  }

  ngAfterViewInit() {
    this.trackPaginator();
  }

  prepareFilterParams() {
    var param = {};
    if (this.paginator) {
      param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        propertyType: this.propertyTypeFilterValue,
        status: this.statusFilterValue,
        search: this.searchValue,
      };
    }
    return param;
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
      this.searchValue = searchValue;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onPropertyTypeFilter(propertyType: MatSelectChange) {
    if (this.paginator) {
      this.propertyTypeFilterValue = propertyType.value;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onStatusFilter(statusFilter: MatSelectChange) {
    if (this.paginator) {
      this.statusFilterValue = statusFilter.value;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  getPhones(phones: any) {
    if (phones) {
      phones = Object.values(phones).filter(Boolean);
      return phones !== null && phones.length > 0 ? phones.join(", ") : "N/A";
    }
    return "N/A";
  }
}
