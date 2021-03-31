import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { setPropertyCurrencyConfig } from "../../store/invoice-setting.actions";
import { ICurrencyConfig } from "./../../interfaces/currency-config";
import { PropertyInvoiceSettingService } from "./../../services/property-invoice-setting.service";

@Component({
  selector: "app-property-currency-config",
  templateUrl: "./property-currency-config.component.html",
})
export class PropertyCurrencyConfigComponent extends BaseComponent implements OnInit {
  @Input() propertyCurrencyConfig$: Observable<ICurrencyConfig[]>;
  @Input() errorCurrencyConfigSetting$: Observable<Error>;
  propertyCurrencyConfig: ICurrencyConfig;
  propertyCurrencyConfigForm: FormGroup;
  currencies = [];

  constructor(private store: Store<any>, private service: PropertyInvoiceSettingService) {
    super();
    this.currencies = this.service.currencies;
  }

  ngOnInit(): void {
    this.setPropertyCurrencyForm();
    this.listenObservables();
    this.errorCurrencyConfigSetting$.subscribe((err) => {
      if (err && this.propertyCurrencyConfigForm) {
        this.errorMessageService.handleServerSideError(this.propertyCurrencyConfigForm, err);
      }
    });
  }

  setPropertyCurrencyForm() {
    this.propertyCurrencyConfigForm = this.formBuilder.group({
      currency: ["", [Validators.required]],
    });
  }

  listenObservables() {
    this.propertyCurrencyConfig$.subscribe((config) => {
      if (config && config.length > 0) {
        this.propertyCurrencyConfig = config[0];
      } else {
        this.propertyCurrencyConfig = null;
      }
      this.buildPropertyCurrencyConfigForm();
    });
  }

  buildPropertyCurrencyConfigForm() {
    this.propertyCurrencyConfigForm.reset();
    this.propertyCurrencyConfigForm.get("currency").setValue(this.propertyCurrencyConfig?.currencyCode);
  }

  savePropertyCurrencyConfiguration() {
    if (this.propertyCurrencyConfigForm.valid) {
      const options = {
        message: this.getTranslatedString("confirm_property_currency_config"),
        cancelText: this.getTranslatedString("common.cancel"),
        confirmText: this.getTranslatedString("common.yes"),
      };
      this.confirmDialog.open(options);
      this.confirmDialog.confirmed().subscribe((confirmed) => {
        if (confirmed) {
          this.store.dispatch(setPropertyCurrencyConfig({ payload: this.propertyCurrencyConfigForm.value }));
        }
      });
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  hasSetCurrency() {
    return this.propertyCurrencyConfig;
  }
}
