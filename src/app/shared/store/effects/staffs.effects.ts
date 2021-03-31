import { Injectable } from "@angular/core";
import { StorageService } from "@core/services";
import { SnackBarService } from "@core/services/snack-bar";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as StaffsActions from "../actions/staffs.actions";
import { StaffsService } from "./../../services/staffs/staffs.service";

@Injectable()
export class StaffsEffects {
  /**
   * Fetch all the staffs of a owner.
   */
  loadStaffs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StaffsActions.loadStaffs),
      exhaustMap((action) =>
        this.staffsService.getAllStaffs(action.params).pipe(
          map((response: any) => StaffsActions.loadStaffsSuccess(response)),
          catchError((error) => of(StaffsActions.loadStaffsFailure({ error })))
        )
      )
    )
  );

  addStaff$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StaffsActions.addStaff),
      exhaustMap((action) =>
        this.staffsService.addStaff(action.payload).pipe(
          map((response: any) => StaffsActions.addStaffSuccess(response)),
          catchError((error) => of(StaffsActions.addStaffFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  addStaffSuccess = this.actions$.pipe(
    ofType<any>(StaffsActions.addStaffSuccess),
    map((staff: any) => {
      this.snackBar.open(this.translate.instant("staff_add_success"));
      this.store.dispatch(StaffsActions.loadStaffs({ params: null }));
    })
  );

  addStaffAsAdmin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StaffsActions.addStaffAsAdmin),
      exhaustMap((action) =>
        this.staffsService.addStaffAsAdmin(action.payload).pipe(
          map((response: any) => StaffsActions.addStaffAsAdminSuccess(response)),
          catchError((error) => of(StaffsActions.addStaffAsAdminFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  addStaffAsAdminSuccess = this.actions$.pipe(
    ofType<any>(StaffsActions.addStaffAsAdminSuccess),
    map((staff: any) => {
      this.snackBar.open(this.translate.instant(staff.message));
      this.store.dispatch(StaffsActions.loadStaffs({ params: null }));
    })
  );

  searchPropertyStaffs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StaffsActions.searchPropertyStaffs),
      exhaustMap(() =>
        this.staffsService.searchPropertyStaff().pipe(
          map((response: any) => StaffsActions.searchPropertyStaffsSuccess(response)),
          catchError((error) => of(StaffsActions.searchPropertyStaffsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private staffsService: StaffsService,
    private translate: TranslateService,
    private snackBar: SnackBarService,
    private store: Store<any>,
    private storage: StorageService
  ) {}
}
