import { Component, Input, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { INotices } from "@shared/interfaces/notices";
import * as noticesActions from "@shared/store/actions/notices.actions";
import { loadNotices } from "@shared/store/actions/notices.actions";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AddNoticeComponent } from "../../components/add-notice/add-notice.component";

@Component({
  selector: "app-notice-detail-container",
  templateUrl: "./notice-detail-container.component.html",
})
export class NoticeDetailContainerComponent extends BaseComponent implements OnInit {
  @Input() notice: INotices;
  dialogRef: MatDialogRef<AddNoticeComponent>;
  destroyed$ = new Subject<boolean>();

  constructor(private store: Store<any>, public dialog: MatDialog, public updateNoticeSuccess$: Actions) {
    super();
    updateNoticeSuccess$.pipe(ofType(noticesActions.updateNoticeSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      if (this.dialogRef) {
        this.dialogRef.close();
        const propertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
        this.store.dispatch(loadNotices({}));
      }
    });
  }

  ngOnInit(): void {}

  showUpdateNoticeModal() {
    this.dialogRef = this.dialog.open(AddNoticeComponent, {
      id: "updateNotice",
      data: {
        notice: this.notice,
      },
      panelClass: "dialog-contains-form",
      disableClose: true,
    });

    this.dialogRef.componentInstance.updateNoticeClicked.subscribe((d) => {
      this.store.dispatch(noticesActions.updateNotice({ id: this.notice.id, payload: d }));
    });
    this.dialogRef.afterClosed().subscribe((result) => {});
    this.dialogRef.componentInstance.dialogCloseClicked.subscribe((d) => {
      this.dialogRef.close();
    });
  }
}
