import { Injectable } from "@angular/core";
import { SnackBarService, StorageService } from "@core/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { AdminPropertyService } from "../../services/admin-property.service";
import * as AdminPropertyActions from "../actions/admin-property.actions";

@Injectable()
export class PropertyEffects {
  loadPropertyForAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminPropertyActions.loadPropertyForAdmin),
      exhaustMap((action) =>
        this.adminPropertyService.getPropertyListForAdmin(action.params).pipe(
          map((response: any) => AdminPropertyActions.loadPropertyForAdminSuccess(response)),
          catchError((error) => of(AdminPropertyActions.loadPropertyForAdminFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private adminPropertyService: AdminPropertyService,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>,
    private storage: StorageService
  ) {}
}
