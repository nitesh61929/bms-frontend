import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSelectChange } from "@angular/material/select";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import DateUtils from "@core/utilities/date-utils";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination } from "@shared/interfaces";
import { Observable, Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";
import { InvoiceDetailContainerComponent } from "../../containers/invoice-detail-container/invoice-detail-container.component";
import { IInvoice } from "../../interfaces/invoice";
import { loadInvoices, saveManualPaymentSuccess, verifyChequePaymentSuccess } from "../../store/invoice.actions";
import { InvoiceService } from "./../../services/invoice.service";

export interface InvoiceUnitInfo {
  invoiceNumber: string;
  ownerName: string;
  phoneNumber: string;
  category: string;
  invoiceInterval: string;
  createdDate: string;
  amount: string;
  status: string;
}

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class InvoiceComponent extends BaseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("invoiceDetailContainerCmp") invoiceDetailContainerCmp: InvoiceDetailContainerComponent;
  @Input() invoiceList$: Observable<IInvoice[]>;
  @Input() pagination$: Observable<IPagination>;
  @Output() paramChanged: EventEmitter<any> = new EventEmitter<any>();
  dataSource = new MatTableDataSource<any>();
  dateRangeForm: FormGroup;
  searchText: string = "";
  filterStartDate: string = "";
  filterEndDate: string = "";
  statusFilterValue: string = "";
  invoiceTypeFilterValue: string = "";
  listLength: number;
  invoiceTypes: any;
  statuses: any;
  currentElement: any;

  columnsToDisplay = [
    "sn",
    "invoiceNumber",
    "payerName",
    "payerMobileNumber",
    "invoiceType",
    "invoiceInterval",
    "createdDate",
    "amount",
    "status",
  ];
  expandedElement: InvoiceUnitInfo | null;
  destroyed$ = new Subject<boolean>();

  constructor(
    private store: Store<any>,
    private invoiceService: InvoiceService,
    saveManualPaymentSuccess$: Actions,
    verifyChequePaymentSuccess$: Actions
  ) {
    super();
    this.invoiceTypes = this.invoiceService.invoiceTypes;
    this.statuses = this.invoiceService.statuses;

    saveManualPaymentSuccess$.pipe(ofType(saveManualPaymentSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.store.dispatch(loadInvoices({}));
      this.invoiceDetailContainerCmp.getPaymentDetails(this.currentElement.id);
    });

    verifyChequePaymentSuccess$.pipe(ofType(verifyChequePaymentSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.store.dispatch(loadInvoices({}));
      this.invoiceDetailContainerCmp.getPaymentDetails(this.currentElement.id);
    });
  }

  ngOnInit(): void {
    this.dateRangeForm = this.formBuilder.group({
      startDate: [""],
      endDate: [""],
    });
    this.listenObservables();
  }

  listenObservables() {
    this.invoiceList$.subscribe((invoiceList) => {
      this.dataSource = new MatTableDataSource(invoiceList);
    });
    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });
  }

  prepareFilterParams() {
    var param = {};
    if (this.paginator) {
      param = {
        currentPage: this.paginator.pageIndex + 1,
        size: this.paginator.pageSize,
        search: this.searchText,
        startDate: this.filterStartDate,
        endDate: this.filterEndDate,
        status: this.statusFilterValue,
        category: this.invoiceTypeFilterValue,
      };
    }
    return param;
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

  onSearch(searchValue: string) {
    if (this.paginator) {
      this.searchText = searchValue;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  sortData(sort: Sort) {
    if (this.paginator) {
      const param = this.prepareFilterParams();
      param["sortBy"] = sort.active;
      param["sortByOrder"] = sort.direction;
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

  onInvoiceTypeFilter(invoiceTypeFilter: MatSelectChange) {
    if (this.paginator) {
      this.invoiceTypeFilterValue = invoiceTypeFilter.value;
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  onDateRangeChange() {
    if (this.dateRangeForm.valid) {
      this.filterStartDate = DateUtils.convertLocalDateTimeToUtcDateTime(this.dateRangeForm.get("startDate").value);
      this.filterEndDate = DateUtils.convertLocalDateTimeToUtcDateTime(this.dateRangeForm.get("endDate").value);
      if (this.filterStartDate === "Invalid date" || this.filterEndDate === "Invalid date") {
        this.filterStartDate = this.filterEndDate = "";
      }
      if (this.paginator) {
        this.paginator.pageIndex = 0;
        const param = this.prepareFilterParams();
        this.paramChanged.emit(param);
      }
    }
  }

  clearDateRange() {
    this.dateRangeForm.reset();
    this.dateRangeForm.markAsPristine();
    this.dateRangeForm.markAsUntouched();
    this.dateRangeForm.updateValueAndValidity();
    this.filterStartDate = this.filterEndDate = "";
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      const param = this.prepareFilterParams();
      this.paramChanged.emit(param);
    }
  }

  getStatus(status: string) {
    return status == "PAID" ? "Completed" : Utils.toTitleCase(status);
  }

  onClickTableRow(element: any) {
    this.setExpandedElement(element);
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
