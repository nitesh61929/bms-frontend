import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination, IParameters } from "@shared/interfaces";
import { INotices } from "@shared/interfaces/notices";
import * as noticesActions from "@shared/store/actions/notices.actions";
import { loadNotices } from "@shared/store/actions/notices.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AddNoticeComponent } from "../../components/add-notice/add-notice.component";

@Component({
  selector: "app-notices-container",
  templateUrl: "./notices-container.component.html",
})
export class NoticesContainerComponent extends BaseComponent implements OnInit {
  activePropertyId: string;
  noticeList$: Observable<INotices[]>;
  pagination$: Observable<IPagination>;
  dialogRef: MatDialogRef<AddNoticeComponent>;
  destroyed$ = new Subject<boolean>();
  hasNoticeListAccess = AppPermissions.NOTICE_LIST;

  params = {
    currentPage: 1,
    size: this.storage.get(StorageKeys.PER_PAGE),
    sortBy: "id",
    sortByOrder: "desc",
  };

  constructor(
    private store: Store<any>,
    public dialog: MatDialog,
    public addNoticeSuccess$: Actions,
    public deleteNoticeSuccess$: Actions,
    public updateNoticeStatusSuccess$: Actions
  ) {
    super();
    addNoticeSuccess$.pipe(ofType(noticesActions.addNoticeSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      if (this.dialogRef) {
        this.dialogRef.close();
        this.loadNotices();
      }
    });

    updateNoticeStatusSuccess$
      .pipe(ofType(noticesActions.updateNoticeStatusSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.loadNotices();
      });

    deleteNoticeSuccess$.pipe(ofType(noticesActions.deleteNoticeSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.loadNotices();
    });
  }

  ngOnInit(): void {
    this.activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
    this.listenObservables();
    this.loadNotices();
  }

  listenObservables() {
    this.noticeList$ = this.store.select((store) => store.sharedModule.notices.list);
    this.pagination$ = this.store.select((store) => store.sharedModule.notices.pagination);
  }

  loadNotices() {
    const filteredParams = Utils.getFilteredParams(this.params);
    this.store.dispatch(loadNotices({ params: filteredParams }));
  }

  onParamChange(param: IParameters) {
    const filteredParams = Utils.getFilteredParams(this.getParam(param));
    this.store.dispatch(loadNotices({ params: filteredParams }));
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
      published: parameter.published ? parameter.published : "",
      startDate: parameter.startDate ? parameter.startDate : "",
      endDate: parameter.endDate ? parameter.endDate : "",
    };
  }

  showAddNoticeModal() {
    this.dialogRef = this.dialog.open(AddNoticeComponent, {
      id: "addNotice",
      data: {},
      panelClass: "dialog-contains-form",
      disableClose: true,
    });
    this.dialogRef.componentInstance.addNoticeClicked.subscribe((d) => {
      this.store.dispatch(noticesActions.addNotice({ payload: d }));
    });
    this.dialogRef.afterClosed().subscribe((result) => {});
    this.dialogRef.componentInstance.dialogCloseClicked.subscribe((d) => {
      this.dialogRef.close();
    });
  }
}
