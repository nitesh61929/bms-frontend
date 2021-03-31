import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SnackBarService } from "@core/services/snack-bar/snack-bar.service";
import { StorageService } from "@core/services/storage";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { HelpdeskCategoryService } from "../../services/helpdesk-category.service";
import * as HelpdeskCategoryActions from "../actions/helpdesk-category.actions";

@Injectable()
export class HelpDeskCategoryEffects {
  getHelpdeskCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpdeskCategoryActions.getHelpdeskCategories),
      exhaustMap((action) =>
        this.helpdeskCategoryService.getHelpdeskCategories(action.params).pipe(
          map((response: any) => HelpdeskCategoryActions.getHelpdeskCategoriesSuccess(response)),
          catchError((error) => of(HelpdeskCategoryActions.getHelpdeskCategoriesFailure({ error })))
        )
      )
    );
  });

  addNotice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpdeskCategoryActions.addHelpdeskCategory),
      exhaustMap((action) =>
        this.helpdeskCategoryService.addHelpdeskCategory(action.payload).pipe(
          map((response: any) => HelpdeskCategoryActions.addHelpdeskCategorySuccess(response)),
          catchError((error) => of(HelpdeskCategoryActions.addHelpdeskCategoryFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  addHelpdeskCategorySuccess = this.actions$.pipe(
    ofType<any>(HelpdeskCategoryActions.addHelpdeskCategorySuccess),
    map((notice: any) => {
      this.snackBar.open(this.translate.instant("helpdesk_category_add_success"));
    })
  );

  deleteHelpdeskCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HelpdeskCategoryActions.deleteHelpdeskCategory),
      exhaustMap((action) =>
        this.helpdeskCategoryService.deleteHelpdeskCategory(action.id).pipe(
          map((response: any) => HelpdeskCategoryActions.deleteHelpdeskCategorySuccess(response)),
          catchError((error) => of(HelpdeskCategoryActions.deleteHelpdeskCategoryFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  deleteHelpdeskCategorySuccess = this.actions$.pipe(
    ofType<any>(HelpdeskCategoryActions.deleteHelpdeskCategorySuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("helpdesk_category_delete_success"));
    })
  );

  updateHelpdeskCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpdeskCategoryActions.updateHelpdeskCategory),
      exhaustMap((action) =>
        this.helpdeskCategoryService.updateHelpdeskCategory(action.id, action.payload).pipe(
          map((response: any) => HelpdeskCategoryActions.updateHelpdeskCategorySuccess(response)),
          catchError((error) => of(HelpdeskCategoryActions.updateHelpdeskCategoryFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  updateHelpdeskCategorySuccess = this.actions$.pipe(
    ofType<any>(HelpdeskCategoryActions.updateHelpdeskCategorySuccess),
    map((notice: any) => {
      this.snackBar.open(this.translate.instant("helpdesk_category_update_success"));
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>,
    private helpdeskCategoryService: HelpdeskCategoryService,
    private storage: StorageService
  ) {}
}
