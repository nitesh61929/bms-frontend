import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components/base.component";
import { StorageKeys } from "@core/enums";
import { IPagination } from "@shared/interfaces";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IAdminUsers } from "../../interfaces/admin-users";

@Component({
  selector: "app-admin-users",
  templateUrl: "./admin-users.component.html",
  styleUrls: ["./admin-users.component.scss"],
})
export class AdminUsersComponent extends BaseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() adminUsers$: Observable<IAdminUsers[]>;
  @Input() pagination$: Observable<IPagination>;
  searchText: string;
  dataSource = new MatTableDataSource<any>();
  listLength: number;
  columnsToDisplay = ["sn", "name", "accountType", "email", "mobileNumber"];
  columnDefs = [
    { name: "name", header: this.getTranslatedString("common.name") },
    { name: "accountType", header: this.getTranslatedString("account_type") },
    { name: "email", header: this.getTranslatedString("common.email") },
    { name: "mobileNumber", header: this.getTranslatedString("common.mobile_number") },
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.listenObservables();
  }

  listenObservables() {
    this.adminUsers$.subscribe((adminUsers) => {
      this.dataSource = new MatTableDataSource(adminUsers);
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
      };

      this.paramChanged.emit(param);
    }
  }
}
