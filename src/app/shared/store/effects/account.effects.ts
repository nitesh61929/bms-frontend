import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as AccountActions from "../actions/account.actions";
import { AccountService } from "./../../services/account/account.service";

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions, private accountService: AccountService) {}

  getAccountTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.loadAccountType),
      exhaustMap((action) =>
        this.accountService.getAccountTypes().pipe(
          map((response: any) => AccountActions.loadAccountTypeSuccess(response)),
          catchError((error) => of(AccountActions.loadAccountTypeFailure({ error })))
        )
      )
    );
  });
}
