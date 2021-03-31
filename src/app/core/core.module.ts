import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { environment } from "@environments/environment";
import { BaseComponent } from "./components";
import { httpInterceptorProviders } from "./interceptors";
import { ConstantsService } from "./services";
import { TawkService } from "./services/tawk/tawk.service";

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule],
  exports: [],
  providers: [
    ConstantsService,
    httpInterceptorProviders,
    { provide: "BASE_API_URL", useValue: environment.apiUrl },
    TawkService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import it in the AppModule only");
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
