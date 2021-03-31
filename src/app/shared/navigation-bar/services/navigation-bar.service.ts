import { Injectable, Injector } from "@angular/core";
import { AppRoutes } from "@core/enums";
import { AppPermissions } from "@core/enums/app-permissions";
import { BaseService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class NavigationBarService extends BaseService {
  menus = [
    {
      item: "units_label",
      routeLink: AppRoutes.UNITS,
      icon: "las la-door-open",
      has_access_module: AppPermissions.UNIT_LIST,
    },
    {
      item: "residences_label",
      expand: false,
      icon: "las la-user-tie",
      has_access_module: AppPermissions.RESIDENCES,
      sub_items: [
        {
          item: "active_label",
          routeLink: AppRoutes.ACTIVE_RESIDENCES,
          has_access_module: AppPermissions.GET_ACTIVE_RESIDENCE,
        },
        {
          item: "invited_label",
          routeLink: AppRoutes.INVITED_RESIDENCES,
          has_access_module: AppPermissions.GET_INVITED_RESIDENCE,
        },
      ],
    },
    {
      item: "notice_board_header",
      routeLink: AppRoutes.NOTICE_BOARD,
      icon: "las la-newspaper",
      has_access_module: AppPermissions.NOTICE_LIST,
    },
    {
      item: "helpdesk_label",
      expand: false,
      icon: "las la-user-astronaut",
      has_access_module: AppPermissions.HELPDESK,
      sub_items: [
        {
          item: "helpdesk_label",
          routeLink: AppRoutes.HELPDESK,
          has_access_module: AppPermissions.GET_PROPERTY_TICKETS,
        },
        {
          item: "helpdesk_category_label",
          routeLink: AppRoutes.HELPDESK_CATEGORY,
          has_access_module: AppPermissions.TICKET_GET_CATEGORIES,
        },
      ],
    },
    {
      item: "mod_invoice.invoice_header",
      routeLink: AppRoutes.INVOICES,
      icon: "las la-coins",
      has_access_module: AppPermissions.INVOICE_LIST,
    },
    {
      item: "reports_label",
      expand: true,
      icon: "las la-chart-bar",
      has_access_module: AppPermissions.REPORTS,
      sub_items: [
        {
          item: "gatepass_label",
          routeLink: AppRoutes.GATEPASS_REPORTS,
          has_access_module: AppPermissions.GET_GATEPASS_REPORTS,
        },
        {
          item: "panic_alert_label",
          routeLink: AppRoutes.PANIC_REPORTS,
          has_access_module: AppPermissions.GET_PANIC_ALERT_REPORTS,
        },
      ],
    },
    {
      item: "staff_label",
      routeLink: AppRoutes.PROPERTY_STAFF,
      icon: "las la-users-cog",
      has_access_module: AppPermissions.PROPERTY_STAFF_LIST,
    },
    {
      item: "committee_member_label",
      routeLink: AppRoutes.COMMITTEE_MEMBER,
      icon: "las la-users",
      has_access_module: AppPermissions.COMMITTEE_LIST,
    },
    {
      item: "policy_label",
      routeLink: AppRoutes.POLICY,
      icon: "las la-file-alt",
      has_access_module: AppPermissions.PROPERTY_POLICY_LIST,
    },
    {
      item: "settings_label",
      expand: true,
      icon: "las la-cog",
      has_access_module: AppPermissions.PROPERTY_DETAIL,
      sub_items: [
        {
          item: "property_label",
          routeLink: AppRoutes.PROPERTY,
          has_access_module: AppPermissions.PROPERTY_DETAIL,
        },
        {
          item: "units_label",
          routeLink: AppRoutes.UNIT_SETTING,
          has_access_module: AppPermissions.CREATE_MAINTENANCE_CONFIG,
        },
        {
          item: "mod_invoice.invoice_header",
          routeLink: AppRoutes.INVOICE_SETTING,
          has_access_module: AppPermissions.INVOICE_PREFIX_SET,
        },
      ],
    },
  ];
  constructor(injector: Injector) {
    super(injector);
  }
}
