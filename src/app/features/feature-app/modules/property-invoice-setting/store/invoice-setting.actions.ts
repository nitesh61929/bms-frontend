import { createAction, props } from "@ngrx/store";
import { IInvoiceSetting } from "./../interfaces/invoice-setting";

export const setInvoiceNumberSetting = createAction(
  "[INVOICES] Set Invoice Number Setting",
  props<{ payload: IInvoiceSetting }>()
);

export const setInvoiceNumberSettingSuccess = createAction(
  "[INVOICES] Set Invoice Number Setting Success",
  props<{ data: any }>()
);

export const setInvoiceNumberSettingFailure = createAction(
  "[INVOICES] Set Invoice Number Setting Failure",
  props<{ error: any }>()
);

export const getInvoiceNumberSetting = createAction("[INVOICES] Get Invoice Number Setting", props<any>());

export const getInvoiceNumberSettingSuccess = createAction(
  "[INVOICES] Get Invoice Number Setting Success",
  props<any>()
);

export const getInvoiceNumberSettingFailure = createAction(
  "[INVOICES] Get Invoice Number Setting Failure",
  props<any>()
);

export const setKhaltiPaymentConfig = createAction(
  "[PAYMENT] Set Khalti Payment Configuration",
  props<{ payload: any }>()
);

export const setKhaltiPaymentConfigSuccess = createAction(
  "[INVOICES] Set Khalti Payment Configuration Success",
  props<{ data: any }>()
);

export const setKhaltiPaymentConfigFailure = createAction(
  "[INVOICES] Set Khalti Payment Configuration Failure",
  props<{ error: any }>()
);

export const getKhaltiPaymentConfig = createAction("[INVOICES] Get Khalti Payment Configuration", props<any>());

export const getKhaltiPaymentConfigSuccess = createAction(
  "[INVOICES] Get Khalti Payment Configuration Success",
  props<any>()
);

export const getKhaltiPaymentConfigFailure = createAction(
  "[INVOICES] Get Khalti Payment Configuration Failure",
  props<any>()
);

export const setPropertyCurrencyConfig = createAction(
  "[PAYMENT] Set Property Currency Configuration",
  props<{ payload: any }>()
);

export const setPropertyCurrencyConfigSuccess = createAction(
  "[INVOICES] Set Property Currency Configuration Success",
  props<{ data: any }>()
);

export const setPropertyCurrencyConfigFailure = createAction(
  "[INVOICES] Set Property Currency Configuration Failure",
  props<{ error: any }>()
);

export const getPropertyCurrencyConfig = createAction("[INVOICES] Get Property Currency Configuration", props<any>());

export const getPropertyCurrencyConfigSuccess = createAction(
  "[INVOICES] Get Property Currency Configuration Success",
  props<any>()
);

export const getPropertyCurrencyConfigFailure = createAction(
  "[INVOICES] Get Property Currency Configuration Failure",
  props<any>()
);
