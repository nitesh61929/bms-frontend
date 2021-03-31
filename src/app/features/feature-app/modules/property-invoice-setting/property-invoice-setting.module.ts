import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "@shared/shared.module";
import { PropertyInvoiceSettingComponent } from "./components/property-invoice-setting/property-invoice-setting.component";
import { PropertyInvoiceSettingContainerComponent } from "./containers/property-invoice-setting-container/property-invoice-setting-container.component";
import { PropertyInvoiceSettingRoutingModule } from "./property-invoice-setting-routing.module";
import { InvoiceSettingEffects } from "./store/invoice-setting.effects";
import * as fromInvoiceSetting from "./store/invoice-setting.reducers";
import { PaymentMethodConfigComponent } from './components/payment-method-config/payment-method-config.component';
import { PropertyCurrencyConfigComponent } from './components/property-currency-config/property-currency-config.component';

@NgModule({
  declarations: [PropertyInvoiceSettingContainerComponent, PropertyInvoiceSettingComponent, PaymentMethodConfigComponent, PropertyCurrencyConfigComponent],
  imports: [
    CommonModule,
    SharedModule,
    PropertyInvoiceSettingRoutingModule,
    StoreModule.forFeature(fromInvoiceSetting.invoiceSettingKey, fromInvoiceSetting.invoiceSettingReducer),
    EffectsModule.forFeature([InvoiceSettingEffects]),
  ],
})
export class PropertyInvoiceSettingModule {}
