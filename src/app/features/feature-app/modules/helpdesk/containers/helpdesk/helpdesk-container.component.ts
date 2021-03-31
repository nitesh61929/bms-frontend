import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { IDropdownList } from "@shared/interfaces/dropdown-list";
import { loadHelpdesk, loadHelpdeskCategories } from "@shared/store/actions/helpdesk.actions";
import { IHelpDesk } from "app/designs/design-helpdesk/design-helpdesk.component";
import { Observable } from "rxjs";

@Component({
  selector: "app-helpdesk-container",
  templateUrl: "./helpdesk-container.component.html",
})
export class HelpdeskContainerComponent extends BaseComponent implements OnInit {
  activePropertyId: string;
  helpdeskList$: Observable<IHelpDesk[]>;
  categories$: Observable<IDropdownList[]>;
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
    this.activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
    this.listenObservables();
    this.loadHelpdeskList();
    this.loadHelpdeskCategories();
  }

  listenObservables() {
    this.helpdeskList$ = this.store.select((store) => store.sharedModule.helpdesk.list);
    this.categories$ = this.store.select((store) => store.sharedModule.helpdesk.categories);
    this.pagination$ = this.store.select((store) => store.sharedModule.helpdesk.pagination);
  }

  loadHelpdeskList() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadHelpdesk({ params: filteredParams }));
  }

  loadHelpdeskCategories() {
    this.params.size = 9999;
    this.store.dispatch(loadHelpdeskCategories({ params: Utils.getFilteredParams(this.getParam(this.params)) }));
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadHelpdesk({ params: filteredParams }));
  }

  getParam(parameter?: IParameters) {
    return {
      currentPage:
        parameter.currentPage || parameter.currentPage === 0 ? parameter.currentPage : this.params.currentPage,
      size: parameter.size ?? this.params.size,
      searchKey: parameter.search || parameter.search === "" ? parameter.search : "",
      sortBy:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortBy === "" ? parameter.sortBy : this.params.sortBy,
      sortByOrder:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortByOrder === ""
          ? parameter.sortByOrder
          : this.params.sortByOrder,
      status: parameter.status ? parameter.status : "",
      priority: parameter.priority ? parameter.priority : "",
      category: parameter.category ? parameter.category : "",
      startDate: parameter.startDate ? parameter.startDate : "",
      endDate: parameter.endDate ? parameter.endDate : "",
    };
  }
}
