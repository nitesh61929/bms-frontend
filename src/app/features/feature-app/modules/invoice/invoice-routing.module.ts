import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPermissions } from "@core/enums";
import { PermissionGuard } from "@core/guards/permission/permission.guard";
import { InvoiceContainerComponent } from "./containers/invoice-container/invoice-container.component";

const routes: Routes = [
  {
    path: "",
    component: InvoiceContainerComponent,
    data: {
      hasAccess: AppPermissions.INVOICE_LIST,
    },
    canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
