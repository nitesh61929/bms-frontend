import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { PropertyOwnerInvitationComponent } from "@shared/property-owner-invitation/property-owner-invitation.component";
import * as invitationsAction from "@shared/store/actions/invitations.actions";
import { invitePropertyOwner } from "@shared/store/actions/invitations.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IAccounts } from "../../interfaces/accounts";
import { loadActiveAccounts } from "../../store/actions/admin-accounts.actions";

@Component({
  selector: "app-active-accounts-container",
  templateUrl: "./active-accounts-container.component.html",
})
export class ActiveAccountsContainerComponent extends BaseComponent implements OnInit {
  activeAccounts$: Observable<IAccounts[]>;

  pagination$: Observable<IPagination>;
  filterParams: IParameters;
  destroyed$ = new Subject<boolean>();
  dialogRef: MatDialogRef<PropertyOwnerInvitationComponent>;

  params = {
    currentPage: 1,
    size: this.storage.get(StorageKeys.PER_PAGE),
    sortBy: "id",
    sortByOrder: "desc",
  };

  constructor(private store: Store<any>, public dialog: MatDialog, public invitePropertyOwnerSuccess$: Actions) {
    super();
    invitePropertyOwnerSuccess$
      .pipe(ofType(invitationsAction.invitePropertyOwnerSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        if (this.dialogRef) {
          this.dialogRef.close();
        }
      });
  }

  ngOnInit(): void {
    this.activeAccounts$ = this.store.select((store) => store.adminAccounts.list);
    this.pagination$ = this.store.select((store) => store.adminAccounts.pagination);
    this.fetchActiveAccountList();
  }

  fetchActiveAccountList() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadActiveAccounts({ params: filteredParams }));
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadActiveAccounts({ params: filteredParams }));
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
    };
  }

  showInvitePropertyOwnerModal() {
    this.dialogRef = this.dialog.open(PropertyOwnerInvitationComponent, {
      id: "invitePropertyOwner",
      data: {},
    });
    this.dialogRef.componentInstance.invitePropertyOwnerClicked.subscribe((d) => {
      this.store.dispatch(invitePropertyOwner({ payload: d }));
    });
    this.dialogRef.afterClosed().subscribe((result) => {});
  }
}
