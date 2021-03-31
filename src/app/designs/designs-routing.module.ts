import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DesignHelpdeskCategoryComponent } from './design-helpdesk-category/design-helpdesk-category.component';
import { DesignAdminUserPendingComponent } from './design-admin-user-pending/design-admin-user-pending.component';
import { DesignCompanyOwnerDetailComponent } from "./design-company-owner-detail/design-company-owner-detail.component";
import { DesignDashboardComponent } from "./design-dashboard/design-dashboard.component";
import { DesignErrorPageComponent } from "./design-error-page/design-error-page.component";
import { DesignHelpdeskComponent } from "./design-helpdesk/design-helpdesk.component";
import { DesignIndividualOwnerDetailComponent } from "./design-individual-owner-detail/design-individual-owner-detail.component";
import { DesignLoginComponent } from "./design-login/design-login.component";
import { DesignNoticeBoardComponent } from "./design-notice-board/design-notice-board.component";
import { DesignOboardingCompleteComponent } from "./design-oboarding-complete/design-oboarding-complete.component";
import { DesignOwnerTypeComponent } from "./design-owner-type/design-owner-type.component";
import { DesignOwnerComponent } from "./design-owner/design-owner.component";
import { DesignPrductAdminProfileComponent } from "./design-prduct-admin-profile/design-prduct-admin-profile.component";
import { DesignProductAdminAddPropertyComponent } from "./design-product-admin-add-property/design-product-admin-add-property.component";
import { DesignProductAdminInvitedComponent } from "./design-product-admin-invited/design-product-admin-invited.component";
import { DesignProductAdminLoginComponent } from "./design-product-admin-login/design-product-admin-login.component";
import { DesignProductAdminOwnerComponent } from "./design-product-admin-owner/design-product-admin-owner.component";
import { DesignProductAdminPropertyCancelledComponent } from './design-product-admin-property-cancelled/design-product-admin-property-cancelled.component';
import { DesignProductAdminPropertyInVerificationComponent } from './design-product-admin-property-in-verification/design-product-admin-property-in-verification.component';
import { DesignProductAdminPropertyInvitedComponent } from './design-product-admin-property-invited/design-product-admin-property-invited.component';
import { DesignProductAdminPropertyPendingVerificationComponent } from './design-product-admin-property-pending-verification/design-product-admin-property-pending-verification.component';
import { DesignProductAdminPropertyComponent } from './design-product-admin-property/design-product-admin-property.component';
import { DesignProductAdminUserComponent } from "./design-product-admin-user/design-product-admin-user.component";
import { DesignPropertyOwnerAddPropertyComponent } from "./design-property-owner-add-property/design-property-owner-add-property.component";
import { DesignSiteDetailComponent } from "./design-site-detail/design-site-detail.component";
import { DesignSiteTypeComponent } from "./design-site-type/design-site-type.component";
import { DesignStaffComponent } from "./design-staff/design-staff.component";
import { DesignTenantActiveComponent } from "./design-tenant-active/design-tenant-active.component";
import { DesignTenantInvitedComponent } from "./design-tenant-invited/design-tenant-invited.component";
import { DesignUnitsComponent } from "./design-units/design-units.component";
import { DesignUserProfileComponent } from "./design-user-profile/design-user-profile.component";
import { DesignUsersComponent } from "./design-users/design-users.component";
import { SettingsComponent } from "./settings/settings.component";
import { DesignProductSettingComponent } from './design-product-setting/design-product-setting.component';
import { DesignInvoicesComponent } from './design-invoices/design-invoices.component';
import { DesignReportGatepassComponent } from './design-report-gatepass/design-report-gatepass.component';
import { DesignReportPanicAlertComponent } from './design-report-panic-alert/design-report-panic-alert.component';
import { DesignUnitConfigurationComponent } from './design-unit-configuration/design-unit-configuration.component';
import { DesignNotificationComponent } from './design-notification/design-notification.component';
import { DesignPropertyStaffComponent } from './design-property-staff/design-property-staff.component';
import { DesignCommitteeMemberComponent } from './design-committee-member/design-committee-member.component';
import { DesignPropertyPolicyComponent } from './design-property-policy/design-property-policy.component';
import { DesignInvoiceSettingComponent } from './design-invoice-setting/design-invoice-setting.component';
import { DesignPropertyDashboardComponent } from './design-property-dashboard/design-property-dashboard.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: DesignLoginComponent,
  },
  {
    path: "dashboard",
    component: DesignDashboardComponent,
  },
  {
    path: "owner-type",
    component: DesignOwnerTypeComponent,
  },
  {
    path: "individual-owner-detail",
    component: DesignIndividualOwnerDetailComponent,
  },
  {
    path: "company-owner-detail",
    component: DesignCompanyOwnerDetailComponent,
  },
  {
    path: "site-type",
    component: DesignSiteTypeComponent,
  },
  {
    path: "site-detail",
    component: DesignSiteDetailComponent,
  },
  {
    path: "units",
    component: DesignUnitsComponent,
  },
  {
    path: "tenant-active",
    component: DesignTenantActiveComponent,
  },
  {
    path: "tenant-invited",
    component: DesignTenantInvitedComponent,
  },
  {
    path: "settings",
    component: SettingsComponent,
  },
  {
    path: "design-owner",
    component: DesignOwnerComponent,
  },
  {
    path: "product-admin-login",
    component: DesignProductAdminLoginComponent,
  },
  {
    path: "product-admin-owner",
    component: DesignProductAdminOwnerComponent,
  },
  {
    path: "product-admin-add-property",
    component: DesignProductAdminAddPropertyComponent,
  },
  {
    path: "product-admin-property",
    component: DesignProductAdminPropertyComponent,
  },
  {
    path: "product-admin-property-invited",
    component: DesignProductAdminPropertyInvitedComponent,
  },
  {
    path: "product-admin-property-pending-verification",
    component: DesignProductAdminPropertyPendingVerificationComponent,
  },
  {
    path: "product-admin-property-in-verification",
    component: DesignProductAdminPropertyInVerificationComponent,
  },
  {
    path: "product-admin-property-cancelled",
    component: DesignProductAdminPropertyCancelledComponent,
  },
  {
    path: "onboarding-complete",
    component: DesignOboardingCompleteComponent,
  },
  {
    path: "product-admin-invited",
    component: DesignProductAdminInvitedComponent,
  },
  {
    path: "product-admin-user",
    component: DesignProductAdminUserComponent,
  },
  {
    path: "error",
    component: DesignErrorPageComponent,
  },
  {
    path: "active-tenant",
    component: DesignTenantActiveComponent,
  },

  {
    path: "notice-board",
    component: DesignNoticeBoardComponent,
  },
  {
    path: "staff",
    component: DesignStaffComponent,
  },
  {
    path: "profile",
    component: DesignUserProfileComponent,
  },
  {
    path: "product-admin-profile",
    component: DesignPrductAdminProfileComponent,
  },
  {
    path: "property-owner-add-property",
    component: DesignPropertyOwnerAddPropertyComponent,
  },
  {
    path: "helpdesk",
    component: DesignHelpdeskComponent,
  },
  {
    path: "helpdesk-category",
    component: DesignHelpdeskCategoryComponent,
  },
  {
    path: "dashboard",
    component: DesignDashboardComponent,
  },
  {
    path: "users",
    component: DesignUsersComponent,
  },
  {
    path: "product-admin-user-pending",
    component: DesignAdminUserPendingComponent,
  },
  {
    path: "product-setting",
    component: DesignProductSettingComponent,
  },
  {
    path: "invoices",
    component: DesignInvoicesComponent,
  },
  {
    path: "report-gatepass",
    component: DesignReportGatepassComponent,
  },
  {
    path: "report-panic-alert",
    component: DesignReportPanicAlertComponent,
  },
  {
    path: "unit-configuration",
    component: DesignUnitConfigurationComponent,
  },
  {
    path: "notification",
    component: DesignNotificationComponent,
  },
  {
    path: "property-staff",
    component: DesignPropertyStaffComponent,
  },
  {
    path: "committee-member",
    component: DesignCommitteeMemberComponent,
  },
  {
    path: "property-policy",
    component: DesignPropertyPolicyComponent,
  },
  {
    path: "invoice-setting",
    component: DesignInvoiceSettingComponent,
  },
  {
    path: "property-dashboard",
    component: DesignPropertyDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignsRoutingModule {}
