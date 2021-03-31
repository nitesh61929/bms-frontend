import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { IInvitations } from "@shared/interfaces/invitations";
import { PropertyOwnerInvitationComponent } from "@shared/property-owner-invitation/property-owner-invitation.component";
import * as invitationsAction from "@shared/store/actions/invitations.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { InvitedAccountsComponent } from "../../components/invited-accounts/invited-accounts.component";
import { IUpdateInvitationStatus } from "../../interfaces/update-invitation-status";
import * as adminAccountsActions from "../../store/actions/admin-accounts.actions";
import { loadPendingAccountInvitations, updateInvitationStatus } from "../../store/actions/admin-accounts.actions";

@Component({
  selector: "app-invited-accounts-container",
  templateUrl: "./invited-accounts-container.component.html",
})
export class InvitedAccountsContainerComponent extends BaseComponent implements OnInit {
  @ViewChild("invitedAccountsCmp") invitedAccountsCmp: InvitedAccountsComponent;
  pendingAccountInvitations$: Observable<IInvitations[]>;

  pagination$: Observable<IPagination>;
  filterParams: IParameters;
  destroyed$ = new Subject<boolean>();
  dialogRef: MatDialogRef<PropertyOwnerInvitationComponent>;

  params = {
    currentPage: 1,
    size: this.storage.get(StorageKeys.PER_PAGE),
    sortBy: "id",
    sortByOrder: "desc",
    searchKey: "",
    status: "",
  };

  constructor(
    private store: Store<any>,
    public dialog: MatDialog,
    public invitePropertyOwnerSuccess$: Actions,
    public updateInvitationStatusSuccess$: Actions,
    public updateInvitationStatusFailure$: Actions
  ) {
    super();
    invitePropertyOwnerSuccess$
      .pipe(ofType(invitationsAction.invitePropertyOwnerSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        if (this.dialogRef) {
          this.dialogRef.close();
        }
        this.fetchPendingAccountInvitations();
      });

    updateInvitationStatusSuccess$
      .pipe(ofType(adminAccountsActions.updateInvitationStatusSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.fetchPendingAccountInvitations();
      });

    updateInvitationStatusFailure$
      .pipe(ofType(adminAccountsActions.updateInvitationStatusFailure), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.invitedAccountsCmp.resetInitialStatus();
      });
  }

  ngOnInit(): void {
    this.pendingAccountInvitations$ = this.store.select((store) => store.adminAccounts.invitations);
    this.pagination$ = this.store.select((store) => store.adminAccounts.pagination);
    this.fetchPendingAccountInvitations();
  }

  fetchPendingAccountInvitations() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadPendingAccountInvitations({ params: filteredParams }));
  }

  onUpdateStatus(updateStatusPayload: IUpdateInvitationStatus) {
    const options = {
      message: this.getTranslatedString("confirm_status_change"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(updateInvitationStatus({ payload: updateStatusPayload }));
      } else {
        this.invitedAccountsCmp.resetInitialStatus(updateStatusPayload.index);
      }
    });
  }

  showInvitePropertyOwnerModal() {
    this.dialogRef = this.dialog.open(PropertyOwnerInvitationComponent, {
      id: "invitePropertyOwner",
      data: {},
    });
    this.dialogRef.componentInstance.invitePropertyOwnerClicked.subscribe((d) => {
      this.store.dispatch(invitationsAction.invitePropertyOwner({ payload: d }));
    });
    this.dialogRef.afterClosed().subscribe((result) => {});
  }

  onResendInvitation(invitationId: string) {
    const options = {
      message: this.getTranslatedString("confirm_resend_invitation"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(invitationsAction.resendInvitation({ invitationId }));
      }
    });
  }

  onParamChange(param: IParameters) {
    this.setParam(param);
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadPendingAccountInvitations({ params: filteredParams }));
  }

  setParam(parameter?: IParameters) {
    this.params.currentPage =
      parameter.currentPage || parameter.currentPage === 0 ? parameter.currentPage : this.params.currentPage;
    this.params.size = parameter.size ?? this.params.size;
    this.params.searchKey = parameter.search ? parameter.search : "";
    this.params.sortBy = parameter.sortBy && parameter.sortByOrder ? parameter.sortBy : this.params.sortBy;
    this.params.sortByOrder =
      parameter.sortBy && parameter.sortByOrder ? parameter.sortByOrder : this.params.sortByOrder;
    this.params.status = parameter.status ? parameter.status : "";
  }
}
