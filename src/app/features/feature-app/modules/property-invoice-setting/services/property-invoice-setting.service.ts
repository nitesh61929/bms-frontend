import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";
import { IInvoiceSetting } from "./../interfaces/invoice-setting";

@Injectable({
  providedIn: "root",
})
export class PropertyInvoiceSettingService extends BaseService {
  seperators = [
    {
      title: "Hyphen (-)",
      value: "-",
    },

    {
      title: "Forward slash (/)",
      value: "/",
    },
  ];

  currencies = [
    {
      title: "NPR",
      value: "NPR",
    },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  getInvoiceNumberSetting(): Observable<any> {
    return this.http.get(ApiUrls.GET_INVOICE_SETTING);
  }

  setInvoiceNumberSetting(payload: IInvoiceSetting): Observable<any> {
    return this.http.put(`${ApiUrls.SET_INVOICE_SETTING}`, payload);
  }

  getKhaltiPaymentConfig(): Observable<any> {
    return this.http.get(ApiUrls.GET_KHALTI_PAYMENT_CONFIG);
  }

  setKhaltiPaymentConfig(payload: any): Observable<any> {
    return this.http.put(`${ApiUrls.SET_KHALTI_PAYMENT_CONFIG}`, payload);
  }

  getPropertyCurrencyConfig(): Observable<any> {
    return this.http.get(ApiUrls.GET_PROPERTY_CURRENCY_CONFIG);
  }

  setPropertyCurrencyConfig(payload: any): Observable<any> {
    return this.http.put(`${ApiUrls.SET_PROPERTY_CURRENCY_CONFIG}`, payload);
  }
}
