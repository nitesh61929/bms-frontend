import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PropertyInvoiceSettingContainerComponent } from "./containers/property-invoice-setting-container/property-invoice-setting-container.component";

const routes: Routes = [
  {
    path: "",
    component: PropertyInvoiceSettingContainerComponent,
    data: {
      hasAccess: AppPermissions.INVOICE_PREFIX_SET,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyInvoiceSettingRoutingModule {}
