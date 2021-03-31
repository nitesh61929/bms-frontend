import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { DesignAddNoticePopupComponent } from "./design-add-notice-popup/design-add-notice-popup.component";
import { DesignAddStaffPopupComponent } from "./design-add-staff-popup/design-add-staff-popup.component";
import { DesignCompanyOwnerDetailComponent } from "./design-company-owner-detail/design-company-owner-detail.component";
import { DesignDashboardComponent } from "./design-dashboard/design-dashboard.component";
import { DesignDialogAdminOwnerDetailComponent } from "./design-dialog-admin-owner-detail/design-dialog-admin-owner-detail.component";
import { DesignDialogPropertyDetailComponent } from "./design-dialog-property-detail/design-dialog-property-detail.component";
import { DesignErrorPageComponent } from "./design-error-page/design-error-page.component";
import { DesignHelpdeskComponent } from "./design-helpdesk/design-helpdesk.component";
import { DesignIndividualOwnerDetailComponent } from "./design-individual-owner-detail/design-individual-owner-detail.component";
import { DesignInvitationDialogComponent } from "./design-invitation-dialog/design-invitation-dialog.component";
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
import { DesignProductAdminPropertyComponent } from "./design-product-admin-property/design-product-admin-property.component";
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
import { DesignsRoutingModule } from "./designs-routing.module";
import { SettingsComponent } from "./settings/settings.component";
import { DesignAdminUserPendingComponent } from './design-admin-user-pending/design-admin-user-pending.component';
import { DesignHelpdeskCategoryComponent } from './design-helpdesk-category/design-helpdesk-category.component';
import { DesignAddHelpdeskCategoryComponent } from './design-add-helpdesk-category/design-add-helpdesk-category.component';
import { DesignProductSettingComponent } from './design-product-setting/design-product-setting.component';
import { DesignInvoicesComponent } from './design-invoices/design-invoices.component';
import { DesignInvoiceDetailPopupComponent } from './design-invoice-detail-popup/design-invoice-detail-popup.component';
import { DesignReportPanicAlertComponent } from './design-report-panic-alert/design-report-panic-alert.component';
import { DesignReportGatepassComponent } from './design-report-gatepass/design-report-gatepass.component';
import { DesignPropertyStaffComponent } from './design-property-staff/design-property-staff.component';
import { DesignPropertyPolicyComponent } from './design-property-policy/design-property-policy.component';
import { DesignCommitteeMemberComponent } from './design-committee-member/design-committee-member.component';
import { DesignUnitConfigurationComponent } from './design-unit-configuration/design-unit-configuration.component';
import { DesignNotificationComponent } from './design-notification/design-notification.component';
import { DesignInvoiceSettingComponent } from './design-invoice-setting/design-invoice-setting.component';
import { DesignPropertyDashboardComponent } from './design-property-dashboard/design-property-dashboard.component';


@NgModule({
  declarations: [
    DesignLoginComponent,
    DesignOwnerTypeComponent,
    DesignIndividualOwnerDetailComponent,
    DesignCompanyOwnerDetailComponent,
    DesignSiteDetailComponent,
    DesignSiteTypeComponent,
    DesignOwnerComponent,
    DesignUnitsComponent,
    SettingsComponent,
    DesignProductAdminLoginComponent,
    DesignErrorPageComponent,
    DesignProductAdminOwnerComponent,
    DesignProductAdminAddPropertyComponent,
    DesignProductAdminPropertyComponent,
    DesignOboardingCompleteComponent,
    DesignProductAdminInvitedComponent,
    DesignProductAdminUserComponent,
    DesignTenantInvitedComponent,
    DesignTenantActiveComponent,
    DesignDialogAdminOwnerDetailComponent,
    DesignInvitationDialogComponent,
    DesignNoticeBoardComponent,
    DesignAddNoticePopupComponent,
    DesignStaffComponent,
    DesignAddStaffPopupComponent,
    DesignUserProfileComponent,
    DesignPropertyOwnerAddPropertyComponent,
    DesignPrductAdminProfileComponent,
    DesignHelpdeskComponent,
    DesignDashboardComponent,
    DesignDialogPropertyDetailComponent,
    DesignUsersComponent,
    DesignProductAdminPropertyPendingVerificationComponent,
    DesignProductAdminPropertyInvitedComponent,
    DesignProductAdminPropertyInVerificationComponent,
    DesignProductAdminPropertyCancelledComponent,
    DesignAdminUserPendingComponent,
    DesignHelpdeskCategoryComponent,
    DesignAddHelpdeskCategoryComponent,
    DesignProductSettingComponent,
    DesignInvoicesComponent,
    DesignInvoiceDetailPopupComponent,
    DesignReportPanicAlertComponent,
    DesignReportGatepassComponent,
    DesignPropertyStaffComponent,
    DesignPropertyPolicyComponent,
    DesignCommitteeMemberComponent,
    DesignUnitConfigurationComponent,
    DesignNotificationComponent,
    DesignInvoiceSettingComponent,
    DesignPropertyDashboardComponent,
  ],
  imports: [DesignsRoutingModule, SharedModule],
})
export class DesignsModule {}
