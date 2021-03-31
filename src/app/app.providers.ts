import { Overlay } from "@angular/cdk/overlay";
import { EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslateService, TranslateStore } from "@ngx-translate/core";
import { ConfirmDialogService } from "@shared/confirm-dialog/confirm-dialog.service";
import { of } from "rxjs";
import { AppInjector } from "./app-injector.service";
import { ConstantsService, DatasService, SnackBarService, StorageService } from "./core";

export class TranslateServiceStub {
  public onTranslationChange: EventEmitter<any> = new EventEmitter();

  public get(key: any): any {
    return of(key);
  }

  public setDefaultLang(key: any): any {
    return of(key);
  }

  get onLangChange() {
    return of({ lang: "en" });
  }

  get onDefaultLangChange() {
    return of({ lang: "en" });
  }
}

export const appProviders = [
  AppInjector,
  ConstantsService,
  { provide: TranslateService, useClass: TranslateServiceStub },
  StorageService,
  SnackBarService,
  DatasService,
  ConfirmDialogService,
  TranslateStore,
];

export const appMaterialProviders = [MatSnackBar, MatDialog, Overlay];
