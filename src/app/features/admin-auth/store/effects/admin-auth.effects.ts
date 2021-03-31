import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as AdminAuthActions from "../actions/admin-auth.actions";
import { AdminAuthService } from "./../../../../core/services/admin-auth/admin-auth.service";

@Injectable()
export class AdminAuthEffects {
  constructor(
    private actions$: Actions,
    private adminAuthService: AdminAuthService,
    private router: Router,
    private snackBar: SnackBarService,
    private translate: TranslateService
  ) {}

  adminLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminAuthActions.adminLogin),
      exhaustMap((action) =>
        this.adminAuthService.adminLogin(action.payload).pipe(
          map((response: any) => AdminAuthActions.adminLoginSuccess(response)),
          catchError((error) => of(AdminAuthActions.adminLoginFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  adminLoginSuccess = this.actions$.pipe(
    ofType<any>(AdminAuthActions.adminLoginSuccess),
    map((res: any) => {
      this.router.navigateByUrl(AppRoutes.ACTIVE_ACCOUNTS);
      this.snackBar.open(this.translate.instant("logged_in_success"));
    })
  );
}
