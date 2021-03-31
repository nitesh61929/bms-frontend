import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "@core/enums";
import { AuthService, SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { IUser } from "../../interfaces/user/user";
import { UsersService } from "../../services";
import * as UserActions from "../actions/users.actions";

@Injectable()
export class UsersEffects {
  /**
   * Fetch all the users.
   */
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      exhaustMap((action) =>
        this.service.getUsersList(action.params).pipe(
          map((response: any) => UserActions.loadUsersSuccess(response)),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  /**
   * Fetch user details by provided user id.
   */
  getUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserById),
      exhaustMap((action) =>
        this.service.getUserById(action.id).pipe(
          map((response: any) => UserActions.getUserByIdSuccess(response)),
          catchError((error) => of(UserActions.getUserByIdFailure({ error })))
        )
      )
    )
  );

  /**
   * Create new user.
   */
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createNewUser),
      exhaustMap((action) =>
        this.service.createNewUser(action.payload).pipe(
          map((response: any) => UserActions.createNewUserSuccess(response.data)),
          catchError((error) => of(UserActions.createNewUsersFailure({ error })))
        )
      )
    )
  );

  /**
   * Update the user details.
   */
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      exhaustMap((action) =>
        this.service.updateUser(action.payload).pipe(
          map((response: any) => UserActions.updateUserSuccess(response)),
          catchError((error) => of(UserActions.updateUserFailure({ error })))
        )
      )
    )
  );

  /**
   * Delete the user.
   */
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      exhaustMap((action) =>
        this.service.deleteUser(action.id).pipe(
          map((response: any) => UserActions.deleteUserSuccess(response)),
          catchError((error) => of(UserActions.deleteUserFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  createNewUserSuccess = this.actions$.pipe(
    ofType<any>(UserActions.createNewUserSuccess),
    map((user: IUser) => {
      this.router.navigateByUrl(AppRoutes.USERS);
      this.snackBar.open(this.translate.instant("user_add_success"));
    })
  );

  @Effect({ dispatch: false })
  updateUserSuccess = this.actions$.pipe(
    ofType<any>(UserActions.updateUserSuccess),
    map((userData: any) => {
      this.router.navigateByUrl(`${AppRoutes.USERS}/${userData.data.id}`);
      this.snackBar.open(this.translate.instant("user_update_success"));
    })
  );

  @Effect({ dispatch: false })
  deleteUserSuccess = this.actions$.pipe(
    ofType<any>(UserActions.deleteUserSuccess),
    map(({ payload }) => {
      this.router.navigateByUrl(AppRoutes.USERS);

      this.store.dispatch(UserActions.loadUsers(null));
      this.snackBar.open(this.translate.instant("user_delete_success"));
    })
  );

  @Effect({ dispatch: false })
  setFilterParameters = this.actions$.pipe(
    ofType<any>(UserActions.setFilterParameters),
    map((res) => {
      this.store.dispatch(UserActions.loadUsers({ params: res.params }));
    })
  );

  updateUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateProfile),
      exhaustMap((action) =>
        this.service.updateUser(action.payload).pipe(
          map((response: any) => UserActions.updateProfileSuccess(response)),
          catchError((error) => of(UserActions.updateProfileFailure({ error })))
        )
      )
    )
  );

  createUpdatePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUpdatePassword),
      exhaustMap((action) =>
        this.service.createUpdatePassword(action.payload).pipe(
          map((response: any) => UserActions.createUpdatePasswordSuccess(response)),
          catchError((error) => of(UserActions.createUpdatePasswordFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateProfileSuccess = this.actions$.pipe(
    ofType<any>(UserActions.updateProfileSuccess),
    map(({ data }: any) => {
      this.authService.setUserToStorage(data);

      this.router.navigateByUrl(AppRoutes.PROFILE_PAGE);
      this.snackBar.open(this.translate.instant("mod_profile.update_profile_success"));
    })
  );

  /**
   * Fetch all the users.
   */
  getAllRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getAllRoles),
      exhaustMap((action) =>
        this.service.getAllRoles(action.params).pipe(
          map((response: any) => UserActions.getAllRolesSuccess(response)),
          catchError((error) => of(UserActions.getAllRolesFailure({ error })))
        )
      )
    )
  );

  getUsersByNameOrMobile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsersByNameOrMobile),
      exhaustMap((action) =>
        this.service.getUsersByNameOrMobile(action.params).pipe(
          map((response: any) => UserActions.getUsersByNameOrMobileSuccess(response)),
          catchError((error) => of(UserActions.getUsersByNameOrMobileFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: UsersService,
    private router: Router,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>,
    private readonly authService: AuthService
  ) {}
}
