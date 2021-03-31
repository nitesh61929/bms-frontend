import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SnackBarService, StorageService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as NoticesActions from "../actions/notices.actions";
import { NoticesService } from "./../../services/notices/notices.service";

@Injectable()
export class NoticesEffects {
  loadNotices$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NoticesActions.loadNotices),
      exhaustMap((action) =>
        this.noticeService.getNotices(action.params).pipe(
          map((response: any) => NoticesActions.loadNoticesSuccess(response)),
          catchError((error) => of(NoticesActions.loadNoticesFailure({ error })))
        )
      )
    );
  });

  addNotice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NoticesActions.addNotice),
      exhaustMap((action) =>
        this.noticeService.addNotice(action.payload).pipe(
          map((response: any) => NoticesActions.addNoticeSuccess(response)),
          catchError((error) => of(NoticesActions.addNoticeFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  addNoticeSuccess = this.actions$.pipe(
    ofType<any>(NoticesActions.addNoticeSuccess),
    map((notice: any) => {
      this.snackBar.open(this.translate.instant("notice_add_success"));
    })
  );

  deleteNotice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoticesActions.deleteNotice),
      exhaustMap((action) =>
        this.noticeService.deleteNotice(action.id).pipe(
          map((response: any) => NoticesActions.deleteNoticeSuccess(response)),
          catchError((error) => of(NoticesActions.deleteNoticeFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  deleteNoticeSuccess = this.actions$.pipe(
    ofType<any>(NoticesActions.deleteNoticeSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("notice_delete_success"));
    })
  );

  updateNoticeStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoticesActions.updateNoticeStatus),
      exhaustMap((action) =>
        this.noticeService.updateNoticeStatus(action.id, action.params).pipe(
          map((response: any) => NoticesActions.updateNoticeStatusSuccess(response)),
          catchError((error) => of(NoticesActions.updateNoticeStatusFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateNoticeStatusSuccess = this.actions$.pipe(
    ofType<any>(NoticesActions.updateNoticeStatusSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("status_update_success"));
    })
  );

  updateNotice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NoticesActions.updateNotice),
      exhaustMap((action) =>
        this.noticeService.updateNotice(action.id, action.payload).pipe(
          map((response: any) => NoticesActions.updateNoticeSuccess(response)),
          catchError((error) => of(NoticesActions.updateNoticeFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  updateNoticeSuccess = this.actions$.pipe(
    ofType<any>(NoticesActions.updateNoticeSuccess),
    map((notice: any) => {
      this.snackBar.open(this.translate.instant("notice_update_success"));
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>,
    private noticeService: NoticesService,
    private storage: StorageService
  ) {}
}
