import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppPermissions } from "@core/enums";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IPaymentDetail } from "../../interfaces/payment-detail";
import { IInvoice } from "./../../interfaces/invoice";
import { getInvoicePaymentDetail, saveManualPayment, verifyChequePayment } from "./../../store/invoice.actions";

@Component({
  selector: "app-invoice-detail-container",
  templateUrl: "./invoice-detail-container.component.html",
})
export class InvoiceDetailContainerComponent extends BaseComponent implements OnInit {
  @Input() invoice: IInvoice;
  paymentDetail$: Observable<IPaymentDetail>;
  error$: Observable<Error>;
  hasManualPaymentAccess = AppPermissions.MANUAL_PAYMENT;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.paymentDetail$ = this.store.select((store) => store.invoice.paymentDetail);
    this.error$ = this.store.select((store) => store.invoice.error);
    if (this.invoice) {
      this.getPaymentDetails(this.invoice.id);
    }
  }

  getPaymentDetails(invoiceId: string) {
    this.store.dispatch(getInvoicePaymentDetail({ id: invoiceId }));
  }

  onSavePayment(savePaymentFormValue: any) {
    const options = {
      message: this.getTranslatedString("confirm_payment"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(saveManualPayment({ payload: savePaymentFormValue }));
      }
    });
  }

  onVerifyPayment(verifyPaymentPayload: any) {
    const options = {
      message: this.getTranslatedString("confirm_payment_verification"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(verifyChequePayment({ payload: verifyPaymentPayload }));
      }
    });
  }
}
