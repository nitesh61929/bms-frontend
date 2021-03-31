import { Injectable } from "@angular/core";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { PropertyInvoiceSettingService } from "./../services/property-invoice-setting.service";
import * as InvoiceSettingActions from "./invoice-setting.actions";

@Injectable()
export class InvoiceSettingEffects {
  getInvoiceNumberSetting$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceSettingActions.getInvoiceNumberSetting),
      exhaustMap((action) =>
        this.service.getInvoiceNumberSetting().pipe(
          map((response: any) => InvoiceSettingActions.getInvoiceNumberSettingSuccess(response)),
          catchError((error) => of(InvoiceSettingActions.getInvoiceNumberSettingFailure({ error })))
        )
      )
    );
  });

  setInvoiceNumberSetting$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceSettingActions.setInvoiceNumberSetting),
      exhaustMap((action) =>
        this.service.setInvoiceNumberSetting(action.payload).pipe(
          map((response: any) => InvoiceSettingActions.setInvoiceNumberSettingSuccess(response)),
          catchError((error) => of(InvoiceSettingActions.setInvoiceNumberSettingFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  setInvoiceNumberSettingSuccess = this.actions$.pipe(
    ofType<any>(InvoiceSettingActions.setInvoiceNumberSettingSuccess),
    map((data: any) => {
      this.snackBar.open(this.translate.instant("set_invoice_setting_success"));
    })
  );

  getKhaltiPaymentConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceSettingActions.getKhaltiPaymentConfig),
      exhaustMap((action) =>
        this.service.getKhaltiPaymentConfig().pipe(
          map((response: any) => InvoiceSettingActions.getKhaltiPaymentConfigSuccess(response)),
          catchError((error) => of(InvoiceSettingActions.getKhaltiPaymentConfigFailure({ error })))
        )
      )
    );
  });

  setKhaltiPaymentConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceSettingActions.setKhaltiPaymentConfig),
      exhaustMap((action) =>
        this.service.setKhaltiPaymentConfig(action.payload).pipe(
          map((response: any) => InvoiceSettingActions.setKhaltiPaymentConfigSuccess(response)),
          catchError((error) => of(InvoiceSettingActions.setKhaltiPaymentConfigFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  setKhaltiPaymentConfigSuccess = this.actions$.pipe(
    ofType<any>(InvoiceSettingActions.setKhaltiPaymentConfigSuccess),
    map((data: any) => {
      this.snackBar.open(this.translate.instant("set_khalti_payment_config_success"));
    })
  );

  getPropertyCurrencyConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceSettingActions.getPropertyCurrencyConfig),
      exhaustMap((action) =>
        this.service.getPropertyCurrencyConfig().pipe(
          map((response: any) => InvoiceSettingActions.getPropertyCurrencyConfigSuccess(response)),
          catchError((error) => of(InvoiceSettingActions.getPropertyCurrencyConfigFailure({ error })))
        )
      )
    );
  });

  setPropertyCurrencyConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceSettingActions.setPropertyCurrencyConfig),
      exhaustMap((action) =>
        this.service.setPropertyCurrencyConfig(action.payload).pipe(
          map((response: any) => InvoiceSettingActions.setPropertyCurrencyConfigSuccess(response)),
          catchError((error) => of(InvoiceSettingActions.setPropertyCurrencyConfigFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  setPropertyCurrencyConfigSuccess = this.actions$.pipe(
    ofType<any>(InvoiceSettingActions.setPropertyCurrencyConfigSuccess),
    map((data: any) => {
      this.snackBar.open(this.translate.instant("set_property_currency_config_success"));
    })
  );

  constructor(
    private actions$: Actions,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private service: PropertyInvoiceSettingService
  ) {}
}
