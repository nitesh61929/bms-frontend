// import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from "@angular/core";
// import { FormGroup, Validators } from "@angular/forms";
// import { BaseComponent } from "@core/components";
// import { Store } from "@ngrx/store";
// import { IProperty } from "@shared/interfaces";
// import { IUnitElectricityConfig } from "@shared/interfaces/unit-electricity-config";
// import { getPropertyElectricityConfig } from "@shared/store/actions/unit.actions";
// import { Observable } from "rxjs/internal/Observable";

// @Component({
//   selector: "app-electricity-charge",
//   templateUrl: "./electricity-charge.component.html",
// })
// export class ElectricityChargeComponent extends BaseComponent implements OnInit {
//   @Input() electricityChargeFormGrp: FormGroup;
//   @Input() propertyDetail: IProperty;
//   @Input() fineTypes: any;
//   @Input() paymentTerms: any;
//   @Output() saveElectricityCharge: EventEmitter<null> = new EventEmitter<null>();
//   electricityConfigDetail$: Observable<IUnitElectricityConfig>;
//   electricityConfigDetail: IUnitElectricityConfig;
//   error$: Observable<Error>;

//   constructor(private store: Store<any>) {
//     super();
//   }

//   ngOnInit(): void {
//     this.listenObservables();
//     this.error$.subscribe((err) => {
//       if (err && this.electricityChargeFormGrp) {
//         this.errorMessageService.handleServerSideError(this.electricityChargeFormGrp, err);
//       }
//     });
//   }

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes.propertyDetail && changes.propertyDetail.currentValue) {
//       if (this.propertyDetail) {
//         this.fetchMaintenanceConfig();
//       }
//     }
//   }

//   fetchMaintenanceConfig() {
//     this.store.dispatch(getPropertyElectricityConfig({ id: this.propertyDetail.id }));
//   }

//   listenObservables() {
//     this.electricityConfigDetail$ = this.store.select((store) => store.sharedModule.unit.propertyUnitElectricityConfig);
//     this.electricityConfigDetail$.subscribe((d) => {
//       if (d) {
//         this.electricityConfigDetail = d;
//         this.buildMaintenanceChargeForm();
//       }
//     });
//     this.error$ = this.store.select((store) => store.sharedModule.unit.error);
//   }

//   buildMaintenanceChargeForm() {
//     this.electricityChargeFormGrp.patchValue(this.electricityConfigDetail);
//     if (this.electricityConfigDetail.includeFine) {
//       this.electricityChargeFormGrp.get("fineChargeFrequency").enable();
//       this.electricityChargeFormGrp.get("fineAmount").enable();
//     }
//   }

//   onFineSelection(event: any) {
//     if (event.checked) {
//       this.electricityChargeFormGrp.get("fineChargeFrequency").enable();
//       this.electricityChargeFormGrp.get("fineAmount").enable();
//       this.electricityChargeFormGrp.get("fineChargeFrequency").setValidators([Validators.required]);
//       this.electricityChargeFormGrp.get("fineAmount").setValidators([Validators.required, Validators.min(1)]);
//       this.electricityChargeFormGrp.get("fineChargeFrequency").updateValueAndValidity();
//       this.electricityChargeFormGrp.get("fineAmount").updateValueAndValidity();
//     } else {
//       this.electricityChargeFormGrp.get("fineChargeFrequency").setValue("");
//       this.electricityChargeFormGrp.get("fineAmount").setValue("");
//       this.electricityChargeFormGrp.get("fineChargeFrequency").clearValidators();
//       this.electricityChargeFormGrp.get("fineAmount").clearValidators();
//       this.electricityChargeFormGrp.get("fineChargeFrequency").updateValueAndValidity();
//       this.electricityChargeFormGrp.get("fineAmount").updateValueAndValidity();
//       this.electricityChargeFormGrp.get("fineChargeFrequency").disable();
//       this.electricityChargeFormGrp.get("fineAmount").disable();
//     }
//   }

//   onSaveElectricityCharge() {
//     if (this.electricityChargeFormGrp.valid) {
//       this.saveElectricityCharge.emit(this.electricityChargeFormGrp.value);
//     } else {
    //   this.snackBar.open(this.translate.instant("invalid_form_message"));
    // }
//   }
// }
