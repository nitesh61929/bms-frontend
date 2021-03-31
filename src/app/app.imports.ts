import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { StoreModule } from "@ngrx/store";
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { AppRoutingModule } from "./app-routing.module";

export const appImports = [
  AppRoutingModule,
  ReactiveFormsModule,
  StoreModule.forRoot({}),
  HttpClientModule,
  TranslateModule.forRoot({
    loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
  }),
];

export const appMaterialImports = [MatDialogModule];
