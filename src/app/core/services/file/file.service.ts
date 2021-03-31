import { Injectable, Injector } from "@angular/core";
import { ApiUrls } from "@core/enums";
import { BaseService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class FileService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  uploadFile(file: any, parameters?: any) {
    return this.http.post(ApiUrls.IMAGE_UPLOAD, file, { params: parameters });
  }
}
