import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup, FormGroupDirective, NgControl, NgForm, Validators } from "@angular/forms";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatSelectChange } from "@angular/material/select";
import { BaseComponent } from "@core/components/base.component";
import { CustomValidators } from "@core/utilities";
import DateUtils from "@core/utilities/date-utils";
import Utils from "@core/utilities/utils";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IAmountChargeType } from "@shared/interfaces/amount-charge-type";
import { IMaintenanceCharge } from "@shared/interfaces/maintenance-charge";
import { IMaintenanceFeature } from "@shared/interfaces/maintenance-feature";
import { IUnit } from "@shared/interfaces/unit";
import { UnitService } from "@shared/services/unit/unit.service";
import { getAmountChargeTypes, getMaintenanceCharge, getMaintenanceFeature } from "@shared/store/actions/unit.actions";
import { Observable, Subject } from "rxjs";

/** Error when invalid control is dirty or touched*/
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: "app-rent-config",
  templateUrl: "./rent-config.component.html",
  styleUrls: ["./rent-config.component.scss"],
})
export class RentConfigComponent extends BaseComponent implements OnInit {
  @Output() updateUnitMaintenanceChargeSuccess: EventEmitter<null> = new EventEmitter<null>();
  @Output() updateUnitDetail: EventEmitter<null> = new EventEmitter<null>();
  @Output() unitRengConfigUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Input() unitDetail: IUnit;
  @Input() activePropertyId: string;
  maintenanceCharges$: Observable<IMaintenanceCharge[]>;
  maintenanceCharges: any;
  maintenanceFeatures$: Observable<IMaintenanceFeature[]>;
  maintenanceFeatures: IMaintenanceFeature[];
  amountChargeTypes$: Observable<IAmountChargeType[]>;
  amountChargeTypes: IAmountChargeType[];
  unitDetailForm: FormGroup;
  destroyed$ = new Subject<boolean>();
  rentAmountChargeTypes: IAmountChargeType[];
  selectedMaintenanceCharge: string;
  selectedRentCharge: string;
  unitOccupancy: any;
  paymentTerms: any;
  disableEndDate: boolean = true;
  endDateFilter: any;

