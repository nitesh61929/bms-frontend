import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { SnackBarService } from "@core/services";
import DateUtils from "@core/utilities/date-utils";
import Utils from "@core/utilities/utils";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { BaseMaintenanceChargeComponent } from "@shared/base-maintenance-charge/base-maintenance-charge.component";
import { IUnit } from "@shared/interfaces/unit";
import { UnitService } from "@shared/services/unit/unit.service";
import { updateUnitMaintenanceCharge } from "@shared/store/actions/unit.actions";
import { Observable } from "rxjs";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid);
  }
}

@Component({
  selector: "app-unit-detail-maintenance-charge",
  templateUrl: "./unit-detail-maintenance-charge.component.html",
  styleUrls: ["./unit-detail-maintenance-charge.component.scss"],
})
export class UnitDetailMaintenanceChargeComponent extends BaseMaintenanceChargeComponent implements OnInit {
  @Input() unitDetail: IUnit;
  @Input() unitArea: number;
  matcher = new MyErrorStateMatcher();
  selectedAmountChargeType: any;
  minDate: Date;
  error$: Observable<Error>;

  constructor(
    store: Store<any>,
    unitService: UnitService,
    updatePropertyMaintenanceConfigSuccess$: Actions,
    private snackbar: SnackBarService
  ) {
    super(store, unitService, updatePropertyMaintenanceConfigSuccess$);
  }

  ngOnInit(): void {
    this.minDate = new Date(new Date().getTime());
    this.maintenanceChargeFormGrp.addControl("invoiceStartDate", new FormControl("", [Validators.required]));
    this.listenAmountChargeTypeChange();
    this.error$ = this.store.select((store) => store.sharedModule.unit.error);
    this.error$.subscribe((err) => {
      if (err && this.maintenanceChargeFormGrp) {
        this.errorMessageService.handleServerSideError(this.maintenanceChargeFormGrp, err);
      }
    });
  }

  listenAmountChargeTypeChange() {
    this.maintenanceChargeFormGrp.get("amountChargeTypeId").valueChanges.subscribe((d) => {
      this.selectedAmountChargeType = [];
      if (this.amountChargeTypes && this.amountChargeTypes.length > 0) {
        this.selectedAmountChargeType = this.amountChargeTypes.find((amountChargeType) => amountChargeType.id === d);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.unitDetail && changes.unitDetail.currentValue) {
      this.maintenanceConfigDetail = this.unitDetail.maintenanceChargeForResidence;
      this.buildMaintenanceChargeForm(this.unitDetail.maintenanceChargeForResidence);
      this.maintenanceChargeFormGrp.addControl("invoiceStartDate", new FormControl(""));
      if (this.maintenanceConfigDetail && this.maintenanceConfigDetail.invoiceStartDate) {
        const invoiceStartDate = DateUtils.convertUtcDateTimeToLocalDate(
          this.unitDetail.maintenanceChargeForResidence?.invoiceStartDate
        );
        this.maintenanceChargeFormGrp.get("invoiceStartDate").setValue(invoiceStartDate);
      } else {
        this.maintenanceChargeFormGrp.get("invoiceStartDate").setValue(null);
      }
    }
  }

  setInvoiceStartDate() {
    if (this.maintenanceChargeFormGrp.get("invoiceStartDate").valid) {
      if (this.maintenanceChargeFormGrp.get("invoiceStartDate").value !== null) {
        const invoiceStartDate = DateUtils.convertDateTimeFormat(
          this.maintenanceChargeFormGrp.get("invoiceStartDate").value,
          "YYYY-MM-DD"
        );

        this.maintenanceChargeFormGrp.get("invoiceStartDate").setValue(invoiceStartDate);
      }
    }
  }

  onUpdateUnitMaintenanceCharge() {
    if (!this.unitArea || this.unitArea == 0) {
      return this.snackbar.open(this.getTranslatedString("area_not_configured"));
    }

    if (this.maintenanceChargeFormGrp.valid) {
      this.setInvoiceStartDate();
      const localInvoiceStartDate = this.maintenanceChargeFormGrp.get("invoiceStartDate").value;
      this.store.dispatch(
        updateUnitMaintenanceCharge({
          payload: {
            ...this.maintenanceChargeFormGrp.value,
            invoiceStartDate: localInvoiceStartDate ? DateUtils.getUtcDateTime(localInvoiceStartDate) : null,
          },
          id: this.unitDetail.id,
        })
      );
    } else {
      this.snackBar.open(this.getTranslatedString("invalid_form_message"));
    }
  }

  showTotalAmountField() {
    return this.selectedAmountChargeType?.amountChargeTypeName === "PER_SQ_FT";
  }

  getTotalAmount() {
    if (this.selectedAmountChargeType?.amountChargeTypeName === "PER_SQ_FT") {
      const area = this.unitArea ?? 0;
      const amount = this.maintenanceChargeFormGrp.get("amount").value ?? 0;
      return Utils.getRoundOffValue(amount * area);
    }
    return Utils.getRoundOffValue(this.maintenanceChargeFormGrp.get("amount").value);
  }

  getTaxAmount() {
    const totalAmount = this.getTotalAmount();
    return Utils.getRoundOffValue((totalAmount * this.maintenanceChargeFormGrp.get("taxPercent").value) / 100);
  }
}
