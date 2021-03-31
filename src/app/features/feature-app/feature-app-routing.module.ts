import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureAppContainerComponent } from "./containers/feature-app-container/feature-app-container.component";

const routes: Routes = [
  {
    path: "",
    component: FeatureAppContainerComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./modules/dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "property",
        loadChildren: () => import("./modules/property/property.module").then((m) => m.PropertyModule),
      },
      {
        path: "staffs",
        loadChildren: () => import("./modules/staffs/staffs.module").then((m) => m.StaffsModule),
      },
      {
        path: "profile",
        loadChildren: () => import("./modules/profile/profile.module").then((m) => m.ProfileModule),
      },
      {
        path: "units",
        loadChildren: () => import("./modules/units/units.module").then((m) => m.UnitsModule),
      },
      {
        path: "notice-board",
        loadChildren: () => import("./modules/notices/notices.module").then((m) => m.NoticesModule),
      },
      {
        path: "helpdesk",
        loadChildren: () => import("./modules/helpdesk/helpdesk.module").then((m) => m.HelpdeskModule),
      },
      {
        path: "helpdesk-category",
        loadChildren: () =>
          import("./modules/helpdesk-category/helpdesk-category.module").then((m) => m.HelpdeskCategoryModule),
      },
      {
        path: "add-property",
        loadChildren: () => import("./modules/add-property/add-property.module").then((m) => m.AddPropertyModule),
      },
      {
        path: "residences",
        loadChildren: () => import("./modules/residences/residences.module").then((m) => m.ResidencesModule),
      },
      {
        path: "reports",
        loadChildren: () => import("./modules/reports/reports.module").then((m) => m.ReportsModule),
      },
      {
        path: "invoices",
        loadChildren: () => import("./modules/invoice/invoice.module").then((m) => m.InvoiceModule),
      },
      {
        path: "property-staff",
        loadChildren: () => import("./modules/property-staff/property-staff.module").then((m) => m.PropertyStaffModule),
      },
      {
        path: "committee-member",
        loadChildren: () =>
          import("./modules/committee-member/committee-member.module").then((m) => m.CommitteeMemberModule),
      },
      {
        path: "unit-setting",
        loadChildren: () =>
          import("./modules/property-unit-config/property-unit-config.module").then((m) => m.PropertyUnitConfigModule),
      },
      {
        path: "invoice-setting",
        loadChildren: () =>
          import("./modules/property-invoice-setting/property-invoice-setting.module").then(
            (m) => m.PropertyInvoiceSettingModule
          ),
      },
      {
        path: "policy",
        loadChildren: () => import("./modules/policy/policy.module").then((m) => m.PolicyModule),
      },
      {
        path: "help-and-support",
        loadChildren: () =>
          import("./modules/help-and-support/help-and-support.module").then((m) => m.HelpAndSupportModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureAppRoutingModule {}
