import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreDevtoolsConfig, StoreDevtoolsOptions } from './config';
import { StoreDevtools } from './devtools';
import { ReduxDevtoolsExtension } from './extension';
import * as ɵngcc0 from '@angular/core';
export declare const IS_EXTENSION_OR_MONITOR_PRESENT: InjectionToken<boolean>;
export declare function createIsExtensionOrMonitorPresent(extension: ReduxDevtoolsExtension | null, config: StoreDevtoolsConfig): boolean;
export declare function createReduxDevtoolsExtension(): any;
export declare function createStateObservable(devtools: StoreDevtools): Observable<any>;
export declare class StoreDevtoolsModule {
    static instrument(options?: StoreDevtoolsOptions): ModuleWithProviders<StoreDevtoolsModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<StoreDevtoolsModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<StoreDevtoolsModule>;
}

//# sourceMappingURL=instrument.d.ts.map