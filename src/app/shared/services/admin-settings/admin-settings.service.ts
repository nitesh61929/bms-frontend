import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class AdminSettingsService extends BaseService {
  policyTypes = {
    PRIVACY_POLICY: "PRIVACY_POLICY",
    TERMS_AND_CONDITIONS: "TERMS_AND_CONDITIONS",
  };

  constructor(injector: Injector) {
    super(injector);
  }

  addOrUpdatePolicy(payload: any) {
    return this.http.put(`${ApiUrls.POLICY}`, payload);
  }

  getPrivacyPolicy() {
    return this.http.get(`${ApiUrls.POLICY}/${this.policyTypes.PRIVACY_POLICY}`);
  }

  getTermsAndConditions() {
    return this.http.get(`${ApiUrls.POLICY}/${this.policyTypes.TERMS_AND_CONDITIONS}`);
  }
}
