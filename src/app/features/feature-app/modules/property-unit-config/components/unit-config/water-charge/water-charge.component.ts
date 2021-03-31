// import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from "@angular/core";
// import { FormGroup, Validators } from "@angular/forms";
// import { BaseComponent } from "@core/components";
// import { Store } from "@ngrx/store";
// import { IProperty } from "@shared/interfaces";
// import { IWaterChargeConfig } from "@shared/interfaces/water-charge-config";
// import { getPropertyMaintenanceConfig } from "@shared/store/actions/unit.actions";
// import { Observable } from "rxjs";

// @Component({
//   selector: "app-water-charge",
//   templateUrl: "./water-charge.component.html",
// })
// export class WaterChargeComponent extends BaseComponent implements OnInit {
//   @Input() waterChargeFormGrp: FormGroup;
//   @Input() propertyDetail: IProperty;
//   @Input() fineTypes: any;
//   @Input() paymentTerms: any;
//   @Output() saveWaterCharge: EventEmitter<null> = new EventEmitter<null>();
//   waterConfigDetail$: Observable<IWaterChargeConfig>;
//   waterConfigDetail: IWaterChargeConfig;
//   error$: Observable<Error>;

//   constructor(private store: Store<any>) {
//     super();
//   }

//   ngOnInit(): void {
//     this.listenObservables();
//     this.error$.subscribe((err) => {
//       if (err && this.waterChargeFormGrp) {
//         this.errorMessageService.handleServerSideError(this.waterChargeFormGrp, err);
//       }
//     });
//   }

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes.propertyDetail && changes.propertyDetail.currentValue) {
//       if (this.propertyDetail) {
//         this.fetchWaterConfig();
//       }
//     }
//   }

//   fetchWaterConfig() {
//     this.store.dispatch(getPropertyMaintenanceConfig({ id: this.propertyDetail.id }));
//   }

//   listenObservables() {
//     this.waterConfigDetail$ = this.store.select((store) => store.sharedModule.unit.propertyWaterConfig);
//     this.waterConfigDetail$.subscribe((d) => {
//       if (d) {
//         this.waterConfigDetail = d;
//         this.buildMaintenanceChargeForm();
//       }
//     });
//     this.error$ = this.store.select((store) => store.sharedModule.unit.error);
//   }

//   buildMaintenanceChargeForm() {
//     this.waterChargeFormGrp.patchValue(this.waterConfigDetail);
//     if (this.waterConfigDetail.includeFine) {
//       this.waterChargeFormGrp.get("fineChargeFrequency").enable();
//       this.waterChargeFormGrp.get("fineAmount").enable();
//     }
//   }

//   onFineSelection(event: any) {
//     if (event.checked) {
//       this.waterChargeFormGrp.get("fineChargeFrequency").enable();
//       this.waterChargeFormGrp.get("fineAmount").enable();
//       this.waterChargeFormGrp.get("fineChargeFrequency").setValidators([Validators.required]);
//       this.waterChargeFormGrp.get("fineAmount").setValidators([Validators.required, Validators.min(1)]);
//       this.waterChargeFormGrp.get("fineChargeFrequency").updateValueAndValidity();
//       this.waterChargeFormGrp.get("fineAmount").updateValueAndValidity();
//     } else {
//       this.waterChargeFormGrp.get("fineChargeFrequency").setValue("");
//       this.waterChargeFormGrp.get("fineAmount").setValue("");
//       this.waterChargeFormGrp.get("fineChargeFrequency").clearValidators();
//       this.waterChargeFormGrp.get("fineAmount").clearValidators();
//       this.waterChargeFormGrp.get("fineChargeFrequency").updateValueAndValidity();
//       this.waterChargeFormGrp.get("fineAmount").updateValueAndValidity();
//       this.waterChargeFormGrp.get("fineChargeFrequency").disable();
//       this.waterChargeFormGrp.get("fineAmount").disable();
//     }
//   }

//   onSaveWaterCharge() {
//     if (this.waterChargeFormGrp.valid) {
//       this.saveWaterCharge.emit(this.waterChargeFormGrp.value);
//     } else {
//   this.snackBar.open(this.translate.instant("invalid_form_message"));
// }
//   }
// }
