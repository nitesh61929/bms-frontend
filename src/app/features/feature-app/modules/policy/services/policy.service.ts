import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";
import { IPolicy } from "../interfaces/policy";

@Injectable({
  providedIn: "root",
})
export class PolicyService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getPolicies(params: any): Observable<any> {
    return this.http.get(`${ApiUrls.PROPERTY_POLICY}`, { params });
  }

  addPolicy(addPolicyPayload: IPolicy) {
    return this.http.post(`${ApiUrls.PROPERTY_POLICY}`, addPolicyPayload);
  }

  updatePolicy(policyId: string, updatePolicyPayload: IPolicy) {
    return this.http.put(`${ApiUrls.PROPERTY_POLICY}/${policyId}`, updatePolicyPayload);
  }

  deletePolicy(policyId: string): Observable<any> {
    return this.http.delete(`${ApiUrls.PROPERTY_POLICY}/${policyId}`);
  }
}
