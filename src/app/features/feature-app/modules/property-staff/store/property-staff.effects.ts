import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StaffsService } from "@shared/services";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as StaffsActions from "./property-staff.actions";

@Injectable()
export class PropertyStaffEffects {
  constructor(private actions$: Actions, private staffsService: StaffsService) {}

  /**
   * Fetch all the staffs of a property.
   */
  loadPropertyStaffs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StaffsActions.loadPropertyStaffs),
      exhaustMap((action) =>
        this.staffsService.getPropertyStaffs(action.params).pipe(
          map((response: any) => StaffsActions.loadPropertyStaffsSuccess(response)),
          catchError((error) => of(StaffsActions.loadPropertyStaffsFailure({ error })))
        )
      )
    )
  );
}
