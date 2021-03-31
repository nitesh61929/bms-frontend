import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { InvoiceDetailComponent } from "./components/invoice-detail/invoice-detail.component";
import { InvoicePaymentFormComponent } from "./components/invoice-payment-form/invoice-payment-form.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { InvoiceContainerComponent } from "./containers/invoice-container/invoice-container.component";
import { InvoiceDetailContainerComponent } from "./containers/invoice-detail-container/invoice-detail-container.component";
import { InvoiceRoutingModule } from "./invoice-routing.module";
import { InvoiceEffects } from "./store/invoice.effects";
import * as fromInvoice from "./store/invoice.reducers";

@NgModule({
  declarations: [
    InvoiceContainerComponent,
    InvoiceComponent,
    InvoiceDetailContainerComponent,
    InvoiceDetailComponent,
    InvoicePaymentFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InvoiceRoutingModule,
    StoreModule.forFeature(fromInvoice.invoiceKey, fromInvoice.invoiceReducer),
    EffectsModule.forFeature([InvoiceEffects]),
  ],
})
export class InvoiceModule {}
