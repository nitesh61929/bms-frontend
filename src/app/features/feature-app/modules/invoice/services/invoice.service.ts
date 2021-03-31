import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services/base/base.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InvoiceService extends BaseService {
  invoiceTypes = [
    {
      title: "Rent",
      value: "RENT",
    },
    {
      title: "Maintenance",
      value: "MAINTENANCE",
    },
  ];

  statuses = [
    {
      title: "Due",
      value: "DUE",
    },
    {
      title: "OverDue",
      value: "OVERDUE",
    },
    {
      title: "Pending",
      value: "PENDING",
    },
    {
      title: "Completed",
      value: "PAID",
    },
  ];

  paymentMethods = [
    {
      title: "Cash",
      value: "CASH",
    },
    {
      title: "Cheque",
      value: "CHEQUE",
    },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  getInvoices(parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.INVOICE_LIST}`, { params: parameters });
  }

  getInvoiceDetail(invoiceId: string) {
    return this.http.get(`${ApiUrls.INVOICE_DETAIL}/${invoiceId}`);
  }

  saveManualPayment(payload: any): Observable<any> {
    return this.http.post(`${ApiUrls.SAVE_MANUAL_PAYMENT}`, payload);
  }

  getInvoicePaymentDetail(invoiceId: string) {
    return this.http.get(`${ApiUrls.GET_INVOICE_PAYMENT_DETAIL}/${invoiceId}`);
  }

  verifyChequePayment(payload: any): Observable<any> {
    return this.http.put(`${ApiUrls.VERIFY_CHEQUE_PAYMENT}`, payload);
  }

  downloadInvoicePdf(invoiceId: string) {
    return this.downloadPDF(`${ApiUrls.DOWNLOAD_INVOICE}/${invoiceId}`, "invoice-report.pdf");
  }
}
