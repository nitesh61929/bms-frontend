import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { Observable } from "rxjs";
import { IAdminUsers } from "../../interfaces/admin-users";
import { loadAdminUsers } from "../../store/actions/admin-users.actions";

@Component({
  selector: "app-admin-users-container",
  templateUrl: "./admin-users-container.component.html",
  styleUrls: ["./admin-users-container.component.scss"],
})
export class AdminUsersContainerComponent extends BaseComponent implements OnInit {
  adminUsers$: Observable<IAdminUsers[]>;
  pagination$: Observable<IPagination>;
  filteredParams: IParameters;
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
    this.adminUsers$ = this.store.select((store) => store.adminUsers.list);
    this.pagination$ = this.store.select((store) => store.adminUsers.pagination);
    this.getAllAdminUsers();
  }

  getAllAdminUsers() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadAdminUsers({ params: filteredParams }));
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadAdminUsers({ params: filteredParams }));
  }

  getParam(parameter?: IParameters) {
    return {
      currentPage:
        parameter.currentPage || parameter.currentPage === 0 ? parameter.currentPage : this.params.currentPage,
      size: parameter.size ?? this.params.size,
      searchKey: parameter.search || "",
      sortBy:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortBy === "" ? parameter.sortBy : this.params.sortBy,
      sortByOrder:
        (parameter.sortBy && parameter.sortByOrder) || parameter.sortByOrder === ""
          ? parameter.sortByOrder
          : this.params.sortByOrder,
    };
  }
}
