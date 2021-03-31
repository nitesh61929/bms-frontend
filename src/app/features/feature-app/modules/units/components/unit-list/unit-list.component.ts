import { animate, state, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSelectChange } from "@angular/material/select";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { PermissionsService } from "@core/services";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IBreadcrumb } from "@shared/breadcrumb/breadcrumb";
import { IPagination, IProperty } from "@shared/interfaces";
import { IPropertyStructure } from "@shared/interfaces/property-structure";
import { IUnit } from "@shared/interfaces/unit";
import { getUnitFilterDropdown } from "@shared/store/actions/unit.actions";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-unit-list",
  templateUrl: "./unit-list.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class UnitListComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() unitList$: Observable<IUnit[]>;
  @Input() selectedPropertyStructures$: Observable<IPropertyStructure[]>;
  @Input() pagination$: Observable<IPagination>;
  @Input() activePropertyId: string;
  @Output() paramChanged: EventEmitter<{ param: any; payload: any }> = new EventEmitter<{
    param: any;
    payload: any;
  }>();
  @Output() updateUnitMaintenanceChargeSuccess: EventEmitter<null> = new EventEmitter<null>();
  @Output() unitRentConfigUpdated: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = [
    "sn",
    "unit_name",
    "block",
    "tower",
    "floor",
    "tenant_fullname",
    "mobile_number",
    "rent_or_owned",
  ];
  dataSource: MatTableDataSource<IUnit>;
  listLength: number;
  currentElement: any;
  selectedPropertyStructures: IPropertyStructure[];
  breadcrumbsList: Array<IBreadcrumb>;
  propertyDetail$: Observable<IProperty>;
  selectedFilterStructure = {};
  destroyed$ = new Subject<boolean>();
  unitFilterDropdown$: Observable<any>;
  unitFilterDropdown = [];
  currentClickedFilterOption: string;
  blockId: string;
  towerId: string;
  floorId: string;
  hasInvoicePrefixSetup: boolean = false;
  loading$: Observable<boolean>;

  expandedElement: IUnit | null;
  constructor(
    public store: Store<any>,
    getUnitFilterDropdownSuccess$: Actions,
    protected permissionService: PermissionsService
  ) {
    super();

    // getUnitFilterDropdownSuccess$
    //   .pipe(ofType(unitAction.getUnitFilterDropdownSuccess), takeUntil(this.destroyed$))
    //   .subscribe((d) => {
    //     if (this.paginator) {
    //       this.paginator.pageIndex = 0;
    //       const param = {
    //         currentPage: this.paginator.pageIndex + 1,
    //         size: this.paginator.pageSize,
    //       };
    //       this.paramChanged.emit({ param, payload: this.selectedFilterStructure });
    //     }
    //   });

    this.breadcrumbsList = [
      {
        displayText: "",
        routerLink: "/property",
      },

      {
        displayText: "Units",
        routerLink: "",
      },
    ];
  }

  ngOnInit(): void {
    this.unitList$.subscribe((unitList) => {
      this.dataSource = new MatTableDataSource(unitList);
    });

    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });

    this.propertyDetail$ = this.store.select((store) => store.sharedModule.property.detail);
    this.propertyDetail$.subscribe((propertyDetail) => {
      this.breadcrumbsList[0].displayText = propertyDetail?.name;
      if (propertyDetail?.invoicePrefixSetup) {
        this.hasInvoicePrefixSetup = true;
      }
    });

    this.selectedPropertyStructures$.subscribe((structures) => {
      this.selectedPropertyStructures = structures;
      if (this.selectedPropertyStructures) {
        this.setBlockId();
        this.setTowerId();
        this.setFloorId();
        this.selectedPropertyStructures.map((structure) => {
          this.unitFilterDropdown[structure.id] = [];
        });
      }
    });

    this.unitFilterDropdown$ = this.store.select((store) => store.sharedModule.unit.filterDropdown);
    this.unitFilterDropdown$.subscribe((dropdown) => {
      if (this.currentClickedFilterOption) {
        this.unitFilterDropdown[this.currentClickedFilterOption] = dropdown.filter(function (el) {
          return el != null;
        });
        // debugger;
      }
    });

    this.loading$ = this.store.select((store) => store.sharedModule.unit.loadingUnitFilters);
  }

  setBlockId() {
    if (this.selectedPropertyStructures) {
      const blockId = this.selectedPropertyStructures
        .filter((structure) => {
          return structure.name.toLowerCase() === "block";
        })
        .map((block) => block.id);
      this.blockId = blockId[0];
    }
  }

  setTowerId() {
    if (this.selectedPropertyStructures) {
      const towerId = this.selectedPropertyStructures
        .filter((structure) => {
          return structure.name.toLowerCase() === "tower";
        })
        .map((tower) => tower.id);
      this.towerId = towerId[0];
    }
  }

  setFloorId() {
    if (this.selectedPropertyStructures) {
      const floorId = this.selectedPropertyStructures
        .filter((structure) => {
          return structure.name.toLowerCase() === "floor";
        })
        .map((floor) => floor.id);
      this.floorId = floorId[0];
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
            };

            this.paramChanged.emit({ param, payload: this.selectedFilterStructure });
          })
        )
        .subscribe();
    }
  }

  onSearch(searchValue: string) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      const param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        search: searchValue,
      };
      this.paramChanged.emit({ param, payload: this.selectedFilterStructure });
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
      this.paramChanged.emit({ param, payload: this.selectedFilterStructure });
    }
  }

  onClickTableRow(element: any) {
    let bool = false;
    const bool$ = this.permissionService.checkAuthorization(AppPermissions.UNIT_DETAIL);
    bool$.subscribe((b) => {
      bool = b;
    });
    if (!bool) return false;
    this.currentElement = element;
    this.expandedElement = this.expandedElement === element ? null : element;
    if (this.expandedElement === element) {
      // expand row
    } else {
      // collapse row
    }
  }

  structureFilterChange(structureFilterChange: MatSelectChange, structureTypeId: string) {
    this.selectedFilterStructure[structureTypeId] = structureFilterChange.value;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      const param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
      };
      this.paramChanged.emit({ param, payload: this.selectedFilterStructure });
    }
  }

  onUpdateUnitMaintenanceChargeSuccess() {
    this.updateUnitMaintenanceChargeSuccess.emit();
  }

  dropdownClicked(structure: IPropertyStructure) {
    this.currentClickedFilterOption = structure?.id;
    this.unitFilterDropdown[this.currentClickedFilterOption] = [];
    this.selectedPropertyStructures.forEach((d) => {
      if (this.selectedFilterStructure.hasOwnProperty(d.id) && d.order >= structure.order) {
        if (d.order > structure.order) {
          this.unitFilterDropdown[d.id] = [];
        }
        delete this.selectedFilterStructure[d.id];
      }
    });
    const payload = {
      propertyId: this.activePropertyId,
      requiredStructure: structure?.id,
      dropDownStructure: this.selectedFilterStructure,
    };

    this.store.dispatch(getUnitFilterDropdown({ payload }));
  }

  getBlockName(structure: any) {
    if (structure) {
      return structure[this.blockId] ?? "N/A";
    }
    return "N/A";
  }

  getTowerName(structure: any) {
    if (structure) {
      return structure[this.towerId] ?? "N/A";
    }
    return "N/A";
  }

  getFloorName(structure: any) {
    if (structure) {
      return structure[this.floorId] ?? "N/A";
    }
    return "N/A";
  }

  onUnitRentConfigUpdated() {
    this.unitRentConfigUpdated.emit();
  }
}
