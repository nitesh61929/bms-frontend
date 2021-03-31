import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { HelpdeskService } from "@shared/services/helpdesk/helpdesk.service";
import { HelpdeskCategoryService } from "app/features/feature-app/modules/helpdesk-category/services/helpdesk-category.service";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as HelpdeskActions from "../actions/helpdesk.actions";
import { SnackBarService } from "./../../../core/services/snack-bar/snack-bar.service";
import { StorageService } from "./../../../core/services/storage/storage.service";

@Injectable()
export class HelpDeskEffects {
  loadHelpdesk$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpdeskActions.loadHelpdesk),
      exhaustMap((action) =>
        this.helpdeskService.getHelpDeskList(action.params).pipe(
          map((response: any) => HelpdeskActions.loadHelpdeskSuccess(response)),
          catchError((error) => of(HelpdeskActions.loadHelpdeskFailure({ error })))
        )
      )
    );
  });

  getHelpdeskDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpdeskActions.getHelpdeskDetail),
      exhaustMap((action) =>
        this.helpdeskService.getHelpdeskDetail(action.id).pipe(
          map((response: any) => HelpdeskActions.getHelpdeskDetailSuccess(response)),
          catchError((error) => of(HelpdeskActions.getHelpdeskDetailFailure({ error })))
        )
      )
    );
  });

  getHelpdeskComments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpdeskActions.getHelpdeskComments),
      exhaustMap((action) =>
        this.helpdeskService.getHelpdeskComments(action.id, action.params).pipe(
          map((response: any) => HelpdeskActions.getHelpdeskCommentsSuccess(response)),
          catchError((error) => of(HelpdeskActions.getHelpdeskCommentsFailure({ error })))
        )
      )
    );
  });

  postComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpdeskActions.postComment),
      exhaustMap((action) =>
        this.helpdeskService.postComment(action.helpdeskId, action.payload).pipe(
          map((response: any) => HelpdeskActions.postCommentSuccess(response)),
          catchError((error) => of(HelpdeskActions.postCommentFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  postCommentSuccess = this.actions$.pipe(
    ofType<any>(HelpdeskActions.postCommentSuccess),
    map((notice: any) => {
      this.snackBar.open(this.translate.instant("comment_posted_success"));
    })
  );

  updateHelpdeskStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HelpdeskActions.updateHelpdeskStatus),
      exhaustMap((action) =>
        this.helpdeskService.updateHelpdeskStatus(action.id, action.params).pipe(
          map((response: any) => HelpdeskActions.updateHelpdeskStatusSuccess(response)),
          catchError((error) => of(HelpdeskActions.updateHelpdeskStatusFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateHelpdeskStatusSuccess = this.actions$.pipe(
    ofType<any>(HelpdeskActions.updateHelpdeskStatusSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("status_update_success"));
    })
  );

  updateHelpdeskDueDate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HelpdeskActions.updateHelpdeskDueDate),
      exhaustMap((action) =>
        this.helpdeskService.updateHelpdeskDueDate(action.id, action.params).pipe(
          map((response: any) => HelpdeskActions.updateHelpdeskDueDateSuccess(response)),
          catchError((error) => of(HelpdeskActions.updateHelpdeskDueDateFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateHelpdeskDueDateSuccess = this.actions$.pipe(
    ofType<any>(HelpdeskActions.updateHelpdeskDueDateSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("due_date_update_success"));
    })
  );

  updateHelpdeskAssignee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HelpdeskActions.updateHelpdeskAssignee),
      exhaustMap((action) =>
        this.helpdeskService.updateHelpdeskAssignee(action.id, action.params).pipe(
          map((response: any) => HelpdeskActions.updateHelpdeskAssigneeSuccess(response)),
          catchError((error) => of(HelpdeskActions.updateHelpdeskAssigneeFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateHelpdeskAssigneeSuccess = this.actions$.pipe(
    ofType<any>(HelpdeskActions.updateHelpdeskAssigneeSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("assignee_update_success"));
    })
  );

  getPossibleAssignees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpdeskActions.getPossibleAssignees),
      exhaustMap((action) =>
        this.helpdeskService.getPossibleAssignees(action.params).pipe(
          map((response: any) => HelpdeskActions.getPossibleAssigneesSuccess(response)),
          catchError((error) => of(HelpdeskActions.getPossibleAssigneesFailure({ error })))
        )
      )
    );
  });

  getHelpdeskCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpdeskActions.loadHelpdeskCategories),
      exhaustMap((action) =>
        this.helpdeskCategoryService.getHelpdeskCategories(action.params).pipe(
          map((response: any) => HelpdeskActions.loadHelpdeskCategoriesSuccess(response)),
          catchError((error) => of(HelpdeskActions.loadHelpdeskCategoriesFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private router: Router,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>,
    private helpdeskService: HelpdeskService,
    private helpdeskCategoryService: HelpdeskCategoryService,
    private storage: StorageService
  ) {}
}
