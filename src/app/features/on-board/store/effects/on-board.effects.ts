import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes, StorageKeys } from "@core/enums";
import { SnackBarService, StorageService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as OnBoardActions from "../actions/on-board.actions";
import { OnBoardService } from "./../../services/on-board.service";

@Injectable()
export class OnBoardEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private onBoardService: OnBoardService,
    private storage: StorageService,
    private store: Store
  ) {}

  getOwnershipTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OnBoardActions.loadOwnershipType),
      exhaustMap((action) =>
        this.onBoardService.getOwnershipTypes().pipe(
          map((response: any) => OnBoardActions.loadOwnershipTypeSuccess(response)),
          catchError((error) => of(OnBoardActions.loadOwnershipTypeFailure({ error })))
        )
      )
    );
  });

  getOwnerDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OnBoardActions.getOwnerDetail),
      exhaustMap((action) =>
        this.onBoardService.getOwnerDetail(action.id).pipe(
          map((response: any) => OnBoardActions.getOwnerDetailSuccess(response)),
          catchError((error) => of(OnBoardActions.getOwnerDetailFailure({ error })))
        )
      )
    );
  });

  onBoardOwner$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OnBoardActions.onBoardOwner),
      exhaustMap((action) =>
        this.onBoardService.onBoardOwner(action.payload).pipe(
          map((response: any) => OnBoardActions.onBoardOwnerSuccess(response)),
          catchError((error) => of(OnBoardActions.onBoardOwnerFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  onBoardOwnerSuccess = this.actions$.pipe(
    ofType<any>(OnBoardActions.onBoardOwnerSuccess),
    map((res: any) => {
      this.storage.set(StorageKeys.OWNER, res.data);
      this.storage.set(StorageKeys.REDIRECT_TO_ONBOARD_OWNER, false);
      this.router.navigateByUrl(`${AppRoutes.ON_BOARD_PROPERTY_TYPE}/${res.data.id}`);
    })
  );

  onBoardOwnerUpdate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OnBoardActions.onBoardOwnerUpdate),
      exhaustMap((action) =>
        this.onBoardService.onBoardOwnerUpdate(action.payload).pipe(
          map((response: any) => OnBoardActions.onBoardOwnerUpdateSuccess(response)),
          catchError((error) => of(OnBoardActions.onBoardOwnerUpdateFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  onBoardOwnerUpdateSuccess = this.actions$.pipe(
    ofType<any>(OnBoardActions.onBoardOwnerUpdateSuccess),
    map((res: any) => {
      this.storage.set(StorageKeys.OWNER, res.data);
      this.storage.set(StorageKeys.REDIRECT_TO_ONBOARD_OWNER, false);
      this.router.navigateByUrl(`${AppRoutes.ON_BOARD_PROPERTY_TYPE}/${res.data.id}`);
    })
  );

  onBoardProperty$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OnBoardActions.onBoardProperty),
      exhaustMap((action) =>
        this.onBoardService.onBoardProperty(action.payload).pipe(
          map((response: any) => OnBoardActions.onBoardPropertySuccess(response)),
          catchError((error) => of(OnBoardActions.onBoardPropertyFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  onBoardPropertySuccess = this.actions$.pipe(
    ofType<any>(OnBoardActions.onBoardPropertySuccess),
    map((res: any) => {
      this.storage.set(StorageKeys.REDIRECT_TO_ONBOARD_PROPERTY, false);
      this.storage.set(StorageKeys.ACTIVE_PROPERTY, res.data.id);
      this.router.navigateByUrl(AppRoutes.ON_BOARD_GREET);
    })
  );
}
