import { Injectable, Injector } from "@angular/core";
import { AppPermissions, AppRoutes } from "@core/enums";
import { BaseService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class AdminNavigationBarService extends BaseService {
  adminMenus = [
    {
      item: "account_label",
      expand: false,
      icon: "la-user-tie",
      has_access_module: AppPermissions.ADMIN,
      sub_items: [
        {
          item: "active_label",
          routeLink: AppRoutes.ACTIVE_ACCOUNTS,
          has_access_module: AppPermissions.ACTIVE_ACCOUNT_LIST,
        },
        {
          item: "mod_status.INVITED",
          routeLink: AppRoutes.INVITED_ACCOUNTS,
          has_access_module: AppPermissions.PENDING_INVITATIONS,
        },
      ],
    },
    {
      item: "property_label",
      routeLink: AppRoutes.ADMIN_PROPERTY,
      icon: "la-building",
      has_access_module: AppPermissions.PROPERTY_ALL_LIST,
    },
  ];
  constructor(injector: Injector) {
    super(injector);
  }
}
