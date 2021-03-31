import { Component, OnInit } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { BaseMaintenanceChargeComponent } from "@shared/base-maintenance-charge/base-maintenance-charge.component";
import { UnitService } from "@shared/services/unit/unit.service";
import { getPropertyMaintenanceConfig, updatePropertyMaintenanceConfig } from "@shared/store/actions/unit.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-maintenance-charge",
  templateUrl: "./maintenance-charge.component.html",
})
export class MaintenanceChargeComponent extends BaseMaintenanceChargeComponent implements OnInit {
  error$: Observable<Error>;

  constructor(store: Store<any>, unitService: UnitService, updatePropertyMaintenanceConfigSuccess$: Actions) {
    super(store, unitService, updatePropertyMaintenanceConfigSuccess$);
  }

  ngOnInit(): void {
    this.maintenanceConfigDetail$ = this.store.select((store) => store.sharedModule.unit.propertyUnitConfig);
    this.maintenanceConfigDetail$.subscribe((d) => {
      if (d) {
        this.maintenanceConfigDetail = d;
        this.buildMaintenanceChargeForm(this.maintenanceConfigDetail);
      }
    });

    this.store.dispatch(getPropertyMaintenanceConfig({}));

    this.error$ = this.store.select((store) => store.sharedModule.unit.error);
    this.error$.subscribe((err) => {
      if (err && this.maintenanceChargeFormGrp) {
        this.errorMessageService.handleServerSideError(this.maintenanceChargeFormGrp, err);
      }
    });
  }

  onSaveMaintenanceCharge() {
    const maintenanceAmount = parseInt(this.maintenanceChargeFormGrp.get("amount").value);
    const maintenanceCategories = this.maintenanceChargeFormGrp.get("maintenanceFeatureId").value;

    if (maintenanceAmount === 0) {
      this.invalidAmount = true;
    } else if (!maintenanceCategories || (maintenanceCategories && maintenanceCategories.length === 0)) {
      this.invalidAmount = false;
      this.invalidCategories = true;
    } else {
      this.invalidAmount = false;
      this.invalidCategories = false;
      if (this.maintenanceChargeFormGrp.valid) {
        this.proceedSaveMaintenanceCharge(this.maintenanceChargeFormGrp.value);
      } else {
        this.snackBar.open(this.translate.instant("invalid_form_message"));
      }
    }
  }

  proceedSaveMaintenanceCharge(maintenanceChargeFormValue) {
    this.store.dispatch(updatePropertyMaintenanceConfig({ payload: maintenanceChargeFormValue }));
  }
}
