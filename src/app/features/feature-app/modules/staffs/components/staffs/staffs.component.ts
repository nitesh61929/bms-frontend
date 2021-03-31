import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { IPagination } from "@shared/interfaces";
import { IStaffs } from "@shared/interfaces/staffs";
import { Observable } from "rxjs";

@Component({
  selector: "app-staffs",
  templateUrl: "./staffs.component.html",
})
export class StaffsComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() addStaffClicked: EventEmitter<null> = new EventEmitter<null>();
  @Input() staffs$: Observable<IStaffs[]>;
  staffDataSource = new MatTableDataSource<IStaffs>();
  @Input() pagination$: Observable<IPagination>;
  listLength: number;
  hasAccountUserAddAccess = AppPermissions.OWNER_ADD_STAFF;
  currentUserId: any;

  constructor() {
    super();
  }

  displayedColumns: string[] = ["name", "mobile_number", "email", "actions"];

  ngOnInit(): void {
    this.currentUserId = this.storage.get(StorageKeys.OWNER).id;
    this.listenObservables();
  }

  listenObservables() {
    this.staffs$.subscribe((staffs) => {
      this.staffDataSource = new MatTableDataSource(staffs);
    });

    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });
  }

  ngAfterViewInit() {
    // this.trackPaginator();
  }

  // trackPaginator() {
  //   if (this.paginator) {
  //     this.paginator.page
  //       .pipe(
  //         tap(() => {
  //           this.storage.set(StorageKeys.PER_PAGE, this.paginator.pageSize);
  //           const param = {
  //             currentPage: this.paginator.pageIndex + 1,
  //             size: this.paginator.pageSize,
  //           };
  //           this.paramChanged.emit(param);
  //         })
  //       )
  //       .subscribe();
  //   }
  // }

  handleAddStaff() {
    this.addStaffClicked.emit();
  }
}
