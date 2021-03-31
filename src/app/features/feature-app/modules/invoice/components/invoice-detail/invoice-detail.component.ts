import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";
import { AppPermissions } from "@core/enums";
import Utils from "@core/utilities/utils";
import { Observable } from "rxjs";
import { IPaymentDetail } from "../../interfaces/payment-detail";
import { IInvoice } from "./../../interfaces/invoice";
import { InvoiceService } from "./../../services/invoice.service";

@Component({
  selector: "app-invoice-detail",
  templateUrl: "./invoice-detail.component.html",
})
export class InvoiceDetailComponent extends BaseComponent implements OnInit {
  @Input() invoice: IInvoice;
  @Input() paymentDetail$: Observable<IPaymentDetail>;
  paymentDetail: any;
  downloadableFile$: Observable<any>;
  hasDownloadInvoiceAccess = AppPermissions.DOWNLOAD_INVOICE;

  constructor(private service: InvoiceService) {
    super();
  }

  ngOnInit(): void {
    this.paymentDetail$.subscribe((detail) => {
      this.paymentDetail = detail;
    });
  }

  getPaymentMethod(method: string) {
    if (method) {
      method = method.replace("_", " ");
      return Utils.toTitleCase(method);
    }
    return "N/A";
  }

  downloadInvoice() {
    if (this.invoice) {
      this.service.downloadInvoicePdf(this.invoice?.id);
    }
  }

  getTransactionId() {
    if (
      this.paymentDetail &&
      this.paymentDetail.paymentType === "KHALTI_WALLET" &&
      this.paymentDetail.paymentStatus === "PAID"
    ) {
      return this.paymentDetail.paymentDetails.transactionId;
    }
    return this.getTranslatedString("na_label");
  }
}
