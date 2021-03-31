import { Injectable } from "@angular/core";
import { SnackBarService } from "@core/services";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { InvoiceService } from "./../services/invoice.service";
import * as InvoiceActions from "./invoice.actions";

@Injectable()
export class InvoiceEffects {
  loadNotices$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceActions.loadInvoices),
      exhaustMap((action) =>
        this.invoiceService.getInvoices(action.params).pipe(
          map((response: any) => InvoiceActions.loadInvoicesSuccess(response)),
          catchError((error) => of(InvoiceActions.loadInvoicesFailure({ error })))
        )
      )
    );
  });

  getInvoiceDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceActions.getInvoiceDetail),
      exhaustMap((action) =>
        this.invoiceService.getInvoiceDetail(action.id).pipe(
          map((response: any) => InvoiceActions.getInvoiceDetailSuccess(response)),
          catchError((error) => of(InvoiceActions.getInvoiceDetailFailure({ error })))
        )
      )
    );
  });

  getInvoicePaymentDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceActions.getInvoicePaymentDetail),
      exhaustMap((action) =>
        this.invoiceService.getInvoicePaymentDetail(action.id).pipe(
          map((response: any) => InvoiceActions.getInvoicePaymentDetailSuccess(response)),
          catchError((error) => of(InvoiceActions.getInvoicePaymentDetailFailure({ error })))
        )
      )
    );
  });

  saveManualPayment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceActions.saveManualPayment),
      exhaustMap((action) =>
        this.invoiceService.saveManualPayment(action.payload).pipe(
          map((response: any) => InvoiceActions.saveManualPaymentSuccess(response)),
          catchError((error) => of(InvoiceActions.saveManualPaymentFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  saveManualPaymentSuccess = this.actions$.pipe(
    ofType<any>(InvoiceActions.saveManualPaymentSuccess),
    map((data: any) => {
      this.snackBar.open(this.translate.instant("payment_success"));
    })
  );

  verifyChequePayment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvoiceActions.verifyChequePayment),
      exhaustMap((action) =>
        this.invoiceService.verifyChequePayment(action.payload).pipe(
          map((response: any) => InvoiceActions.verifyChequePaymentSuccess(response)),
          catchError((error) => of(InvoiceActions.verifyChequePaymentFailure({ error })))
        )
      )
    );
  });

  @Effect({ dispatch: false })
  verifyChequePaymentSuccess = this.actions$.pipe(
    ofType<any>(InvoiceActions.verifyChequePaymentSuccess),
    map((data: any) => {
      this.snackBar.open(this.translate.instant("payment_verify_success"));
    })
  );

  constructor(
    private actions$: Actions,
    private snackBar: SnackBarService,
    private translate: TranslateService,
    private invoiceService: InvoiceService
  ) {}
}
