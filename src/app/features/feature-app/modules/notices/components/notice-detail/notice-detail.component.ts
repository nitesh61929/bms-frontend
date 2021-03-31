import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { INotices } from "@shared/interfaces/notices";
import { deleteNotice, loadNotices, updateNoticeStatus } from "@shared/store/actions/notices.actions";

@Component({
  selector: "app-notice-detail",
  templateUrl: "./notice-detail.component.html",
})
export class NoticeDetailComponent extends BaseComponent implements OnInit {
  @Input() noticeDetail: INotices;
  @Output() updateNoticeClicked: EventEmitter<null> = new EventEmitter<null>();
  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {}

  deleteNotice(noticeId: string) {
    const options = {
      message: this.getTranslatedString("confirm_delete_notice"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(deleteNotice({ id: noticeId }));
      }
    });
  }

  updateStatus(noticeId: string, event: any) {
    const params = {
      published: event.checked,
    };

    const options = {
      message: this.getTranslatedString("confirm_status_change"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(updateNoticeStatus({ id: noticeId, params }));
      } else {
        const propertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
        this.store.dispatch(loadNotices({}));
      }
    });
  }

  updateNotice() {
    this.updateNoticeClicked.emit();
  }
}
