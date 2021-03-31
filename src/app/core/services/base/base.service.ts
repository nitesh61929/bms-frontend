import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { ApiUrls, StorageKeys } from "@core/enums";
import DateUtils from "@core/utilities/date-utils";
import { TranslateService } from "@ngx-translate/core";
import { IUser } from "@shared/interfaces/user/user";
import * as FileSaver from "file-saver-es";
import { ConstantsService } from "../constants";
import { DatasService } from "../datas";
import { StorageService } from "../storage";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  protected http: HttpClient;
  protected storage: StorageService;
  protected router: Router;
  protected constants: ConstantsService;
  protected dataService: DatasService;
  protected translate: TranslateService;

  constructor(protected injector: Injector) {
    this.http = injector.get(HttpClient);
    this.storage = injector.get(StorageService);
    this.router = injector.get(Router);
    this.constants = injector.get(ConstantsService);
    this.dataService = injector.get(DatasService);
    this.translate = injector.get(TranslateService);
  }

  onLoginSuccess(response: any) {
    this.setTokenToStorage(response);
    this.setClientIdToStorage(response);
    this.setUserToStorage(response.body.data);
    this.setUserIdToStorage(response.body.data);
  }

  /**
   * Fetch token from headers and set it to the storage
   * @param response
   */
  setTokenToStorage(response: any): void {
    const token = response.headers.get("accessToken");
    const refreshToken = response.headers.get("refreshToken");
    this.storage.set(StorageKeys.token, token);
    this.storage.set(StorageKeys.REFRESH_TOKEN, refreshToken);
  }

  setClientIdToStorage(response: any): void {
    const clientId = response.headers.get("clientId");
    this.storage.set(StorageKeys.CLIENTID, clientId);
  }

  /**
   * Set user to local storage.
   * @private
   * @param userData
   */
  setUserToStorage(userData: IUser): void {
    const { id, name, email, mobileNumber, image, status } = userData;
    this.storage.set(StorageKeys.USER, { id, name, email, mobileNumber, image, status });
  }

  setUserIdToStorage(userData: any): void {
    this.storage.set(StorageKeys.USERID, userData.id);
  }

  refreshAccessToken(refreshTokenPayload: any) {
    return this.http.post(ApiUrls.REFRESH_TOKEN, refreshTokenPayload, {
      observe: "response" as "body",
    });
  }

  downloadPDF(pdfURL: string, fileName: string = "file") {
    const headers = {
      timezone: DateUtils.getCurrentTimeZone(),
    };
    this.http.get(pdfURL, { responseType: "blob", headers: new HttpHeaders(headers) }).subscribe(
      (res: any) => {
        FileSaver.saveAs(res, `${fileName}.pdf`);
        // const blob = new Blob([res], { type: "application/pdf" });
        // const url = window.URL.createObjectURL(blob);
        // window.open(url);
      },
      (err) => {}
    );
  }

  getTranslatedString(text: string) {
    let translatedText;
    this.translate.get(text).subscribe((translated) => {
      translatedText = translated;
    });
    return translatedText;
    // return this.translate.instant(text);
  }
}
