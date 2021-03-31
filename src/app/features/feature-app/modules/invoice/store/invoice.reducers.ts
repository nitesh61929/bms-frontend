import { createReducer, on } from "@ngrx/store";
import { IPagination } from "@shared/interfaces/pagination";
import { IInvoice } from "./../interfaces/invoice";
import { IPaymentDetail } from "./../interfaces/payment-detail";
import * as InvoiceActions from "./invoice.actions";

export interface InvoiceState {
  loading: boolean;
  message: string;
  error: Error;
  list: IInvoice[];
  detail: IInvoice;
  paymentDetail: IPaymentDetail;
  pagination: IPagination;
}

export const initialInvoiceState: InvoiceState = {
  loading: false,
  message: "",
  error: null,
  list: [],
  detail: null,
  paymentDetail: null,
  pagination: null,
};

export const invoiceKey = "invoice";

export const invoiceReducer = createReducer(
  initialInvoiceState,
  on(InvoiceActions.loadInvoices, (state: InvoiceState) => ({
    ...state,
    loading: true,
  })),

  on(InvoiceActions.loadInvoicesSuccess, (state: InvoiceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    list: action.data,
    pagination: action.paginationInfo,
  })),

  on(InvoiceActions.loadInvoicesFailure, (state: InvoiceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(InvoiceActions.getInvoiceDetail, (state: InvoiceState) => ({
    ...state,
    loading: true,
  })),

  on(InvoiceActions.getInvoiceDetailSuccess, (state: InvoiceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    detail: action.data,
  })),

  on(InvoiceActions.getInvoiceDetailFailure, (state: InvoiceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(InvoiceActions.saveManualPayment, (state) => ({ ...state, loading: true })),
  on(InvoiceActions.saveManualPaymentSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(InvoiceActions.saveManualPaymentFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  })),

  on(InvoiceActions.getInvoicePaymentDetail, (state: InvoiceState) => ({
    ...state,
    loading: true,
  })),

  on(InvoiceActions.getInvoicePaymentDetailSuccess, (state: InvoiceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
    paymentDetail: action.data,
  })),

  on(InvoiceActions.getInvoicePaymentDetailFailure, (state: InvoiceState, action) => ({
    ...state,
    loading: false,
    message: action.message,
  })),
  on(InvoiceActions.verifyChequePayment, (state) => ({ ...state, loading: true })),
  on(InvoiceActions.verifyChequePaymentSuccess, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(InvoiceActions.verifyChequePaymentFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.error,
  }))
);
