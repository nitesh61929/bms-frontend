import { Injectable } from "@angular/core";
import { StorageKeys } from "@core/enums";
import { StorageService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as NotificationsActions from "../actions/notifications.actions";
import { loadNotificationCount, loadNotifications } from "../actions/notifications.actions";
import { NotificationsService } from "./../../services/notifications/notifications.service";

@Injectable()
export class NotificationsEffects {
  /**
   * Fetch all the notifications.
   */
  loadnotifications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotificationsActions.loadNotifications),
      exhaustMap((action) =>
        this.notificationsService.getNotificationsList(action.id, action.params).pipe(
          map((response: any) => NotificationsActions.loadNotificationsSuccess(response)),
          catchError((error) => of(NotificationsActions.loadNotificationsFailure({ error })))
        )
      )
    )
  );

  /**
   * Fetch notification count.
   */
  loadnotificationCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotificationsActions.loadNotificationCount),
      exhaustMap((action) =>
        this.notificationsService.getNotificationCount(action.id).pipe(
          map((response: any) => NotificationsActions.loadNotificationCountSuccess(response)),
          catchError((error) => of(NotificationsActions.loadNotificationCountFailure({ error })))
        )
      )
    )
  );

  /**
   * Mark one/all notification as read
   */
  markAsRead$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotificationsActions.markAsRead),
      exhaustMap((action: any) =>
        this.notificationsService.markAsRead(action.payload).pipe(
          map((response: any) => NotificationsActions.markAsReadSuccess(response)),
          catchError((error) => of(NotificationsActions.markAsReadFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  markAsReadSuccess = this.actions$.pipe(
    ofType<any>(NotificationsActions.markAsReadSuccess),
    map(() => {
      const userId = this.storage.get(StorageKeys.USERID);
      this.store.dispatch(loadNotificationCount({ id: userId }));
      this.store.dispatch(loadNotifications({ id: userId, params: null }));
    })
  );

  constructor(
    private actions$: Actions,
    private notificationsService: NotificationsService,
    private store: Store<any>,
    private storage: StorageService
  ) {}
}
