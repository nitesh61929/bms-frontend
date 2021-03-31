import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { AuthService, SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { clearReduxState } from "app/store/actions/app.actions";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as AuthActions from "../actions/auth.actions";
import { loadOwnerOnLogin } from "./../../../../shared/store/actions/property.actions";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>
  ) {}

  verifyMobileNumber$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.verifyMobileNumber),
      exhaustMap((action) =>
        this.authService.verifyMobileNumber(action.payload).pipe(
          map((response: any) => AuthActions.verifyMobileNumberSuccess(response)),
          catchError((error) => of(AuthActions.verifyMobileNumberFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  verifyMobileNumberSuccess = this.actions$.pipe(
    ofType<any>(AuthActions.verifyMobileNumberSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("snackbar_messages.otp_sent"));
    })
  );

  verifyOTP$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.verifyOTP),
      exhaustMap((action) =>
        this.authService.verifyOtp(action.payload).pipe(
          map((response: any) => AuthActions.verifyOTPSuccess(response)),
          catchError((error) => of(AuthActions.verifyOTPFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  verifyOTPSuccess = this.actions$.pipe(
    ofType<any>(AuthActions.verifyOTPSuccess),
    map((res: any) => {
      this.router.navigateByUrl(AppRoutes.ON_BOARD_OWNER_TYPE);
      this.snackBar.open(this.translate.instant("verify_otp_success"));
    })
  );

  verifyInvitation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.verifyInvitation),
      exhaustMap((action) =>
        this.authService.verifyInvitation(action.payload).pipe(
          map((response: any) => AuthActions.verifyInvitationSuccess(response)),
          catchError((error) => of(AuthActions.verifyInvitationFailure({ error })))
        )
      )
    );
  });

  registerMobileNumber$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.registerMobileNumber),
      exhaustMap((action) =>
        this.authService.registerMobileNumber(action.payload).pipe(
          map((response: any) => AuthActions.registerMobileNumberSuccess(response)),
          catchError((error) => of(AuthActions.registerMobileNumberFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  registerMobileNumberSuccess = this.actions$.pipe(
    ofType<any>(AuthActions.registerMobileNumberSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("snackbar_messages.otp_sent"));
    })
  );

  loginWithOTP$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginWithOTP),
      exhaustMap((action) =>
        this.authService.loginWithOtp(action.payload).pipe(
          map((response: any) => {
            return AuthActions.loginWithOTPSuccess(response.body.data);
          }),
          catchError((error) => of(AuthActions.loginWithOTPFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  loginWithOTPSuccess = this.actions$.pipe(
    ofType<any>(AuthActions.loginWithOTPSuccess),
    map((res: any) => {
      this.store.dispatch(loadOwnerOnLogin({}));
      this.snackBar.open(this.translate.instant("logged_in_success"));
    })
  );

  /**
   * Logout the user.
   */
  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logoutUser),
      exhaustMap((action) =>
        this.authService.logoutUser().pipe(
          map((response: any) => AuthActions.logoutUserSuccess(response)),
          catchError((error) => of(AuthActions.logoutUserFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  logoutUserSuccess$ = this.actions$.pipe(
    ofType<any>(AuthActions.logoutUserSuccess),
    map((res: any) => {
      this.store.dispatch(new clearReduxState());
      // this.store.dispatch(loadOwnerOnLogin({}));
      // this.snackBar.open(this.translate.instant("logged_in_success"));
    })
  );
}
