import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { AppPermissions } from "@core/enums";
import { PermissionsService } from "@core/services";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import { updatePropertyMaintenanceConfig } from "@shared/store/actions/unit.actions";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-unit-config",
  templateUrl: "./unit-config.component.html",
})
export class UnitConfigComponent extends BaseComponent implements OnInit {
  @Input() propertyDetail$: Observable<IProperty>;
  propertyDetail: IProperty;
  destroyed$ = new Subject<boolean>();
  maintenanceChargeFormGrp: FormGroup;
  hasMaintenanceChargeConfigAccess = AppPermissions.CREATE_MAINTENANCE_CONFIG;
  hasMaintenanceChargeConfigDetailAccess = AppPermissions.GET_MAINTENANCE_CONFIG;

  constructor(
    private store: Store<any>,

    private permissionService: PermissionsService
  ) {
    super();
  }

  ngOnInit(): void {}

  saveMaintenanceCharge(maintenanceChargeFormValue) {
    this.store.dispatch(updatePropertyMaintenanceConfig({ payload: maintenanceChargeFormValue }));
  }

  hasUnitConfigurationAccess() {
    let editBool = false;
    let viewBool = false;
    const editBool$ = this.permissionService.checkAuthorization(this.hasMaintenanceChargeConfigAccess);
    editBool$.subscribe((b) => {
      editBool = b;
    });

    const viewBool$ = this.permissionService.checkAuthorization(this.hasMaintenanceChargeConfigDetailAccess);
    viewBool$.subscribe((b) => {
      viewBool = b;
    });
    return editBool || viewBool;
  }
}
