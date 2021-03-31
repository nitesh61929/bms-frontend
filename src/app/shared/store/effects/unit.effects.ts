import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import * as UnitActions from "../actions/unit.actions";
import { UnitService } from "./../../services/unit/unit.service";

@Injectable()
export class UnitEffects {
  getMaintenanceCharge$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.getMaintenanceCharge),
      exhaustMap((action) =>
        this.unitService.getMaintenanceCharge().pipe(
          map((response: any) => UnitActions.getMaintenanceChargeSuccess(response)),
          catchError((error) => of(UnitActions.getMaintenanceChargeFailure({ error })))
        )
      )
    );
  });

  getMaintenanceFeature$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.getMaintenanceFeature),
      exhaustMap((action) =>
        this.unitService.getMaintenanceFeature().pipe(
          map((response: any) => UnitActions.getMaintenanceFeatureSuccess(response)),
          catchError((error) => of(UnitActions.getMaintenanceFeatureFailure({ error })))
        )
      )
    );
  });

  getAmountChargeTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.getAmountChargeTypes),
      exhaustMap(() =>
        this.unitService.getAmountChargeTypes().pipe(
          map((response: any) => UnitActions.getAmountChargeTypesSuccess(response)),
          catchError((error) => of(UnitActions.getAmountChargeTypesFailure({ error })))
        )
      )
    );
  });

  getPropertyMaintenanceConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.getPropertyMaintenanceConfig),
      exhaustMap((action) =>
        this.unitService.getPropertyMaintenanceConfig().pipe(
          map((response: any) => UnitActions.getPropertyMaintenanceConfigSuccess(response)),
          catchError((error) => of(UnitActions.getPropertyMaintenanceConfigFailure({ error })))
        )
      )
    );
  });

  getUnitDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.getUnitDetail),
      exhaustMap((action) =>
        this.unitService.getUnitDetail(action.id).pipe(
          map((response: any) => UnitActions.getUnitDetailSuccess(response)),
          catchError((error) => of(UnitActions.getUnitDetailFailure({ error })))
        )
      )
    );
  });

  loadUnits$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.loadUnits),
      exhaustMap((action) =>
        this.unitService.getUnits(action.payload, action.params).pipe(
          map((response: any) => UnitActions.loadUnitsSuccess(response)),
          catchError((error) => of(UnitActions.loadUnitsFailure({ error })))
        )
      )
    );
  });

  inviteTenant$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.inviteTenant),
      exhaustMap((action) =>
        this.unitService.inviteTenant(action.payload).pipe(
          map((response: any) => UnitActions.inviteTenantSuccess(response)),
          catchError((error) => of(UnitActions.inviteTenantFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  inviteTenantSuccess = this.actions$.pipe(
    ofType<any>(UnitActions.inviteTenantSuccess),
    map((staff: any) => {
      this.snackBar.open(this.translate.instant("tenant_invite_success"));
    })
  );

  updatePropertyMaintenanceConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.updatePropertyMaintenanceConfig),
      exhaustMap((action) =>
        this.unitService.updatePropertyMaintenanceConfig(action.payload).pipe(
          map((response: any) => UnitActions.updatePropertyMaintenanceConfigSuccess(response)),
          catchError((error) => of(UnitActions.updatePropertyMaintenanceConfigFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  updatePropertyMaintenanceConfigSuccess = this.actions$.pipe(
    ofType<any>(UnitActions.updatePropertyMaintenanceConfigSuccess),
    map((d: any) => {
      this.snackBar.open(this.translate.instant("maintenance_config_update_success"));
    })
  );

  updateUnitAreaAndOccupancy$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.updateUnitAreaAndOccupancy),
      exhaustMap((action) =>
        this.unitService.updateUnitAreaAndOccupancy(action.payload, action.id).pipe(
          map((response: any) => UnitActions.updateUnitAreaAndOccupancySuccess(response)),
          catchError((error) => of(UnitActions.updateUnitAreaAndOccupancyFailure({ error })))
        )
      )
    );
  });

  updateUnitRentConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.updateUnitRentConfig),
      exhaustMap((action) =>
        this.unitService.updateUnitRentConfig(action.payload, action.id).pipe(
          map((response: any) => UnitActions.updateUnitRentConfigSuccess(response)),
          catchError((error) => of(UnitActions.updateUnitRentConfigFailure({ error })))
        )
      )
    );
  });

  updateUnitDocuments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.updateUnitDocuments),
      exhaustMap((action) =>
        this.unitService.uploadDocument(action.payload, action.id).pipe(
          map((response: any) => UnitActions.updateUnitDocumentsSuccess(response)),
          catchError((error) => of(UnitActions.updateUnitDocumentsFailure({ error })))
        )
      )
    );
  });

  updateUnitContractDate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.updateUnitContractDate),
      exhaustMap((action) =>
        this.unitService.updateUnitContractDate(action.payload, action.id).pipe(
          map((response: any) => UnitActions.updateUnitContractDateSuccess(response)),
          catchError((error) => of(UnitActions.updateUnitContractDateFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  updateUnitContractDateSuccess = this.actions$.pipe(
    ofType<any>(UnitActions.updateUnitContractDateSuccess),
    map((d: any) => {
      this.snackBar.open(this.translate.instant("unit_update_success"));
    })
  );

  updateUnitMaintenanceCharge$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.updateUnitMaintenanceCharge),
      exhaustMap((action) =>
        this.unitService.updateUnitMaintenanceCharge(action.payload, action.id).pipe(
          map((response: any) => UnitActions.updateUnitMaintenanceChargeSuccess(response)),
          catchError((error) => of(UnitActions.updateUnitMaintenanceChargeFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  unitMaintenanceChargeSuccess = this.actions$.pipe(
    ofType<any>(UnitActions.updateUnitMaintenanceChargeSuccess),
    map((d: any) => {
      this.snackBar.open(this.translate.instant("unit_update_success"));
    })
  );

  getUnitFilterDropdown$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnitActions.getUnitFilterDropdown),
      exhaustMap((action) =>
        this.unitService.getUnitFilterDropdown(action.payload).pipe(
          map((response: any) => UnitActions.getUnitFilterDropdownSuccess(response)),
          catchError((error) => of(UnitActions.getUnitFilterDropdownFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private router: Router,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private store: Store<any>,
    private unitService: UnitService
  ) {}
}
