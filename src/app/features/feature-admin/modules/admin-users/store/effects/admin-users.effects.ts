import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { AdminUsersService } from "../../services/admin-users.service";
import * as AdminUsersAction from "../actions/admin-users.actions";

@Injectable()
export class AdminUsersEffects {
  constructor(private actions$: Actions, private adminUsersService: AdminUsersService, private store: Store<any>) {}

  loadAllAdminUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminUsersAction.loadAdminUsers),
      exhaustMap((action) =>
        this.adminUsersService.getAllAdminUsers(action.params).pipe(
          map((response: any) => AdminUsersAction.loadAdminUsersSuccess(response)),
          catchError((error) => of(AdminUsersAction.loadAdminUsersFailure({ error })))
        )
      )
    )
  );
}
