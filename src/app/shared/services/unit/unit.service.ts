import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UnitService extends BaseService {
  unitOccupancy = [
    { value: "RENTED", title: "Rent" },
    { value: "OWNED", title: "Owned" },
  ];
  fineTypes = [
    {
      value: "DAILY",
      title: "Daily",
    },
    {
      value: "WEEKLY",
      title: "Weekly",
    },
    {
      value: "MONTHLY",
      title: "Monthly",
    },
    {
      value: "HALF_YEARLY",
      title: "Half Yearly",
    },
    {
      value: "YEARLY",
      title: "Yearly",
    },
    // {
    //   value: "MINUTES",
    //   title: "60 Minutes",
    // },
  ];

  rentTerms = [
    { value: "PER_SQUARE_FEET", title: "Per Sq. Ft." },
    { value: "FIXED", title: "Fixed" },
  ];

  paymentTerms = [
    { value: "MONTHLY", title: "Monthly" },
    { value: "QUARTERLY", title: "Quarterly" },
    { value: "HALF_YEARLY", title: "Half Yearly" },
    { value: "YEARLY", title: "Yearly" },
    // { value: "MINUTES", title: "60 Minutes" },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  getMaintenanceCharge(): Observable<any> {
    return this.http.get(ApiUrls.MAINTENANCE_CHARGE);
  }

  getMaintenanceFeature(): Observable<any> {
    return this.http.get(ApiUrls.MAINTENANCE_FEATURE);
  }

  getAmountChargeTypes(): Observable<any> {
    return this.http.get(ApiUrls.GET_AMOUNT_CHARGE_TYPES);
  }

  updatePropertyMaintenanceConfig(payload: any) {
    return this.http.put(ApiUrls.MAINTENANCE_CONFIG, payload);
  }

  getPropertyMaintenanceConfig() {
    return this.http.get(`${ApiUrls.PROPERTY_MAINTENANCE_CONFIG}`);
  }

  getUnits(payload: any, parameters: any) {
    return this.http.post(`${ApiUrls.UNIT}`, payload, { params: parameters });
  }

  getUnitDetail(unitId: string) {
    return this.http.get(`${ApiUrls.UNIT_DETAIL}/${unitId}`);
  }

  inviteTenant(inviteResidencePayload: any) {
    return this.http.post(`${ApiUrls.INVITE_RESIDENCE}`, inviteResidencePayload);
  }

  updateUnitAreaAndOccupancy(unitDetailPayload: any, unitId: string) {
    return this.http.put(`${ApiUrls.UPDATE_UNIT_AREA_AND_OCCUPANCY}/${unitId}`, unitDetailPayload);
  }

  updateUnitMaintenanceCharge(unitMaintenanceChargePayload: any, unitId: string) {
    return this.http.put(`${ApiUrls.UPDATE_UNIT_MAINTENANCE_CONFIG}/${unitId}`, unitMaintenanceChargePayload);
  }

  uploadDocument(unitDocumentPayload: any, unitId: string) {
    return this.http.put(`${ApiUrls.UPDATE_UNIT_DOCUMENTS}/${unitId}`, unitDocumentPayload);
  }

  updateUnitRentConfig(unitRentConfigPayload: any, unitId: string) {
    return this.http.put(`${ApiUrls.UPDATE_UNIT_RENT_CONFIG}/${unitId}`, unitRentConfigPayload);
  }

  updateUnitContractDate(unitContractPayload: any, unitId: string) {
    return this.http.put(`${ApiUrls.UPDATE_UNIT_CONTRACT_DATE}/${unitId}`, unitContractPayload);
  }

  getUnitFilterDropdown(payload: any) {
    return this.http.post(`${ApiUrls.UNIT_FILTER_DROPDOWN}`, payload);
  }
}
