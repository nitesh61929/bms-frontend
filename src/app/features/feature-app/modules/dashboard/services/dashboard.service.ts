import { Injectable, Injector } from "@angular/core";
import { BaseService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class DashboardService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }
}
