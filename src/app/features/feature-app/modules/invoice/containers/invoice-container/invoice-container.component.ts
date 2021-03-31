import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { Observable } from "rxjs";
import { loadInvoices } from "../../store/invoice.actions";
import { IInvoice } from "./../../interfaces/invoice";

@Component({
  selector: "app-invoice-container",
  templateUrl: "./invoice-container.component.html",
})
export class InvoiceContainerComponent extends BaseComponent implements OnInit {
  invoiceList$: Observable<IInvoice[]>;
  pagination$: Observable<IPagination>;
  params = {
    currentPage: 1,
    size: this.storage.get(StorageKeys.PER_PAGE),
    sortBy: "id",
    sortByOrder: "desc",
  };

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.listenObservables();
    this.loadPayeeInvoices();
  }

  listenObservables() {
    this.invoiceList$ = this.store.select((store) => store.invoice.list);
    this.pagination$ = this.store.select((store) => store.invoice.pagination);
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadInvoices({ params: filteredParams }));
  }

  loadPayeeInvoices() {
    this.store.dispatch(loadInvoices({ params: this.params }));
  }

  getParam(parameter?: IParameters) {
    return {
      currentPage: parameter.currentPage || parameter.currentPage === 0 ? parameter.currentPage : 1,
      size: parameter.size ?? this.storage.get(StorageKeys.PER_PAGE),
      searchKey: parameter.search || parameter.search === "" ? parameter.search : "",
      sortBy: (parameter.sortBy && parameter.sortByOrder) || parameter.sortBy === "" ? parameter.sortBy : "id",
      sortByOrder:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortByOrder === "" ? parameter.sortByOrder : "desc",
      fromCreatedDate: parameter.startDate ? parameter.startDate : "",
      toCreatedDate: parameter.endDate ? parameter.endDate : "",
      status: parameter.status ? parameter.status : "",
      category: parameter.category ? parameter.category : "",
    };
  }
}
