import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { IUnit } from "@shared/interfaces/unit";
import * as invitationsAction from "@shared/store/actions/invitations.actions";
import {
  cancelTenantInvitationSuccess,
  resendTenantInvitationSuccess,
} from "@shared/store/actions/invitations.actions";
import { loadUnits } from "@shared/store/actions/unit.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IResidence } from "../../interfaces/residence";
import { loadInvitedResidences } from "../../store/actions/residence.actions";

@Component({
  selector: "app-invited-residences-container",
  templateUrl: "./invited-residences-container.component.html",
})
export class InvitedResidencesContainerComponent extends BaseComponent implements OnInit {
  invitedResidences$: Observable<IResidence[]>;
  unitList$: Observable<IUnit[]>;
  pagination$: Observable<IPagination>;
  filterParams: IParameters;
  destroyed$ = new Subject<boolean>();

  params = {
    currentPage: 1,
    size: 9999,
    sortBy: "id",
    sortByOrder: "desc",
  };

  constructor(
    private store: Store<any>,
    resendTenantInvitationSuccess$: Actions,
    cancelTenantInvitationSuccess$: Actions
  ) {
    super();
    resendTenantInvitationSuccess$
      .pipe(ofType(resendTenantInvitationSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.fetchInvitedResidenceList();
      });

    cancelTenantInvitationSuccess$
      .pipe(ofType(cancelTenantInvitationSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.fetchInvitedResidenceList();
      });
  }

  ngOnInit(): void {
    this.invitedResidences$ = this.store.select((store) => store.residence.list);
    this.unitList$ = this.store.select((store) => store.sharedModule.unit.unitList);
    this.pagination$ = this.store.select((store) => store.residence.pagination);
    this.loadUnits();
    this.fetchInvitedResidenceList();
  }

  fetchInvitedResidenceList() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadInvitedResidences({ params: filteredParams }));
  }

  loadUnits() {
    const activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadUnits({ payload: {}, params: filteredParams }));
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadInvitedResidences({ params: filteredParams }));
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
      status: parameter.status || parameter.status === "" ? parameter.status : "",
      unitName: parameter.unitName || parameter.unitName === "" ? parameter.unitName : "",
    };
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
        this.store.dispatch(invitationsAction.resendTenantInvitation({ invitationId }));
      }
    });
  }

  onCancelInvitation(invitationId: string) {
    const options = {
      message: this.getTranslatedString("confirm_cancel_invitation"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(invitationsAction.cancelTenantInvitation({ invitationId }));
      }
    });
  }
}
