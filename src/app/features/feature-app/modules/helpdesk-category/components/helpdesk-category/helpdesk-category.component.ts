import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSelectChange } from "@angular/material/select";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { AppPermissions } from "@core/enums/app-permissions";
import { Store } from "@ngrx/store";
import { IPagination } from "@shared/interfaces";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IHelpdeskCategory } from "../../interfaces/ticket-category";
import { HelpdeskCategoryService } from "../../services/helpdesk-category.service";

@Component({
  selector: "app-helpdesk-category",
  templateUrl: "./helpdesk-category.component.html",
})
export class HelpdeskCategoryComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() helpdeskCategories$: Observable<IHelpdeskCategory[]>;
  @Input() pagination$: Observable<IPagination>;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() addHelpdeskCategoryClicked: EventEmitter<null> = new EventEmitter<null>();
  @Output() updateHelpdeskCategoryClicked: EventEmitter<IHelpdeskCategory> = new EventEmitter<IHelpdeskCategory>();
  @Output() deleteHelpdeskCategoryClicked: EventEmitter<any> = new EventEmitter<any>();
  dataSource: MatTableDataSource<IHelpdeskCategory>;
  listLength: number;
  statusFilter: any;
  searchValue: any;
  helpdeskCategoryStatuses = [];
  hasAddCategoryAccess = AppPermissions.TICKET_ADD_CATEGORY;
  hasListCategoryAccess = AppPermissions.TICKET_GET_CATEGORIES;
  hasUpdateCategoryAccess = AppPermissions.TICKET_UPDATE_CATEGORY_TYPE;
  hasDeleteCategoryAccess = AppPermissions.TICKET_REMOVE_CATEGORY_TYPE;

  displayedColumns: string[] = ["sn", "thumbnail", "category_name", "created_date", "category_status", "actions"];

  constructor(public store: Store<any>, protected HelpdeskCategoryService: HelpdeskCategoryService) {
    super();
    this.helpdeskCategoryStatuses = this.HelpdeskCategoryService.statuses;
  }

  ngOnInit(): void {
    this.helpdeskCategories$.subscribe((helpdeskCategories) => {
      this.dataSource = new MatTableDataSource(helpdeskCategories);
    });

    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });
  }

  ngAfterViewInit() {
    this.trackPaginator();
  }

  prepareFilterParams() {
    var params = {};
    if (this.paginator) {
      params = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        search: this.searchValue,
        status: this.statusFilter,
      };
    }
    return params;
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
      this.paginator.pageIndex = 0;
      this.searchValue = searchValue;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onStatusFilter(statusFilter: MatSelectChange) {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.statusFilter = statusFilter.value;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  handleAddHelpdeskCategoryModal() {
    this.addHelpdeskCategoryClicked.emit();
  }

  updateHelpdeskCategory(category: any) {
    this.updateHelpdeskCategoryClicked.emit(category);
  }

  deleteHelpdeskCategory(category: any) {
    this.deleteHelpdeskCategoryClicked.emit(category?.id);
  }
}
