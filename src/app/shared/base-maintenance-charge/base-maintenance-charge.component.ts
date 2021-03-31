import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { MatCheckboxChange } from "@angular/material/checkbox";
import Utils from "@core/utilities/utils";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IMaintenanceCharge } from "@shared/interfaces/maintenance-charge";
import { IMaintenanceChargeConfig } from "@shared/interfaces/maintenance-charge-config";
import { IMaintenanceFeature } from "@shared/interfaces/maintenance-feature";
import { IUnitMaintenanceConfig } from "@shared/interfaces/unit";
import { UnitService } from "@shared/services/unit/unit.service";
import { getMaintenanceCharge, getMaintenanceFeature } from "@shared/store/actions/unit.actions";
import { Observable, Subject } from "rxjs";
import { BaseComponent } from "./../../core/components/base.component";

@Component({
  template: "",
})
export class BaseMaintenanceChargeComponent extends BaseComponent {
  fineTypes: any = [];
  paymentTerms: any = [];
  maintenanceChargeFormGrp: FormGroup;
  @ViewChild("taxAmount") taxAmount: ElementRef;
  @Output() saveMaintenanceCharge: EventEmitter<null> = new EventEmitter<null>();
  maintenanceConfigDetail$: Observable<IMaintenanceChargeConfig>;
  maintenanceConfigDetail: IMaintenanceChargeConfig | IUnitMaintenanceConfig;
  maintenanceCharges$: Observable<IMaintenanceCharge[]>;
  maintenanceCharges: IMaintenanceCharge[];
  maintenanceFeatures$: Observable<IMaintenanceFeature[]>;
  maintenanceFeatures: IMaintenanceFeature[];
  selectedMaintenanceCharge: string;
  amountChargeTypes: any;
  invalidAmount: boolean = false;
  invalidCategories: boolean = false;
  destroyed$ = new Subject<boolean>();
  error$: Observable<Error>;
  selectedMaintenanceChargeObj: any;

  constructor(
    protected store: Store<any>,
    protected unitService: UnitService,
    updatePropertyMaintenanceConfigSuccess$: Actions
  ) {
    super();
    this.initiate();
  }

  initiate() {
    this.setMaintenanceChargeForm();
    this.fineTypes = this.unitService.fineTypes;
    this.paymentTerms = this.unitService.paymentTerms;
    this.fetchMaintenanceCharge();
    this.fetchMaintenanceFeature();
    this.listenObservables();
    this.trackMaintenanceChargeFormChange();
    this.error$.subscribe((err) => {
      if (err && this.maintenanceChargeFormGrp) {
        this.errorMessageService.handleServerSideError(this.maintenanceChargeFormGrp, err);
      }
    });
  }

  setMaintenanceChargeForm() {
    this.maintenanceChargeFormGrp = this.formBuilder.group({
      maintenanceChargeTypeId: [""],
      amountChargeTypeId: [],
      amount: ["", Validators.required],
      maintenanceChargeFrequencyInterval: [],
      includeTax: [false],
      taxPercent: [],
      includeFine: [false],
      fineChargeFrequency: [],
      fineAmount: [],
      dueDays: [],
      firstInvoiceGenerationDay: [""],
      maintenanceFeatureId: [],
      remarks: ["", [Validators.maxLength(200)]],
    });
  }

  fetchMaintenanceCharge() {
    this.store.dispatch(getMaintenanceCharge(null));
  }

  fetchMaintenanceFeature() {
    this.store.dispatch(getMaintenanceFeature(null));
  }

  listenObservables() {
    this.maintenanceCharges$ = this.store.select((store) => store.sharedModule.unit.maintenanceCharges);
    this.maintenanceCharges$.subscribe((d) => {
      this.maintenanceCharges = d;

      this.selectedMaintenanceChargeObj = this.maintenanceCharges.find(
        (maintenanceCharge) =>
          maintenanceCharge.id === this.maintenanceChargeFormGrp.get("maintenanceChargeTypeId").value
      );
    });
    this.maintenanceFeatures$ = this.store.select((store) => store.sharedModule.unit.maintenanceFeatures);
    this.maintenanceFeatures$.subscribe((d) => {
      this.maintenanceFeatures = d;
    });

    this.error$ = this.store.select((store) => store.sharedModule.unit.error);
  }

  buildMaintenanceChargeForm(maintenanceConfigDetail) {
    this.selectedMaintenanceCharge = maintenanceConfigDetail.maintenanceChargeTypeId;
    this.maintenanceChargeFormGrp.patchValue(maintenanceConfigDetail);

    if (maintenanceConfigDetail.taxPercent === 0) {
      this.maintenanceChargeFormGrp.get("taxPercent").setValue(null);
    }

    if (maintenanceConfigDetail.dueDays === 0) {
      this.maintenanceChargeFormGrp.get("dueDays").setValue(null);
    }

    if (this.taxAmount) {
      this.taxAmount.nativeElement.value = maintenanceConfigDetail.taxAmount;
    }
  }

