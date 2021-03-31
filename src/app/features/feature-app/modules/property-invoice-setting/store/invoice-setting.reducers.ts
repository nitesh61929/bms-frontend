import { createReducer, on } from "@ngrx/store";
import { ICurrencyConfig } from "./../interfaces/currency-config";
import { IInvoiceSetting } from "./../interfaces/invoice-setting";
import { IKhaltiConfiguration } from "./../interfaces/khalti-config";
import * as InvoiceSettingActions from "./invoice-setting.actions";

export interface InvoiceSettingState {
  loading: boolean;
  message: string;
  errorInvoiceNumSetting: Error;
  errorKhaltiConfigSetting: Error;
  errorCurrencyConfigSetting: Error;
  detail: IInvoiceSetting;
  khaltiConfiguration: IKhaltiConfiguration;
  currencyConfiguration: ICurrencyConfig[];
}

export const initialInvoiceSettingState: InvoiceSettingState = {
  loading: false,
  message: "",
  errorInvoiceNumSetting: null,
  errorKhaltiConfigSetting: null,
  errorCurrencyConfigSetting: null,
  detail: null,
  khaltiConfiguration: null,
  currencyConfiguration: null,
};

export const invoiceSettingKey = "invoiceSetting";

export const invoiceSettingReducer = createReducer(
  initialInvoiceSettingState,
  on(InvoiceSettingActions.getInvoiceNumberSetting, (state: InvoiceSettingState) => ({
    ...state,
    loading: true,
  })),

  on(InvoiceSettingActions.getInvoiceNumberSettingSuccess, (state: InvoiceSettingState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    detail: action.data,
  })),

  on(InvoiceSettingActions.getInvoiceNumberSettingFailure, (state: InvoiceSettingState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(InvoiceSettingActions.setInvoiceNumberSetting, (state) => ({ ...state, loading: true })),
  on(InvoiceSettingActions.setInvoiceNumberSettingSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(InvoiceSettingActions.setInvoiceNumberSettingFailure, (state, action) => ({
    ...state,
    loading: false,
    errorInvoiceNumSetting: action.error.error,
  })),
  on(InvoiceSettingActions.getKhaltiPaymentConfig, (state: InvoiceSettingState) => ({
    ...state,
    loading: true,
  })),

  on(InvoiceSettingActions.getKhaltiPaymentConfigSuccess, (state: InvoiceSettingState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    khaltiConfiguration: action.data,
  })),

  on(InvoiceSettingActions.getKhaltiPaymentConfigFailure, (state: InvoiceSettingState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(InvoiceSettingActions.setKhaltiPaymentConfig, (state) => ({ ...state, loading: true })),
  on(InvoiceSettingActions.setKhaltiPaymentConfigSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(InvoiceSettingActions.setKhaltiPaymentConfigFailure, (state, action) => ({
    ...state,
    loading: false,
    errorKhaltiConfigSetting: action.error.error,
  })),
  on(InvoiceSettingActions.getPropertyCurrencyConfig, (state: InvoiceSettingState) => ({
    ...state,
    loading: true,
  })),

  on(InvoiceSettingActions.getPropertyCurrencyConfigSuccess, (state: InvoiceSettingState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    currencyConfiguration: action.data,
  })),

  on(InvoiceSettingActions.getPropertyCurrencyConfigFailure, (state: InvoiceSettingState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(InvoiceSettingActions.setPropertyCurrencyConfig, (state) => ({ ...state, loading: true })),
  on(InvoiceSettingActions.setPropertyCurrencyConfigSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(InvoiceSettingActions.setPropertyCurrencyConfigFailure, (state, action) => ({
    ...state,
    loading: false,
    errorCurrencyConfigSetting: action.error.error,
  }))
);
