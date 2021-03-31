import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSelectChange } from "@angular/material/select";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { IBreadcrumb } from "@shared/breadcrumb/breadcrumb";
import { IPagination, IProperty } from "@shared/interfaces";
import { IUnit } from "@shared/interfaces/unit";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IResidence } from "../../interfaces/residence";
import { ResidencesService } from "../../services/residence.service";

@Component({
  selector: "app-invited-residences",
  templateUrl: "./invited-residences.component.html",
})
export class InvitedResidencesComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() invitedResidences$: Observable<IResidence[]>;
  @Input() unitList$: Observable<IUnit[]>;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() resendInvitationClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() cancelInvitationClicked: EventEmitter<string> = new EventEmitter<string>();
  dataSource = new MatTableDataSource<IResidence>();
  @Input() pagination$: Observable<IPagination>;
  listLength: number;
  breadcrumbsList: Array<IBreadcrumb>;
  propertyDetail$: Observable<IProperty>;
  unitList: IUnit[];
  statuses = [];
  searchValue: string = "";
  statusFilterValue: string = "";
  unitNameFilterValue: string = "";

  displayedColumns: string[] = ["sn", "full_name", "mobile_number", "unit_name", "actions"];

  constructor(private store: Store<any>, protected residenceService: ResidencesService) {
    super();
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
        displayText: "Invited",
        routerLink: "",
      },
    ];
  }

  ngOnInit(): void {
    this.listenObservables();
  }

  listenObservables() {
    this.invitedResidences$.subscribe((invitedResidences) => {
      this.dataSource = new MatTableDataSource(invitedResidences);
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

  onUnitNameFilter(unitNameFilter: MatSelectChange) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.unitNameFilterValue = unitNameFilter.value;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  resendInvitation(invitationId: string) {
    this.resendInvitationClicked.emit(invitationId);
  }

  cancelInvitation(invitationId: string) {
    this.cancelInvitationClicked.emit(invitationId);
  }
}
