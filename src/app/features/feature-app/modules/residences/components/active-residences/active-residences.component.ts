import { animate, state, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSelectChange } from "@angular/material/select";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { PermissionsService } from "@core/services";
import { Store } from "@ngrx/store";
import { IBreadcrumb } from "@shared/breadcrumb/breadcrumb";
import { IPagination, IProperty } from "@shared/interfaces";
import { IUnit } from "@shared/interfaces/unit";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IResidence } from "./../../interfaces/residence";
import { ResidencesService } from "./../../services/residence.service";

@Component({
  selector: "app-active-residences",
  templateUrl: "./active-residences.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class ActiveResidencesComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() activeResidences$: Observable<IResidence[]>;
  @Input() unitList$: Observable<IUnit[]>;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  dataSource = new MatTableDataSource<IResidence>();
  @Input() pagination$: Observable<IPagination>;
  listLength: number;
  breadcrumbsList: Array<IBreadcrumb>;
  propertyDetail$: Observable<IProperty>;
  unitList: IUnit[];
  occupancyTypes = [];
  residenceTypes = [];
  statuses = [];
  occupancyTypeFilterValue: string = "";
  residenceTypeFilterValue: string = "";
  searchValue: string = "";
  statusFilterValue: string = "";
  unitNameFilterValue: string = "";

  displayedColumns: string[] = ["sn", "full_name", "mobile_number", "type", "unit_name", "rent_or_owned", "status"];
  expandedElement: IResidence | null;

  constructor(
    private store: Store<any>,
    protected residenceService: ResidencesService,
    protected permissionService: PermissionsService
  ) {
    super();
    this.occupancyTypes = this.residenceService.occupancyTypes;
    this.residenceTypes = this.residenceService.residenceTypes;
    this.statuses = this.residenceService.statuses;
    this.breadcrumbsList = [
      {
        displayText: "",
        routerLink: "/property",
      },
      {
        displayText: "Residences",
        routerLink: "",
      },
      {
        displayText: "Active",
        routerLink: "",
      },
    ];
  }

  ngOnInit(): void {
    this.listenObservables();
  }

  listenObservables() {
    this.activeResidences$.subscribe((activeResidences) => {
      this.dataSource = new MatTableDataSource(activeResidences);
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

  sortData(sort: Sort) {
    if (this.paginator) {
      const param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        sortBy: sort.active,
        sortByOrder: sort.direction,
      };
      this.paramChanged.emit(param);
    }
  }

  prepareFilterParams() {
    let param = {};
    if (this.paginator) {
      param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        search: this.searchValue,
        status: this.statusFilterValue,
        type: this.residenceTypeFilterValue,
        occupancyType: this.occupancyTypeFilterValue,
        unitName: this.unitNameFilterValue,
      };
      this.paramChanged.emit(param);
    }
    return param;
  }

  onSearch(searchValue: string) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.searchValue = searchValue;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onStatusFilter(statusFilter: MatSelectChange) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.statusFilterValue = statusFilter.value;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onResidenceTypeFilter(residenceTypeFilter: MatSelectChange) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.residenceTypeFilterValue = residenceTypeFilter.value;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onOccupancyTypeFilter(occupancyTypeFilter: MatSelectChange) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.occupancyTypeFilterValue = occupancyTypeFilter.value;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onUnitNameFilter(unitNameFilter: MatSelectChange) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.unitNameFilterValue = unitNameFilter.value;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onClickTableRow(element: any) {
    let bool = false;
    const bool$ = this.permissionService.checkAuthorization(AppPermissions.GET_TICKETS_DETAILS);
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
}
