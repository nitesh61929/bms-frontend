import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReportsService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }
  getPanicReports(parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.PANIC_ALERT_REPORT}`, { params: parameters });
  }

  getGatepassReports(parameters: any): Observable<any> {
    return this.http.get(`${ApiUrls.GATEPASS_REPORT}`, { params: parameters });
  }

  getVisitPurposeList(): Observable<any> {
    return this.http.get(ApiUrls.GET_VISIT_PURPOSES);
  }

  getGatekeeperList(): Observable<any> {
    return this.http.get(ApiUrls.GET_GATEKEEPER_LIST);
  }
}
