import { Component, OnInit, ViewChild } from "@angular/core";
import { AppPermissions } from "@core/enums";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { getPropertyDetail } from "@shared/store/actions/property.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IInvoiceSetting } from "../../interfaces/invoice-setting";
import {
  getInvoiceNumberSetting,
  getPropertyCurrencyConfig,
  setInvoiceNumberSettingSuccess,
  setKhaltiPaymentConfigSuccess,
  setPropertyCurrencyConfigSuccess,
} from "../../store/invoice-setting.actions";
import { PaymentMethodConfigComponent } from "./../../components/payment-method-config/payment-method-config.component";
import { PropertyCurrencyConfigComponent } from "./../../components/property-currency-config/property-currency-config.component";
import { PropertyInvoiceSettingComponent } from "./../../components/property-invoice-setting/property-invoice-setting.component";
import { ICurrencyConfig } from "./../../interfaces/currency-config";
import { IKhaltiConfiguration } from "./../../interfaces/khalti-config";
import { getKhaltiPaymentConfig } from "./../../store/invoice-setting.actions";

@Component({
  selector: "app-property-invoice-setting-container",
  templateUrl: "./property-invoice-setting-container.component.html",
})
export class PropertyInvoiceSettingContainerComponent implements OnInit {
  @ViewChild("invoiceSettingCmp") invoiceSettingCmp: PropertyInvoiceSettingComponent;
  @ViewChild("khaltiPaymentConfigCmp") khaltiPaymentConfigCmp: PaymentMethodConfigComponent;
  @ViewChild("propertyCurrencyConfigCmp") propertyCurrencyConfigCmp: PropertyCurrencyConfigComponent;
  invoiceNumberSetting$: Observable<IInvoiceSetting>;
  khaltiPaymentConfig$: Observable<IKhaltiConfiguration>;
  propertyCurrencyConfig$: Observable<ICurrencyConfig[]>;
  destroyed$ = new Subject<boolean>();
  errorInvoiceNumSetting$: Observable<Error>;
  errorKhaltiConfigSetting$: Observable<Error>;
  errorCurrencyConfigSetting$: Observable<Error>;
  hasKhaltiKeySetAccess = AppPermissions.SET_KHALTI_PAYMENT_KEY;

  constructor(
    private store: Store<any>,
    setInvoiceNumberSettingSuccess$: Actions,
    setKhaltiPaymentConfigSuccess$: Actions,
    setPropertyCurrencyConfigSuccess$: Actions
  ) {
    setInvoiceNumberSettingSuccess$
      .pipe(ofType(setInvoiceNumberSettingSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.getRequiredDataOnSuccess();
      });

    setKhaltiPaymentConfigSuccess$
      .pipe(ofType(setKhaltiPaymentConfigSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.getRequiredDataOnSuccess();
        this.khaltiPaymentConfigCmp.paymentMethodConfigNgForm.resetForm("");
      });

    setPropertyCurrencyConfigSuccess$
      .pipe(ofType(setPropertyCurrencyConfigSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.getRequiredDataOnSuccess();
      });
  }

  getRequiredDataOnSuccess() {
    this.getInvoiceNumberSetting();
    this.invoiceSettingCmp.buildInvoiceSettingForm();
    this.getKhaltiPaymentConfig();
    // this.khaltiPaymentConfigCmp.buildKhaltiPaymentConfigForm();
    this.getPropertyCurrencyConfig();
    this.propertyCurrencyConfigCmp.buildPropertyCurrencyConfigForm();
    this.getPropertyDetail();
  }

  ngOnInit(): void {
    this.listenObservables();
    this.getInvoiceNumberSetting();
    this.getKhaltiPaymentConfig();
    this.getPropertyCurrencyConfig();
  }

  getInvoiceNumberSetting() {
    this.store.dispatch(getInvoiceNumberSetting(null));
  }

  getKhaltiPaymentConfig() {
    this.store.dispatch(getKhaltiPaymentConfig(null));
  }

  getPropertyCurrencyConfig() {
    this.store.dispatch(getPropertyCurrencyConfig(null));
  }

  getPropertyDetail() {
    this.store.dispatch(getPropertyDetail({}));
  }

  listenObservables() {
    this.invoiceNumberSetting$ = this.store.select((store) => store.invoiceSetting.detail);
    this.khaltiPaymentConfig$ = this.store.select((store) => store.invoiceSetting.khaltiConfiguration);
    this.propertyCurrencyConfig$ = this.store.select((store) => store.invoiceSetting.currencyConfiguration);
    this.errorInvoiceNumSetting$ = this.store.select((store) => store.invoiceSetting.errorInvoiceNumSetting);
    this.errorKhaltiConfigSetting$ = this.store.select((store) => store.invoiceSetting.errorKhaltiConfigSetting);
    this.errorCurrencyConfigSetting$ = this.store.select((store) => store.invoiceSetting.errorCurrencyConfigSetting);
  }
}
