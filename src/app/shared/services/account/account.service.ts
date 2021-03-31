import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AccountService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  getAccountTypes(): Observable<any> {
    return this.http.get(ApiUrls.ACCOUNT_TYPES);
  }
}
