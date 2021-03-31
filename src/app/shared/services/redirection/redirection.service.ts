import { Injectable, Injector } from "@angular/core";
import { AppRoutes, StorageKeys } from "@core/enums";
import { BaseService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class RedirectionService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  passwordRedirect(fromGuard?: boolean) {
    if (!this.storage.get(StorageKeys.HAS_PASSWORD)) {
      return AppRoutes.CREATE_PASSWORD;
    } else if (
      !this.storage.get(StorageKeys.HAS_CHANGED_PASSWORD) &&
      this.storage.get(StorageKeys.HAS_PASSWORD) &&
      this.storage.get(StorageKeys.ACCOUNT_TYPE) === "COMPANY"
    ) {
      return AppRoutes.UPDATE_PASSWORD;
    } else {
      return fromGuard ? AppRoutes.DEFAULT : AppRoutes.ROOT;
    }
  }

  onboardRedirect(fromGuard?: boolean) {
    if (this.storage.get(StorageKeys.REDIRECT_TO_ONBOARD_OWNER)) {
      if (this.storage.get(StorageKeys.ACCOUNT_TYPE) === "INDIVIDUAL") {
        return AppRoutes.ON_BOARD_OWNER_INDIVIDUAL;
      } else {
        return AppRoutes.ON_BOARD_OWNER_COMPANY;
      }
    } else if (this.storage.get(StorageKeys.REDIRECT_TO_ONBOARD_PROPERTY)) {
      return `${AppRoutes.ON_BOARD_PROPERTY_TYPE}/${this.storage.get(StorageKeys.OWNER).id}`;
    } else {
      return fromGuard ? AppRoutes.DEFAULT : AppRoutes.DASHBOARD;
    }
  }

  negateOnboardRedirect() {
    return (
      this.storage.get(StorageKeys.REDIRECT_TO_ONBOARD_OWNER) ||
      this.storage.get(StorageKeys.REDIRECT_TO_ONBOARD_PROPERTY)
    );
  }
}