  trackMaintenanceChargeFormChange() {
    this.maintenanceChargeFormGrp.get("includeTax").valueChanges.subscribe((d) => {
      if (d) {
        this.maintenanceChargeFormGrp.get("taxPercent").setValidators(Validators.required);
        this.maintenanceChargeFormGrp.get("taxPercent").updateValueAndValidity();
        this.maintenanceChargeFormGrp.get("taxPercent").markAllAsTouched();
      } else {
        this.maintenanceChargeFormGrp.get("taxPercent").clearValidators();
        this.maintenanceChargeFormGrp.get("taxPercent").updateValueAndValidity();
      }
    });

    this.maintenanceChargeFormGrp.get("includeFine").valueChanges.subscribe((d) => {
      if (d) {
        this.maintenanceChargeFormGrp.get("fineChargeFrequency").setValidators([Validators.required]);
        this.maintenanceChargeFormGrp.get("fineAmount").setValidators([Validators.required, Validators.min(1)]);
        this.maintenanceChargeFormGrp
          .get("dueDays")
          .setValidators([Validators.required, Validators.min(2), Validators.max(1000)]);
        this.maintenanceChargeFormGrp.get("fineChargeFrequency").updateValueAndValidity();
        this.maintenanceChargeFormGrp.get("fineAmount").updateValueAndValidity();
        this.maintenanceChargeFormGrp.get("dueDays").updateValueAndValidity();
      } else {
        this.maintenanceChargeFormGrp.get("fineChargeFrequency").setValue("");
        this.maintenanceChargeFormGrp.get("fineAmount").setValue("");
        this.maintenanceChargeFormGrp.get("dueDays").setValue("");
        this.maintenanceChargeFormGrp.get("fineChargeFrequency").clearValidators();
        this.maintenanceChargeFormGrp.get("fineAmount").clearValidators();
        this.maintenanceChargeFormGrp.get("dueDays").clearValidators();
        this.maintenanceChargeFormGrp.get("fineChargeFrequency").updateValueAndValidity();
        this.maintenanceChargeFormGrp.get("fineAmount").updateValueAndValidity();
        this.maintenanceChargeFormGrp.get("dueDays").updateValueAndValidity();
      }
    });
    this.maintenanceChargeFormGrp.get("maintenanceChargeTypeId").valueChanges.subscribe((d) => {
      if (d && this.maintenanceCharges && this.maintenanceCharges.length > 0) {
        this.selectedMaintenanceChargeObj = this.maintenanceCharges.find(
          (maintenanceCharge) => maintenanceCharge.id === d
        );

        this.amountChargeTypes = this.selectedMaintenanceChargeObj.amountChargeTypes;

        if (this.selectedMaintenanceChargeObj.maintenanceChargeTypeName === "ONE_TIME_FIXED") {
          this.maintenanceChargeFormGrp.get("amountChargeTypeId").setValue(null);
          this.maintenanceChargeFormGrp.get("maintenanceChargeFrequencyInterval").setValue(null);
          this.maintenanceChargeFormGrp.get("firstInvoiceGenerationDay").setValue(null);
          this.maintenanceChargeFormGrp.get("invoiceStartDate")?.setValue(null);
          this.maintenanceChargeFormGrp.get("amountChargeTypeId").clearValidators();
          this.maintenanceChargeFormGrp.get("maintenanceChargeFrequencyInterval").clearValidators();
          this.maintenanceChargeFormGrp.get("firstInvoiceGenerationDay").clearValidators();
          this.maintenanceChargeFormGrp.get("invoiceStartDate")?.clearValidators();
          this.maintenanceChargeFormGrp.get("amountChargeTypeId").updateValueAndValidity();
          this.maintenanceChargeFormGrp.get("maintenanceChargeFrequencyInterval").updateValueAndValidity();
          this.maintenanceChargeFormGrp.get("firstInvoiceGenerationDay").updateValueAndValidity();
          this.maintenanceChargeFormGrp.get("invoiceStartDate")?.updateValueAndValidity();
        } else {
          this.maintenanceChargeFormGrp.get("amountChargeTypeId").setValidators([Validators.required]);
          this.maintenanceChargeFormGrp.get("maintenanceChargeFrequencyInterval").setValidators([Validators.required]);
          this.maintenanceChargeFormGrp
            .get("firstInvoiceGenerationDay")
            .setValidators([Validators.required, Validators.min(1), Validators.max(28)]);
          this.maintenanceChargeFormGrp.get("invoiceStartDate")?.setValidators([Validators.required]);
        }
      }
    });
  }

  isChecked(maintenanceFeature: IMaintenanceFeature) {
    if (
      maintenanceFeature &&
      this.maintenanceConfigDetail &&
      this.maintenanceConfigDetail.maintenanceFeatureId &&
      this.maintenanceConfigDetail.maintenanceFeatureId.length > 0
    ) {
      return this.maintenanceConfigDetail.maintenanceFeatureId.includes(maintenanceFeature.id);
    }
  }

  onMaintenanceFeatureChange(maintenanceFeatureChange: MatCheckboxChange, maintenanceFeature: IMaintenanceFeature) {
    if (maintenanceFeatureChange.checked) {
      if (
        this.maintenanceChargeFormGrp.get("maintenanceFeatureId").value &&
        this.maintenanceChargeFormGrp.get("maintenanceFeatureId").value.length > 0
      ) {
        this.maintenanceChargeFormGrp.get("maintenanceFeatureId").value.push(maintenanceFeature.id);
      } else {
        const arr = [];
        arr.push(maintenanceFeature.id);
        this.maintenanceChargeFormGrp.get("maintenanceFeatureId").setValue(arr);
      }
    } else {
      const filteredValue = this.maintenanceChargeFormGrp
        .get("maintenanceFeatureId")
        .value.filter((id) => id !== maintenanceFeature.id);
      this.maintenanceChargeFormGrp.get("maintenanceFeatureId").setValue(filteredValue);
    }
  }

  getlabel() {
    return this.getTranslatedString(this.maintenanceConfigDetail ? "common.update" : "common.save");
  }

  onTaxPercentChange(event: any) {
    const amount = this.maintenanceChargeFormGrp.get("amount").value;
    const percent = event.target.value;
    this.taxAmount.nativeElement.value = Utils.getRoundOffValue((amount * percent) / 100);
  }

  getTaxAmount() {
    return Utils.getRoundOffValue(
      (this.maintenanceChargeFormGrp.get("amount").value * this.maintenanceChargeFormGrp.get("taxPercent").value) / 100
    );
  }
}