  // files essentials
  errors = { invalidFileFormat: false, invalidFileSize: false };
  fileSizeInKb: number;
  maxFileSizeInMB: number;
  fileExtension: string;
  expectedExtensions: Array<string> = ["jpeg", "jpg", "png"];
  expectedFileSize: number = 2048;
  fineTypes = [];
  @ViewChild("maintenanceTaxAmount") maintenanceTaxAmount: ElementRef;
  @ViewChild("rentTaxAmount") rentTaxAmount: ElementRef;
  areaAndOccupyForm: FormGroup;
  rentConfigForm: FormGroup;
  unitDocumentForm: FormGroup;
  contractForm: FormGroup;
  submitted: boolean = false;
  selectedRentAmountChargeType: any;
  // currentUnitDetailId: string;
  minDate: Date;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private store: Store<any>,
    private unitService: UnitService,
    updateUnitAreaAndOccupancySuccess$: Actions<any>,
    updateUnitDocumentsSuccess$: Actions<any>,
    updateUnitRentConfigSuccess$: Actions<any>,
    updateUnitContractDateSuccess$: Actions<any>
  ) {
    super();

    // updateUnitAreaAndOccupancySuccess$
    //   .pipe(ofType(updateUnitAreaAndOccupancySuccess), takeUntil(this.destroyed$))
    //   .subscribe((d) => {
    //     this.store.dispatch(updateUnitDocuments({ payload: this.unitDocumentForm.value, id: this.unitDetail.id }));
    //   });

    // updateUnitDocumentsSuccess$.pipe(ofType(updateUnitDocumentsSuccess), takeUntil(this.destroyed$)).subscribe((d) => {
    //   this.store.dispatch(updateUnitContractDate({ payload: this.contractForm.value, id: this.unitDetail.id }));
    // });

    // updateUnitContractDateSuccess$
    //   .pipe(ofType(updateUnitContractDateSuccess), takeUntil(this.destroyed$))
    //   .subscribe((d) => {
    //     if (this.areaAndOccupyForm.get("occupy").value === "RENTED") {
    //       this.store.dispatch(
    //         updateUnitRentConfig({
    //           payload: this.rentConfigForm.value,
    //           id: this.unitDetail.id,
    //         })
    //       );
    //     }
    //   });
  }

  ngOnInit(): void {
    this.setAreaAndOccupyForm();
    this.setRentConfigForm();
    this.setunitDocumentForm();
    this.setContractForm();
    this.listenObservables();
    this.fetchMaintenanceCharge();
    this.fetchMaintenanceFeature();
    this.fetchAmountChargeTypes();
    this.unitOccupancy = this.unitService.unitOccupancy;
    this.fineTypes = this.unitService.fineTypes;
    this.paymentTerms = this.unitService.paymentTerms;
    this.minDate = new Date(new Date().getTime());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.unitDetail && changes.unitDetail.currentValue) {
      if (!this.areaAndOccupyForm) {
        this.setAreaAndOccupyForm();
      }
      if (!this.rentConfigForm) {
        this.setRentConfigForm();
      }
      if (!this.unitDocumentForm) {
        this.setunitDocumentForm();
      }
      if (!this.contractForm) {
        this.setContractForm();
      }

      this.buildRentConfigForm();
      this.buildAreaAndOccupyForm();
      this.buildUnitDocumentForm();
      this.buildContractForm();
    }
  }

  buildRentConfigForm() {
    // this.rentConfigForm.patchValue(this.unitDetail);
    this.rentConfigForm.patchValue(this.unitDetail.rentChargeForResidence);

    const invoiceStartDate = DateUtils.convertUtcDateTimeToLocalDate(
      this.unitDetail.rentChargeForResidence?.invoiceStartDate
    );
    this.rentConfigForm.get("invoiceStartDate").setValue(invoiceStartDate);

    if (this.unitDetail.rentChargeForResidence && this.unitDetail.rentChargeForResidence.dueDays === 0) {
      this.rentConfigForm.get("dueDays").setValue(null);
    }
  }

  buildUnitDocumentForm() {
    this.unitDocumentForm.patchValue(this.unitDetail);
  }

  buildAreaAndOccupyForm() {
    this.removeEmptyOrNull(this.unitDetail);
    this.areaAndOccupyForm.patchValue(this.unitDetail);

    if (this.unitDetail.area === 0) {
      this.areaAndOccupyForm.get("area").setValue(null);
    }
    if (this.unitDetail.occupy === "EMPTY") {
      this.areaAndOccupyForm.get("occupy").setValue(null);
    }
  }

  buildContractForm() {
    const contractStartDate = DateUtils.convertUtcDateTimeToLocalDate(
      this.unitDetail.contractDateForResidence?.contractStartDate
    );
    this.contractForm.get("contractStartDate").setValue(contractStartDate);

    const contractEndDate = DateUtils.convertUtcDateTimeToLocalDate(
      this.unitDetail.contractDateForResidence?.contractEndDate
    );
    this.contractForm.get("contractEndDate").setValue(contractEndDate);
  }

  setAreaAndOccupyForm() {
    this.areaAndOccupyForm = this.formBuilder.group({
      area: ["", Validators.required],
      propertyId: [],
      occupy: ["", Validators.required],
    });

    this.areaAndOccupyForm.get("occupy").valueChanges.subscribe((d) => {
      if (d === "RENTED" && this.rentAmountChargeTypes) {
        if (this.rentAmountChargeTypes.length > 0 && !this.selectedRentAmountChargeType) {
          this.rentConfigForm.get("amountChargeTypeId").setValue(this.rentAmountChargeTypes[1].id);
        }

        this.rentConfigForm.get("amount").setValidators(Validators.required);
        this.rentConfigForm.get("amount").updateValueAndValidity();
        this.rentConfigForm.get("amount").markAllAsTouched();

        this.rentConfigForm.get("rentChargeFrequencyInterval").setValidators(Validators.required);
        this.rentConfigForm.get("rentChargeFrequencyInterval").updateValueAndValidity();
        this.rentConfigForm.get("rentChargeFrequencyInterval").markAllAsTouched();

        this.rentConfigForm.get("invoiceStartDate").setValidators(Validators.required);
        this.rentConfigForm.get("invoiceStartDate").updateValueAndValidity();
        this.rentConfigForm.get("invoiceStartDate").markAllAsTouched();
      } else {
        this.rentConfigForm.get("amount").clearValidators();
        this.rentConfigForm.get("amount").updateValueAndValidity();

        this.rentConfigForm.get("rentChargeFrequencyInterval").clearValidators();
        this.rentConfigForm.get("rentChargeFrequencyInterval").updateValueAndValidity();

        this.rentConfigForm.get("invoiceStartDate").clearValidators();
        this.rentConfigForm.get("invoiceStartDate").updateValueAndValidity();
      }
    });
  }

  setunitDocumentForm() {
    this.unitDocumentForm = this.formBuilder.group({
      bluePrintFile: ["", [Validators.required, CustomValidators.requiredFileSize(5120)]],
      contractFileForResidence: ["", [Validators.required, CustomValidators.requiredFileSize(5120)]],
    });
  }

  setContractForm() {
    this.contractForm = this.formBuilder.group({
      contractStartDate: ["", Validators.required],
      contractEndDate: ["", Validators.required],
    });
  }

  setRentConfigForm() {
    this.rentConfigForm = this.formBuilder.group({
      rentChargeFrequencyInterval: [""],
      amountChargeTypeId: [""],
      amount: [""],
      includeTax: [false],
      taxPercent: [],
      includeFine: [false],
      fineChargeFrequency: [],
      fineAmount: [],
      dueDays: [],
      invoiceStartDate: [""],
    });
    this.rentConfigForm.get("amountChargeTypeId").valueChanges.subscribe((d) => {
      if (this.rentAmountChargeTypes && this.rentAmountChargeTypes.length > 0) {
        this.selectedRentAmountChargeType = this.rentAmountChargeTypes.find(
          (rentAmountChargeType) => rentAmountChargeType.id === d
        );
      }
    });

    this.rentConfigForm.get("includeTax").valueChanges.subscribe((d) => {
      if (d) {
        this.rentConfigForm.get("taxPercent").setValidators(Validators.required);
        this.rentConfigForm.get("taxPercent").updateValueAndValidity();
        this.rentConfigForm.get("taxPercent").markAllAsTouched();
      } else {
        this.rentConfigForm.get("taxPercent").clearValidators();
        this.rentConfigForm.get("taxPercent").updateValueAndValidity();
      }
    });

    this.rentConfigForm.get("includeFine").valueChanges.subscribe((d) => {
      if (d) {
        this.rentConfigForm.get("fineChargeFrequency").setValidators(Validators.required);
        this.rentConfigForm.get("fineChargeFrequency").updateValueAndValidity();
        this.rentConfigForm.get("fineChargeFrequency").markAllAsTouched();

        this.rentConfigForm.get("fineAmount").setValidators(Validators.required);
        this.rentConfigForm.get("fineAmount").updateValueAndValidity();
        this.rentConfigForm.get("fineAmount").markAllAsTouched();

        this.rentConfigForm
          .get("dueDays")
          .setValidators([Validators.required, Validators.min(2), Validators.max(1000)]);
        this.rentConfigForm.get("dueDays").updateValueAndValidity();
        this.rentConfigForm.get("dueDays").markAllAsTouched();
      } else {
        this.rentConfigForm.get("fineChargeFrequency").clearValidators();
        this.rentConfigForm.get("fineChargeFrequency").updateValueAndValidity();

        this.rentConfigForm.get("fineAmount").clearValidators();
        this.rentConfigForm.get("fineAmount").updateValueAndValidity();

        this.rentConfigForm.get("dueDays").clearValidators();
        this.rentConfigForm.get("dueDays").updateValueAndValidity();
      }
    });
  }

  onMaintenanceChargeChange(maintenanceCharge: MatSelectChange) {
    this.selectedMaintenanceCharge = maintenanceCharge.value;
  }

  onRentChargeChange(maintenanceCharge: MatSelectChange) {
    this.selectedRentCharge = maintenanceCharge.value;
  }

  listenObservables() {
    this.maintenanceCharges$ = this.store.select((store) => store.sharedModule.unit.maintenanceCharges);
    this.maintenanceFeatures$ = this.store.select((store) => store.sharedModule.unit.maintenanceFeatures);
    this.amountChargeTypes$ = this.store.select((store) => store.sharedModule.unit.amountChargeTypes);

    this.maintenanceCharges$.subscribe((d) => {
      this.maintenanceCharges = d;
    });
    this.maintenanceFeatures$.subscribe((d) => {
      this.maintenanceFeatures = d;
    });
    this.amountChargeTypes$.subscribe((d) => {
      this.rentAmountChargeTypes = d;
      this.selectedRentAmountChargeType = this.rentAmountChargeTypes.find(
        (rentAmountChargeType) => rentAmountChargeType.id === this.rentConfigForm.get("amountChargeTypeId").value
      );
    });
  }

  fetchMaintenanceCharge() {
    this.store.dispatch(getMaintenanceCharge(null));
  }

  fetchMaintenanceFeature() {
    this.store.dispatch(getMaintenanceFeature(null));
  }

  fetchAmountChargeTypes() {
    this.store.dispatch(getAmountChargeTypes(null));
  }

  isChecked(maintenanceFeature: IMaintenanceFeature) {
    if (
      maintenanceFeature &&
      this.unitDetail &&
      this.unitDetail.maintenanceChargeForResidence.maintenanceFeatureId &&
      this.unitDetail.maintenanceChargeForResidence.maintenanceFeatureId.length > 0
    ) {
      return this.unitDetail.maintenanceChargeForResidence.maintenanceFeatureId.includes(maintenanceFeature.id);
    }
  }

  onMaintenanceFeatureChange(maintenanceFeatureChange: MatCheckboxChange, maintenanceFeature: IMaintenanceFeature) {
    if (maintenanceFeatureChange.checked) {
      if (
        this.unitDetailForm.get("maintenanceFeatureId").value &&
        this.unitDetailForm.get("maintenanceFeatureId").value.length > 0
      ) {
        this.unitDetailForm.get("maintenanceFeatureId").value.push(maintenanceFeature.id);
      } else {
        const arr = [];
        arr.push(maintenanceFeature.id);
        this.unitDetailForm.get("maintenanceFeatureId").setValue(arr);
      }
    } else {
      const filteredValue = this.unitDetailForm
        .get("maintenanceFeatureId")
        .value.filter((id) => id !== maintenanceFeature.id);
      this.unitDetailForm.get("maintenanceFeatureId").setValue(filteredValue);
    }
  }

  onContractStartDate() {
    if (this.contractForm.get("contractStartDate").valid) {
      this.disableEndDate = false;
      this.contractForm.get("contractEndDate").setValue("");
      this.endDateFilter = (d: Date | null): boolean => {
        return d > this.contractForm.get("contractStartDate").value;
      };
    }
  }

  onUpdateRentConfig() {
    this.submitted = true;
    this.areaAndOccupyForm.markAllAsTouched();
    if (
      this.areaAndOccupyForm.valid &&
      this.unitDocumentForm.valid &&
      this.rentConfigForm.valid &&
      this.contractForm.valid
    ) {
      if (this.rentConfigForm.get("amount")) {
        this.rentConfigForm.get("amount").setValue(parseFloat(this.rentConfigForm.get("amount").value));
      }

      if (this.rentConfigForm.get("dueDays")) {
        this.rentConfigForm.get("dueDays").setValue(parseInt(this.rentConfigForm.get("dueDays").value));
      }

      this.proceedRentConfigUpdate();
      // if (this.contractForm.get("contractEndDate")) {
      //   const parsedEndDate = DateUtils.convertDateTimeFormat(
      //     this.contractForm.get("contractEndDate").value,
      //     "YYYY-MM-DD"
      //   );
      //   this.contractForm.get("contractEndDate").setValue(parsedEndDate);
      // }

      // if (this.contractForm.get("contractStartDate")) {
      //   const parsedStartDate = DateUtils.convertDateTimeFormat(
      //     this.contractForm.get("contractStartDate").value,
      //     "YYYY-MM-DD"
      //   );
      //   this.contractForm.get("contractStartDate").setValue(parsedStartDate);
      // }

      // this.store.dispatch(
      //   updateUnitAreaAndOccupancy({ payload: this.areaAndOccupyForm.value, id: this.unitDetail.id })
      // );
    } else {
      this.snackBar.open(this.getTranslatedString("invalid_form_message"));
    }
  }

  setInvoiceStartDate() {
    if (this.rentConfigForm.get("invoiceStartDate").valid) {
      const invoiceStartDate = DateUtils.convertDateTimeFormat(
        this.rentConfigForm.get("invoiceStartDate").value,
        "YYYY-MM-DD"
      );
      this.rentConfigForm.get("invoiceStartDate").setValue(invoiceStartDate);
    }
  }

  /**
   * API call sequentially:
   * UPDATE AREA AND OCCUPANCY
   * UPDATE DOCUMENT
   * UPDATE CONTRACT DATE
   * UPDATE RENT CONFIGURATION
   */
  proceedRentConfigUpdate() {
    const contractDatePayload = {
      contractStartDate: DateUtils.convertLocalDateTimeToUtcDateTime(this.contractForm.get("contractStartDate").value),
      contractEndDate: DateUtils.convertLocalDateTimeToUtcDateTime(this.contractForm.get("contractEndDate").value),
    };

    this.setInvoiceStartDate();

    this.unitService.updateUnitAreaAndOccupancy(this.areaAndOccupyForm.value, this.unitDetail.id).subscribe(
      () => {
        this.unitService.uploadDocument(this.unitDocumentForm.value, this.unitDetail.id).subscribe(
          () => {
            this.unitService.updateUnitContractDate(contractDatePayload, this.unitDetail.id).subscribe(
              () => {
                if (this.areaAndOccupyForm.get("occupy").value === "RENTED") {
                  const localInvoiceStartDate = this.rentConfigForm.get("invoiceStartDate").value;
                  this.unitService
                    .updateUnitRentConfig(
                      {
                        ...this.rentConfigForm.value,
                        invoiceStartDate: localInvoiceStartDate
                          ? DateUtils.getUtcDateTime(localInvoiceStartDate)
                          : null,
                      },
                      this.unitDetail.id
                    )
                    .subscribe(
                      () => {
                        this.snackBar.open(this.getTranslatedString("rent_configuration_update_success"));
                        this.unitRengConfigUpdated.emit();
                      },
                      (err) => {
                        if (err && this.rentConfigForm) {
                          this.errorMessageService.handleServerSideError(this.rentConfigForm, err);
                        }
                      }
                    );
                } else {
                  this.snackBar.open(this.getTranslatedString("rent_configuration_update_success"));
                  this.unitRengConfigUpdated.emit();
                }
              },
              (err) => {
                if (err && this.contractForm) {
                  this.errorMessageService.handleServerSideError(this.contractForm, err);
                }
              }
            );
          },
          (err) => {
            if (err && this.unitDocumentForm) {
              this.errorMessageService.handleServerSideError(this.unitDocumentForm, err);
            }
          }
        );
      },
      (err) => {
        if (err && this.areaAndOccupyForm) {
          this.errorMessageService.handleServerSideError(this.areaAndOccupyForm, err);
        }
      }
    );
  }

  getAmount() {
    const totalAmount = this.getRentTotalAmount();
    return Utils.getRoundOffValue((totalAmount * this.rentConfigForm.get("taxPercent").value) / 100);
  }

  removeEmptyOrNull(obj) {
    Object.keys(obj).forEach(
      (k) =>
        (obj[k] && typeof obj[k] === "object" && this.removeEmptyOrNull(obj[k])) ||
        (!obj[k] && obj[k] !== undefined && delete obj[k])
    );

    return obj;
  }

  showRentTotalAmountField() {
    return this.selectedRentAmountChargeType?.amountChargeTypeName === "PER_SQ_FT";
  }

  getRentTotalAmount() {
    if (this.selectedRentAmountChargeType?.amountChargeTypeName === "PER_SQ_FT") {
      const area = this.areaAndOccupyForm.get("area").value ?? 0;
      const amount = this.rentConfigForm.get("amount").value ?? 0;
      return Utils.getRoundOffValue(amount * area);
    }
    return Utils.getRoundOffValue(this.rentConfigForm.get("amount").value);
  }
}
