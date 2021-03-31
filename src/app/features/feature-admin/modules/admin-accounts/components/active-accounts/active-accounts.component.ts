import { animate, state, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { IBreadcrumb } from "@shared/breadcrumb/breadcrumb";
import { IPagination } from "@shared/interfaces";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IAccounts } from "../../interfaces/accounts";

export interface IProperties {
  sn: number;
  image: string;
  name: string;
  contact: string;
  address: string;
}
@Component({
  selector: "app-active-accounts",
  templateUrl: "./active-accounts.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class ActiveAccountsComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() activeAccounts$: Observable<IAccounts[]>;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() invitePropertyOwnerClicked: EventEmitter<null> = new EventEmitter<null>();
  dataSource = new MatTableDataSource<IAccounts>();
  @Input() pagination$: Observable<IPagination>;
  searchText$: Observable<string>;
  listLength: number;
  breadcrumbsList: Array<IBreadcrumb>;

  columnsToDisplay = ["sn", "fullname", "mobileNumber", "email", "ownerType"];
  expandedElement: IAccounts | null;
  hasInviteAccountAccess = AppPermissions.INVITE_ACCOUNT;

  constructor(private store: Store<any>) {
    super();

    this.breadcrumbsList = [
      {
        displayText: "Dashboard",
        routerLink: "/admin-dashboard",
      },
      {
        displayText: "Account",
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
    this.activeAccounts$.subscribe((activeAccounts) => {
      this.dataSource = new MatTableDataSource(activeAccounts);
    });

    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });

    this.searchText$ = this.store.select((store) => store.sharedModule.users.filterParams.search);
  }

  onSearch(searchValue: string) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      const param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        search: searchValue,
      };
      this.paramChanged.emit(param);
    }
  }

  handleInviteOwnerModal() {
    this.invitePropertyOwnerClicked.emit();
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
}
