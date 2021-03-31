import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { IPagination } from "@shared/interfaces";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-material-table",
  templateUrl: "./material-table.component.html",
})
export class MaterialTableComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() data: MatTableDataSource<any>;
  @Input() className: string;
  listLength: number;
  @Input() pagination$: Observable<IPagination>;
  @Input() columns: Array<any>;
  @Output() onViewClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditClicked: EventEmitter<any> = new EventEmitter<any>();

  columnsToDisplay: Array<any>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.columns) {
      this.columnsToDisplay = this.columns.map((col) => col.columnDef);
    }
    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
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

  viewClicked(data: any) {
    this.onViewClicked.emit(data);
  }

  editClicked(data: any) {
    this.onEditClicked.emit(data);
  }

  deleteClicked(data: any) {
    this.onDeleteClicked.emit(data);
  }
}
