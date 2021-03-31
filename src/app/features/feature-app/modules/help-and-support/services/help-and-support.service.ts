import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class HelpAndSupportService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  createTicket(payload: any) {
    return this.http.post(ApiUrls.HELP_AND_SUPPORT, payload);
  }
}
