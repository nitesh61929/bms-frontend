import { Injectable } from "@angular/core";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { AdminSettingsService } from "../../services/admin-settings/admin-settings.service";
import * as AdminSettingsActions from "../actions/admin-settings.actions";

@Injectable()
export class AdminSettingsEffects {
  addOrUpdatePolicy$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminSettingsActions.addOrUpdatePolicy),
      exhaustMap((action) =>
        this.service.addOrUpdatePolicy(action.payload).pipe(
          map((response: any) => AdminSettingsActions.addOrUpdatePolicySuccess(response)),
          catchError((error) => of(AdminSettingsActions.addOrUpdatePolicyFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  addOrUpdatePolicySuccess = this.actions$.pipe(
    ofType<any>(AdminSettingsActions.addOrUpdatePolicySuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("common.save_success"));
    })
  );

  getPrivacyPolicy$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminSettingsActions.getPrivacyPolicy),
      exhaustMap((action) =>
        this.service.getPrivacyPolicy().pipe(
          map((response: any) => AdminSettingsActions.getPrivacyPolicySuccess(response)),
          catchError((error) => of(AdminSettingsActions.getPrivacyPolicyFailure({ error })))
        )
      )
    );
  });

  getTermsAndConditions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminSettingsActions.getTermsAndConditions),
      exhaustMap((action) =>
        this.service.getTermsAndConditions().pipe(
          map((response: any) => AdminSettingsActions.getTermsAndConditionsSuccess(response)),
          catchError((error) => of(AdminSettingsActions.getTermsAndConditionsFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private service: AdminSettingsService,
    private snackBar: SnackBarService,
    private translate: TranslateService
  ) {}
}
