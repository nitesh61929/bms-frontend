import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { ReportsService } from "../services/reports.service";
import * as ReportsActions from "./reports.actions";

@Injectable()
export class ReportsEffects {
  constructor(private actions$: Actions, private reportsService: ReportsService) {}
  loadPanicReports$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReportsActions.loadPanicReports),
      exhaustMap((action) =>
        this.reportsService.getPanicReports({ propertyId: action.propertyId, ...action.params }).pipe(
          map((response: any) => ReportsActions.loadPanicReportsSuccess(response)),
          catchError((error) => of(ReportsActions.loadPanicReportsFailure({ error })))
        )
      )
    );
  });

  loadGatepassReports$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReportsActions.loadGatepassReports),
      exhaustMap((action) =>
        this.reportsService.getGatepassReports(action.params).pipe(
          map((response: any) => ReportsActions.loadGatepassReportsSuccess(response)),
          catchError((error) => of(ReportsActions.loadGatepassReportsFailure({ error })))
        )
      )
    );
  });

  getVisitPurposeList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReportsActions.getVisitPurposeList),
      exhaustMap((action) =>
        this.reportsService.getVisitPurposeList().pipe(
          map((response: any) => ReportsActions.getVisitPurposeListSuccess(response)),
          catchError((error) => of(ReportsActions.getVisitPurposeListFailure({ error })))
        )
      )
    );
  });

  getGatekeeperList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReportsActions.getGatekeeperList),
      exhaustMap((action) =>
        this.reportsService.getGatekeeperList().pipe(
          map((response: any) => ReportsActions.getGatekeeperListSuccess(response)),
          catchError((error) => of(ReportsActions.getGatekeeperListFailure({ error })))
        )
      )
    );
  });
}
