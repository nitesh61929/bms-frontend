import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IInvoiceSetting } from "./../../interfaces/invoice-setting";
import { PropertyInvoiceSettingService } from "./../../services/property-invoice-setting.service";
import { setInvoiceNumberSetting } from "./../../store/invoice-setting.actions";

@Component({
  selector: "app-property-invoice-setting",
  templateUrl: "./property-invoice-setting.component.html",
})
export class PropertyInvoiceSettingComponent extends BaseComponent implements OnInit {
  @Input() invoiceNumberSetting$: Observable<IInvoiceSetting>;
  @Input() errorInvoiceNumSetting$: Observable<Error>;
  invoiceNumberSetting: IInvoiceSetting;
  invoiceSettingForm: FormGroup;
  seperators = [];

  constructor(private store: Store<any>, private service: PropertyInvoiceSettingService) {
    super();
    this.seperators = this.service.seperators;
  }

  ngOnInit(): void {
    this.setInvoiceNumberSettingForm();
    this.listenObservables();
    this.errorInvoiceNumSetting$.subscribe((err) => {
      if (err && this.invoiceSettingForm) {
        this.errorMessageService.handleServerSideError(this.invoiceSettingForm, err);
      }
    });
  }

  setInvoiceNumberSettingForm() {
    this.invoiceSettingForm = this.formBuilder.group({
      prefix: ["", [Validators.maxLength(20)]],
      identifier: [""],
      startingInvoiceNumber: ["", [Validators.required]],
    });
  }

  listenObservables() {
    this.invoiceNumberSetting$.subscribe((setting) => {
      this.invoiceNumberSetting = setting;
      this.buildInvoiceSettingForm();
      if (this.invoiceNumberSetting) {
        this.invoiceSettingForm.get("prefix").disable();
        this.invoiceSettingForm.get("identifier").disable();
        this.invoiceSettingForm.get("startingInvoiceNumber").disable();
      } else {
        this.invoiceSettingForm.get("prefix").enable();
        this.invoiceSettingForm.get("identifier").enable();
        this.invoiceSettingForm.get("startingInvoiceNumber").enable();
      }
    });
  }

  buildInvoiceSettingForm() {
    this.invoiceSettingForm.reset();
    this.invoiceSettingForm.patchValue(this.invoiceNumberSetting);
  }

  setInvoiceNumberSetting() {
    if (this.invoiceSettingForm.valid) {
      const options = {
        message: this.getTranslatedString("confirm_invoice_number_setting"),
        cancelText: this.getTranslatedString("common.cancel"),
        confirmText: this.getTranslatedString("common.yes"),
      };
      this.confirmDialog.open(options);
      this.confirmDialog.confirmed().subscribe((confirmed) => {
        if (confirmed) {
          this.store.dispatch(setInvoiceNumberSetting({ payload: this.invoiceSettingForm.value }));
        }
      });
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  getTypedInvoiceNumberSettingValue() {
    const invoiceSettingFormValue = this.invoiceSettingForm.value;
    if (
      invoiceSettingFormValue.prefix ||
      invoiceSettingFormValue.identifier ||
      invoiceSettingFormValue.startingInvoiceNumber
    ) {
      return (
        "Sample Invoice Number: " +
        (invoiceSettingFormValue.prefix ?? "") +
        (invoiceSettingFormValue.identifier ?? "") +
        (invoiceSettingFormValue.startingInvoiceNumber ?? "")
      );
    }
  }
}
