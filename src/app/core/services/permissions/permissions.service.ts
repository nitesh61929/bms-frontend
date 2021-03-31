import { Injectable, Injector } from "@angular/core";
import { StorageKeys } from "@core/enums";
import { Observable, of } from "rxjs";
import { BaseService } from "../base";

@Injectable({
  providedIn: "root",
})
export class PermissionsService extends BaseService {
  permissionsFromStorage: any;

  constructor(injector: Injector) {
    super(injector);
  }

  /**
   *
   * @param canAccess
   */
  public checkAuthorization(canAccess: any): Observable<boolean> {
    this.permissionsFromStorage = this.storage.get(StorageKeys.PERMISSIONS);
    return of(this.doCheckAuthorization(canAccess));
  }

  /**
   * Check if user can access component or not
   * @param canAccess should be string separate by dot or not->
   * string before dot represents module name and string after dot represents method name
   */
  private doCheckAuthorization(canAccess: string): boolean {
    if (canAccess) {
      const moduleMethodAccess = canAccess.split(":");
      const moduleName = moduleMethodAccess[0];
      const methodName = moduleMethodAccess[1];

      if (moduleName && !methodName) {
        return this.checkForModuleNameOnly(moduleName);
      } else {
        return this.checkForModuleAndMethodName(canAccess);
      }
    }
  }

  /**
   *
   * @param moduleName
   */
  private checkForModuleNameOnly(moduleName: string): boolean {
    let bool = false;
    if (this.permissionsFromStorage) {
      this.permissionsFromStorage.map((permission) => {
        const permissionValues = permission.split(":");
        const permissionModuleName = permissionValues[0];
        if (permissionModuleName === moduleName) {
          bool = true;
        }
      });
    }

    return bool;
  }

  private checkForModuleAndMethodName(canAccess: string): boolean {
    let bool = false;
    if (this.permissionsFromStorage) {
      bool = this.permissionsFromStorage.includes(canAccess);
    }
    return bool;
  }
}
