import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { StorageKeys } from "@core/enums";
import { ConstantsService, SnackBarService } from "@core/services";
import { DatasService } from "@core/services/datas/datas.service";
import { StorageService } from "@core/services/storage";
import { TawkService } from "@core/services/tawk/tawk.service";
import Utils from "@core/utilities/utils";
import { environment } from "@environments/environment";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmDialogService } from "@shared/confirm-dialog/confirm-dialog.service";
import { ErrorMessageService } from "@shared/error-messages/services";
import { FileUploadType } from "@shared/file-upload/enums/file-upload-type";
import { AppInjector } from "app/app-injector.service";

@Component({
  template: "",
})
export class BaseComponent implements OnInit {
  protected router: Router;
  protected constants: ConstantsService;
  protected translate: TranslateService;
  protected storage: StorageService;
  protected snackBar: SnackBarService;
  protected datasService: DatasService;
  protected confirmDialog: ConfirmDialogService;
  protected formBuilder: FormBuilder;
  protected errorMessageService: ErrorMessageService;
  public perPage;
  public fileUploadTypeEnum = FileUploadType;
  public tawkService: TawkService;

  constructor() {
    const injector = AppInjector.getInjector();
    this.router = injector.get(Router);
    this.constants = injector.get(ConstantsService);
    this.translate = injector.get(TranslateService);
    this.storage = injector.get(StorageService);
    this.snackBar = injector.get(SnackBarService);
    this.datasService = injector.get(DatasService);
    this.confirmDialog = injector.get(ConfirmDialogService);
    this.formBuilder = injector.get(FormBuilder);
    this.tawkService = injector.get(TawkService);
    this.errorMessageService = injector.get(ErrorMessageService);
    if (!this.storage.get(StorageKeys.PER_PAGE)) {
      this.storage.set(StorageKeys.PER_PAGE, 10);
    }
    this.perPage = this.storage.get(StorageKeys.PER_PAGE);
  }

  ngOnInit(): void {}

  /**
   *
   * @param translationString accepts module and key combination e.g: module_key.property_key
   */
  getTranslatedString(translationString: string): string {
    return this.translate.instant(translationString);
  }

  /**
   *
   * @param route accepts route to navigate e.g: module/path (auth/login)
   */
  redirectTo(route: string): void {
    this.router.navigateByUrl(route);
  }

  /**
   * Set null value for empty string to a formControl
   * @param control
   * @param value
   */
  onEmptyToNull(control: any, value: any) {
    control.setValue(value);
  }

  /**
   * Get first alphabet.
   * @param name
   */
  getDefaultAlphabet(name: string) {
    return Utils.getFirstCharacter(name);
  }

  getDefaultPageSizeOptions(): Array<number> {
    return environment.pageSizeOptions;
  }

  clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  getFormattedDate(date: string): Date {
    if (date) {
      return new Date(date.replace(/-/g, "/"));
    }
  }

  getSerialNumberForPaginatedList(index: number, pageIndex: number, pageSize: number) {
    return index + 1 + pageIndex * pageSize;
  }

  isMobile() {
    const userOS = Utils.getUserBrowserOS();
    return ["android", "ios"].includes(userOS);
  }
}
