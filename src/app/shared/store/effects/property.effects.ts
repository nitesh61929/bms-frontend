import { Injectable } from "@angular/core";
import { StorageKeys } from "@core/enums";
import { SnackBarService, StorageService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as PropertyActions from "../actions//property.actions";
import { PropertyService } from "./../../services/property/property.service";
import { getPropertyDetail } from "./../actions/property.actions";

@Injectable()
export class PropertyEffects {
  loadProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.loadProperty),
      exhaustMap((action) =>
        this.propertyService.getPropertyList().pipe(
          map((response: any) => PropertyActions.loadPropertySuccess(response)),
          catchError((error) => of(PropertyActions.loadPropertyFailure({ error })))
        )
      )
    )
  );

  updatePropertyDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.updatePropertyDetail),
      exhaustMap((action) =>
        this.propertyService.updatePropertyDetail(action.payload).pipe(
          map((response: any) => PropertyActions.updatePropertyDetailSuccess(response)),
          catchError((error) => of(PropertyActions.updatePropertyDetailFailure({ error })))
        )
      )
    )
  );

  updateVerifiedPropertyDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.updateVerifiedPropertyDetail),
      exhaustMap((action) =>
        this.propertyService.updateVerifiedPropertyDetail(action.payload).pipe(
          map((response: any) => PropertyActions.updateVerifiedPropertyDetailSuccess(response)),
          catchError((error) => of(PropertyActions.updateVerifiedPropertyDetailFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateVerifiedPropertyDetailSuccess = this.actions$.pipe(
    ofType<any>(PropertyActions.updateVerifiedPropertyDetailSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("property_update_success"));
      const activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
      this.store.dispatch(getPropertyDetail({}));
    })
  );

  @Effect({ dispatch: false })
  updatePropertyDetailSuccess = this.actions$.pipe(
    ofType<any>(PropertyActions.updatePropertyDetailSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("property_update_success"));
      const activePropertyId = this.storage.get(StorageKeys.ACTIVE_PROPERTY);
      this.store.dispatch(getPropertyDetail({}));
    })
  );

  getPropertyTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PropertyActions.loadPropertyType),
      exhaustMap((action) =>
        this.propertyService.getPropertyTypes().pipe(
          map((response: any) => PropertyActions.loadPropertyTypeSuccess(response)),
          catchError((error) => of(PropertyActions.loadPropertyTypeFailure({ error })))
        )
      )
    );
  });

  getPropertyDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.getPropertyDetail),
      exhaustMap((action) =>
        this.propertyService.getPropertyDetail(action.propertyId).pipe(
          map((response: any) => PropertyActions.getPropertyDetailSuccess(response)),
          catchError((error) => of(PropertyActions.getPropertyDetailFailure({ error })))
        )
      )
    )
  );

  assignStaffToProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.assignStaffToProperty),
      exhaustMap((action) =>
        this.propertyService.assignStaffToProperty(action.payload).pipe(
          map((response: any) => PropertyActions.assignStaffToPropertySuccess(response)),
          catchError((error) => of(PropertyActions.assignStaffToPropertyFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  assignStaffToPropertySuccess = this.actions$.pipe(
    ofType<any>(PropertyActions.assignStaffToPropertySuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("staff_assign_success"));
    })
  );

  removeStaffFromProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.removeStaffFromProperty),
      exhaustMap((action) =>
        this.propertyService.removeStaffFromProperty(action.payload).pipe(
          map((response: any) => PropertyActions.removeStaffFromPropertySuccess(response)),
          catchError((error) => of(PropertyActions.removeStaffFromPropertyFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  removeStaffFromPropertySuccess = this.actions$.pipe(
    ofType<any>(PropertyActions.removeStaffFromPropertySuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("staff_remove_success"));
    })
  );

  updateStaffRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.updateStaffRole),
      exhaustMap((action) =>
        this.propertyService.updateStaffRole(action.payload).pipe(
          map((response: any) => PropertyActions.updateStaffRoleSuccess(response)),
          catchError((error) => of(PropertyActions.updateStaffRoleFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateStaffRoleSuccess = this.actions$.pipe(
    ofType<any>(PropertyActions.updateStaffRoleSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("role_update_success"));
    })
  );

  addProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.addProperty),
      exhaustMap((action) =>
        this.propertyService.addProperty(action.payload).pipe(
          map((response: any) => PropertyActions.addPropertySuccess(response)),
          catchError((error) => of(PropertyActions.addPropertyFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  addPropertySuccess = this.actions$.pipe(
    ofType<any>(PropertyActions.addPropertySuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("property_add_success"));
    })
  );

  updatePropertyStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.updatePropertyStatus),
      exhaustMap((action) =>
        this.propertyService.updatePropertyStatus(action.propertyId, action.params).pipe(
          map((response: any) => PropertyActions.updatePropertyStatusSuccess(response)),
          catchError((error) => of(PropertyActions.updatePropertyStatusFailure({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updatePropertyStatusSuccess = this.actions$.pipe(
    ofType<any>(PropertyActions.updatePropertyStatusSuccess),
    map((res: any) => {
      this.snackBar.open(this.translate.instant("status_update_success"));
    })
  );

  loadOwnerOnLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.loadOwnerOnLogin),
      exhaustMap((action) =>
        this.propertyService.getUserPropertyList().pipe(
          map((response: any) => PropertyActions.loadOwnerOnLoginSuccess(response)),
          catchError((error) => of(PropertyActions.loadOwnerOnLoginFailure({ error })))
        )
      )
    )
  );

  getUserPropertyPermissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.getUserPropertyPermissions),
      exhaustMap((action) =>
        this.propertyService.getUserPropertyPermissions(action.params).pipe(
          map((response: any) => PropertyActions.getUserPropertyPermissionsSuccess(response)),
          catchError((error) => of(PropertyActions.getUserPropertyPermissionsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private propertyService: PropertyService,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>,
    private storage: StorageService
  ) {}
}
