import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services/base/base.service";
import { Observable } from "rxjs";
import { IHelpdeskCategory } from "../interfaces/ticket-category";

@Injectable({
  providedIn: "root",
})
export class HelpdeskCategoryService extends BaseService {
  statuses = [
    {
      value: "ACTIVE",
      title: "Active",
    },
    {
      value: "INACTIVE",
      title: "Inactive",
    },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  getHelpdeskCategories(parameters: any): Observable<any> {
    return this.http.get(ApiUrls.TICKET_CATEGORIES, { params: parameters });
  }

  addHelpdeskCategory(payload: IHelpdeskCategory) {
    return this.http.post(ApiUrls.ADD_TICKET_CATEGORY, payload);
  }

  deleteHelpdeskCategory(categoryId: string): Observable<any> {
    return this.http.delete(`${ApiUrls.REMOVE_TICKET_CATEGORY}/${categoryId}`);
  }

  updateHelpdeskCategory(categoryId: string, payload: IHelpdeskCategory): Observable<any> {
    return this.http.put(`${ApiUrls.UPDATE_TICKET_CATEGORY}/${categoryId}`, payload);
  }
}
