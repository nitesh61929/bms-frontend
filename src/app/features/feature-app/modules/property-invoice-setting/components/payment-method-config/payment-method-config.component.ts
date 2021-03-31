import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormGroup, NgForm, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IKhaltiConfiguration } from "../../interfaces/khalti-config";
import { IKhalti } from "./../../interfaces/khalti";
import { setKhaltiPaymentConfig } from "./../../store/invoice-setting.actions";

@Component({
  selector: "app-payment-method-config",
  templateUrl: "./payment-method-config.component.html",
})
export class PaymentMethodConfigComponent extends BaseComponent implements OnInit {
  @ViewChild("paymentMethodConfigNgForm") paymentMethodConfigNgForm: NgForm;
  @Input() khaltiPaymentConfig$: Observable<IKhaltiConfiguration>;
  @Input() errorKhaltiConfigSetting$: Observable<Error>;
  khaltiPaymentConfig: IKhalti;
  paymentMethodConfigForm: FormGroup;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.setPaymentMethodConfigForm();
    this.listenObservables();
    this.errorKhaltiConfigSetting$.subscribe((err) => {
      if (err && this.paymentMethodConfigForm) {
        this.errorMessageService.handleServerSideError(this.paymentMethodConfigForm, err);
      }
    });
  }

  setPaymentMethodConfigForm() {
    this.paymentMethodConfigForm = this.formBuilder.group({
      paymentMethodEnabled: [false],
      publicKey: [""],
      privateKey: [""],
    });
  }

  listenObservables() {
    this.khaltiPaymentConfig$.subscribe((config) => {
      this.buildKhaltiPaymentConfigForm();
      if (config) {
        this.khaltiPaymentConfig = config?.khaltiDetails;
        this.paymentMethodConfigForm.get("paymentMethodEnabled").setValue(true);
      } else {
        this.khaltiPaymentConfig = null;
        this.paymentMethodConfigForm.get("paymentMethodEnabled").setValue(false);
      }
    });
  }

  buildKhaltiPaymentConfigForm() {
    this.paymentMethodConfigForm.reset();
    // this.paymentMethodConfigForm.patchValue(this.khaltiPaymentConfig);
  }

  setFormValidators() {
    this.paymentMethodConfigForm.get("publicKey").setValidators([Validators.required, Validators.maxLength(60)]);
    this.paymentMethodConfigForm.get("privateKey").setValidators([Validators.required, Validators.maxLength(60)]);
    this.paymentMethodConfigForm.get("publicKey").updateValueAndValidity();
    this.paymentMethodConfigForm.get("privateKey").updateValueAndValidity();
  }

  onKhaltiOptionSelection(event: any) {
    if (event.checked) {
      this.setFormValidators();
    } else {
      this.paymentMethodConfigForm.get("publicKey").clearValidators();
      this.paymentMethodConfigForm.get("privateKey").clearValidators();
      this.paymentMethodConfigForm.get("publicKey").updateValueAndValidity();
      this.paymentMethodConfigForm.get("privateKey").updateValueAndValidity();
    }
  }

  savePaymentMethodConfiguration() {
    if (this.paymentMethodConfigForm.valid) {
      const options = {
        message: this.getTranslatedString("confirm_khalti_payment_config"),
        cancelText: this.getTranslatedString("common.cancel"),
        confirmText: this.getTranslatedString("common.yes"),
      };
      this.confirmDialog.open(options);
      this.confirmDialog.confirmed().subscribe((confirmed) => {
        if (confirmed) {
          this.store.dispatch(setKhaltiPaymentConfig({ payload: this.paymentMethodConfigForm.value }));
        }
      });
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  hasSetKeys() {
    return this.khaltiPaymentConfig && this.khaltiPaymentConfig.publicKey && this.khaltiPaymentConfig.privateKey;
  }
}
