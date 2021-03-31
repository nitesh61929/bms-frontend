import { Injectable } from "@angular/core";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { HelpAndSupportService } from "../../services/help-and-support.service";
import * as HelpAndSupportActions from "../actions/help-and-support.actions";

@Injectable()
export class HelpAndSupportEffects {
  constructor(
    private actions$: Actions,
    private helpAndSupportService: HelpAndSupportService,
    private snackBar: SnackBarService,
    private translate: TranslateService
  ) {}

  createTicket$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpAndSupportActions.createHelpAndSupport),
      exhaustMap((action) =>
        this.helpAndSupportService.createTicket(action.payload).pipe(
          map((response: any) => HelpAndSupportActions.createHelpAndSupportSuccess(response)),
          catchError((error) => of(HelpAndSupportActions.createHelpAndSupportFailure({ error })))
        )
      )
    );
  });
}
