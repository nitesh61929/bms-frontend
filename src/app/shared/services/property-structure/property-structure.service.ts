import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PropertyStructureService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * Fetch property structure types like block towers etc
   * @param propertyTypeId
   */
  getPropertyStructure(propertyTypeId: string): Observable<any> {
    return this.http.get(`${ApiUrls.PROPERTY_STRUCTURE_TYPES}/${propertyTypeId}`);
  }

  /**
   * Get property structure detail with property structure tree
   * @param propertyTypeId
   */
  getPropertyStructureDetail() {
    return this.http.get(`${ApiUrls.PROPERTY_STRUCTURE_DETAIL}`);
  }

  /**
   * Save Property structure type along with property structure tree
   * @param propertyStructurePayload
   */
  savePropertyStructure(propertyStructurePayload: any) {
    return this.http.post(`${ApiUrls.V2_PROPERTY_STRUCTURE}`, propertyStructurePayload);
  }

  /**
   * Get selected property strcuture type
   * @param propertyId
   */
  getSelectedPropertyStructure() {
    return this.http.get(`${ApiUrls.SELECTED_PROPERTY_STRUCTURE}`);
  }

  deletePropertyStructure(): Observable<any> {
    return this.http.delete(`${ApiUrls.DELETE_PROPERTY_STRUCTURE}`);
  }
}
