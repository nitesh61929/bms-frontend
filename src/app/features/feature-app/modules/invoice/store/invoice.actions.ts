import { createAction, props } from "@ngrx/store";

export const loadInvoices = createAction("[INVOICES] Load Invoices", props<{ params?: any }>());

export const loadInvoicesSuccess = createAction("[INVOICES] Load Invoices Success", props<any>());

export const loadInvoicesFailure = createAction("[INVOICES] Load Invoices Failure", props<any>());

export const getInvoiceDetail = createAction("[INVOICES] Get Invoice Detail", props<{ id: string }>());

export const getInvoiceDetailSuccess = createAction("[INVOICES] Get Invoice Detail Success", props<any>());

export const getInvoiceDetailFailure = createAction("[INVOICES] Get Invoice Detail Failure", props<any>());

export const saveManualPayment = createAction("[INVOICES] Save manual payment", props<{ payload: any }>());

export const saveManualPaymentSuccess = createAction("[INVOICES] Save manual payment Success", props<{ data: any }>());

export const saveManualPaymentFailure = createAction("[INVOICES] Save manual payment Failure", props<{ error: any }>());

export const getInvoicePaymentDetail = createAction("[INVOICES] Get Invoice Payment Detail", props<{ id: string }>());

export const getInvoicePaymentDetailSuccess = createAction(
  "[INVOICES] Get Invoice Payment Detail Success",
  props<any>()
);

export const getInvoicePaymentDetailFailure = createAction(
  "[INVOICES] Get Invoice Payment Detail Failure",
  props<any>()
);

export const verifyChequePayment = createAction("[INVOICES] Verify Cheque payment", props<{ payload: any }>());

export const verifyChequePaymentSuccess = createAction(
  "[INVOICES] Verify Cheque payment Success",
  props<{ data: any }>()
);

export const verifyChequePaymentFailure = createAction(
  "[INVOICES] Verify Cheque payment Failure",
  props<{ error: any }>()
);
