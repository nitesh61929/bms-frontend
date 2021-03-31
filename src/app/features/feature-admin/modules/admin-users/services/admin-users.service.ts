import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums/api-urls";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminUsersService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getAllAdminUsers(params: any): Observable<any> {
    return this.http.get(ApiUrls.USERS, { params: params });
  }
}
