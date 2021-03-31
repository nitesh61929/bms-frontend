import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { IBusiness } from "@shared/interfaces/business";

@Injectable({
  providedIn: "root",
})
export class BusinessService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getBusinessList(parameters: any) {
    return this.http.get(ApiUrls.BUSINESS, { params: parameters });
  }

  getBusinessTypes() {
    return this.http.get(ApiUrls.BUSINESS_TYPES);
  }

  getBusinessDetail(businessId: number) {
    return this.http.get(`${ApiUrls.BUSINESS}/${businessId}`);
  }

  saveBusiness(business: IBusiness) {
    return this.http.post(`${ApiUrls.BUSINESS}`, business);
  }

  updateBusiness(business: IBusiness) {
    return this.http.put(`${ApiUrls.BUSINESS}/${business.id}`, business);
  }

  deleteBusiness(businessId: number) {
    return this.http.delete(`${ApiUrls.BUSINESS}/${businessId}`);
  }
}
