import { Injectable } from "@angular/core";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as PropertyStructureActions from "../actions/property-structure.actions";
import { PropertyStructureService } from "./../../services/property-structure/property-structure.service";

@Injectable()
export class PropertyStructureEffects {
  getPropertyStructure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PropertyStructureActions.getPropertyStructure),
      exhaustMap((action) =>
        this.propertyStructureService.getPropertyStructure(action.id).pipe(
          map((response: any) => PropertyStructureActions.getPropertyStructureSuccess(response)),
          catchError((error) => of(PropertyStructureActions.getPropertyStructureFailure({ error })))
        )
      )
    );
  });

  getPropertyStructureDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PropertyStructureActions.getPropertyStructureDetail),
      exhaustMap((action) =>
        this.propertyStructureService.getPropertyStructureDetail().pipe(
          map((response: any) => PropertyStructureActions.getPropertyStructureDetailSuccess(response)),
          catchError((error) => of(PropertyStructureActions.getPropertyStructureDetailFailure({ error })))
        )
      )
    );
  });

  getSelectedPropertyStructure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PropertyStructureActions.getSelectedPropertyStructure),
      exhaustMap((action) =>
        this.propertyStructureService.getSelectedPropertyStructure().pipe(
          map((response: any) => PropertyStructureActions.getSelectedPropertyStructureSuccess(response)),
          catchError((error) => of(PropertyStructureActions.getSelectedPropertyStructureFailure({ error })))
        )
      )
    );
  });

  savePropertyStructure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PropertyStructureActions.savePropertyStructure),
      exhaustMap((action) =>
        this.propertyStructureService.savePropertyStructure(action.payload).pipe(
          map((response: any) => PropertyStructureActions.savePropertyStructureSuccess(response)),
          catchError((error) => of(PropertyStructureActions.savePropertyStructureFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  savePropertyStructureSuccess$ = this.actions$.pipe(
    ofType<any>(PropertyStructureActions.savePropertyStructureSuccess),
    map((d: any) => {
      this.snackBar.open(this.translate.instant("property_structure_update_success"));
    })
  );

  deletePropertyStructure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PropertyStructureActions.deletePropertyStructure),
      exhaustMap((action) =>
        this.propertyStructureService.deletePropertyStructure().pipe(
          map((response: any) => PropertyStructureActions.deletePropertyStructureSuccess(response)),
          catchError((error) => of(PropertyStructureActions.deletePropertyStructureFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  deletePropertyStructureSuccess$ = this.actions$.pipe(
    ofType<any>(PropertyStructureActions.deletePropertyStructureSuccess),
    map((d: any) => {
      this.snackBar.open(this.translate.instant("property_structure_delete_success"));
    })
  );

  constructor(
    private actions$: Actions,
    private propertyStructureService: PropertyStructureService,
    private snackBar: SnackBarService,
    private translate: TranslateService
  ) {}
}
