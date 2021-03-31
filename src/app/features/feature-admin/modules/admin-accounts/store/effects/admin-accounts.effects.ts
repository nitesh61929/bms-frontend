import { Injectable } from "@angular/core";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { AdminAccountsService } from "../../services/admin-accounts.service";
import * as AdminAccountsActions from "../actions/admin-accounts.actions";

@Injectable()
export class AdminAccountsEffects {
  /**
   * Fetch all the active accounts
   */
  loadActiveAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminAccountsActions.loadActiveAccounts),
      exhaustMap((action) =>
        this.service.getActiveAccounts(action.params).pipe(
          map((response: any) => AdminAccountsActions.loadActiveAccountsSuccess(response)),
          catchError((error) => of(AdminAccountsActions.loadActiveAccountsFailure({ error })))
        )
      )
    )
  );

  loadPendingAccountInvitations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminAccountsActions.loadPendingAccountInvitations),
      exhaustMap((action) =>
        this.service.getPendingAccountInvitations(action.params).pipe(
          map((response: any) => AdminAccountsActions.loadPendingAccountInvitationsSuccess(response)),
          catchError((error) => of(AdminAccountsActions.loadPendingAccountInvitationsFailure({ error })))
        )
      )
    )
  );

  updateInvitationStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminAccountsActions.updateInvitationStatus),
      exhaustMap((action) =>
        this.service.updateInvitationStatus(action.payload).pipe(
          map((response: any) => AdminAccountsActions.updateInvitationStatusSuccess(response)),
          catchError((error) => of(AdminAccountsActions.updateInvitationStatusFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  updateInvitationStatusSuccess = this.actions$.pipe(
    ofType<any>(AdminAccountsActions.updateInvitationStatusSuccess),
    map((invitation: any) => {
      this.snackBar.open(this.translate.instant("invitation_status_updated"));
    })
  );

  getAccountDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminAccountsActions.getAccountDetails),
      exhaustMap((action) =>
        this.service.getAccountDetailsById(action.id).pipe(
          map((response: any) => AdminAccountsActions.getAccountDetailsSuccess(response)),
          catchError((error) => of(AdminAccountsActions.getAccountDetailsFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private service: AdminAccountsService,
    private snackBar: SnackBarService,
    private translate: TranslateService
  ) {}
}
