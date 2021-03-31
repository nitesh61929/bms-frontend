import { CommonModule, DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { CoreModule } from "@core/core.module";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { SharedModule } from "@shared/shared.module";
import { environment } from "../environments/environment";
import { AppInjector } from "./app-injector.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { reducers } from "./store";
import { ActionTypes } from "./store/actions/app.actions";
import { AppEffects } from "./store/effects/app.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(reducers, {
      metaReducers: [clearState],
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.setInjector(injector);
  }
}

/**
 * required for AOT compilation
 * @param http Httpclient
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

/**
 *
 * @param reducer Clear redux state
 * @returns
 */
export function clearState(reducer) {
  return function (state, action) {
    if (action.type === ActionTypes.CLEAR_REDUX_STATE) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
