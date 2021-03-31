import { Injectable } from "@angular/core";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { PropertyOwnerService } from "../../services/property-owner/property-owner.services";
import * as PropertyOwnerActions from "../actions/property-owner.actions";

@Injectable()
export class PropertyOwnerEffects {
  getPropertyOwnerDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyOwnerActions.getPropertyOwnerDetail),
      exhaustMap((action) =>
        this.propertyOwnerService.getPropertyOwnerDetail(action.id).pipe(
          map((response: any) => PropertyOwnerActions.getPropertyOwnerDetailSuccess(response)),
          catchError((error) => of(PropertyOwnerActions.getPropertyOwnerDetailFailure({ error })))
        )
      )
    )
  );

  getAccountDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyOwnerActions.getAccountDetail),
      exhaustMap((action) =>
        this.propertyOwnerService.getAccountDetail(action.id).pipe(
          map((response: any) => PropertyOwnerActions.getAccountDetailSuccess(response)),
          catchError((error) => of(PropertyOwnerActions.getAccountDetailFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private propertyOwnerService: PropertyOwnerService,
    private snackBar: SnackBarService,
    private translate: TranslateService
  ) {}
}
