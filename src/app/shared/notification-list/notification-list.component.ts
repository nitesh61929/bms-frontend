import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { StorageKeys } from "@core/enums";
import { Store } from "@ngrx/store";
import { INotification, IPagination } from "@shared/interfaces";
import { IMarkRead } from "@shared/interfaces/mark-read";
import { Observable } from "rxjs";
import { loadNotificationCount, loadNotifications, markAsRead } from "./../store/actions/notifications.actions";

@Component({
  selector: "app-notification-list",
  templateUrl: "./notification-list.component.html",
})
export class NotificationListComponent extends BaseComponent implements OnInit {
  currentUserId: string;
  notificationList$: Observable<INotification[]>;
  notificationCount$: Observable<number>;
  notifications: INotification[] = [];
  pagination$: Observable<IPagination>;
  loading$: Observable<boolean>;

  currentPage: number = 1;
  totalPage: number;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.currentUserId = this.storage.get(StorageKeys.USERID);
    this.listenObservables();
    this.getUnreadNotificationsCount();
  }

  listenObservables() {
    this.notificationList$ = this.store.select((store) => store.sharedModule.notifications.list);
    this.loading$ = this.store.select((store) => store.sharedModule.notifications.loading);
    this.pagination$ = this.store.select((store) => store.sharedModule.notifications.pagination);
    this.notificationList$.subscribe((notifications) => {
      this.notifications = this.notifications.concat(notifications);
    });
    this.pagination$.subscribe((pagination) => {
      this.totalPage = pagination ? pagination.totalPage : 0;
    });
    this.notificationCount$ = this.store.select((store) => store.sharedModule.notifications.count);
  }

  dropdownClicked() {
    this.currentPage = 1;
    this.notifications = [];
    this.fetchUserNotifications();
    this.getUnreadNotificationsCount();
  }

  fetchUserNotifications() {
    const params = {
      currentPage: this.currentPage,
      size: this.storage.get(StorageKeys.PER_PAGE) ?? 10,
    };
    this.store.dispatch(loadNotifications({ id: this.currentUserId, params }));
  }

  getUnreadNotificationsCount() {
    this.store.dispatch(loadNotificationCount({ id: this.currentUserId }));
  }

  onMarkAsRead(notificationId: string) {
    const markReadPayload: IMarkRead = {
      userId: this.currentUserId,
      notificationId,
      markAll: false,
    };
    this.store.dispatch(markAsRead({ payload: markReadPayload }));
  }

  onMarkAllAsRead($event: any) {
    $event.preventDefault();
    const markAllReadPayload: IMarkRead = {
      userId: this.currentUserId,
      markAll: true,
    };
    this.store.dispatch(markAsRead({ payload: markAllReadPayload }));
  }

  onScrollDown() {
    this.currentPage++;
    if (this.currentPage <= this.totalPage && this.totalPage > 1) {
      this.fetchUserNotifications();
    }
  }
}
