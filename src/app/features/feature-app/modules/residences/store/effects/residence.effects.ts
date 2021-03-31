import { Injectable } from "@angular/core";
import { SnackBarService, StorageService } from "@core/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as ResidenceActions from "../actions//residence.actions";
import { ResidencesService } from "./../../services/residence.service";

@Injectable()
export class ResidencesEffects {
  loadActiveResidences$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ResidenceActions.loadActiveResidences),
      exhaustMap((action) =>
        this.residencesService.getActiveResidences(action.params).pipe(
          map((response: any) => ResidenceActions.loadActiveResidencesSuccess(response)),
          catchError((error) => of(ResidenceActions.loadActiveResidencesFailure({ error })))
        )
      )
    )
  );

  loadInvitedResidences$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ResidenceActions.loadInvitedResidences),
      exhaustMap((action) =>
        this.residencesService.getInvitedResidences(action.params).pipe(
          map((response: any) => ResidenceActions.loadInvitedResidencesSuccess(response)),
          catchError((error) => of(ResidenceActions.loadInvitedResidencesFailure({ error })))
        )
      )
    )
  );

  getResidenceDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ResidenceActions.getResidenceDetail),
      exhaustMap((action) =>
        this.residencesService.getResidenceDetail(action.residenceId, action.unitId).pipe(
          map((response: any) => ResidenceActions.getResidenceDetailSuccess(response)),
          catchError((error) => of(ResidenceActions.getResidenceDetailFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private residencesService: ResidencesService,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>,
    private storage: StorageService
  ) {}
}
