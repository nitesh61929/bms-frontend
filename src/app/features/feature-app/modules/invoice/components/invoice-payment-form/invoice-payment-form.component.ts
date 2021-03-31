import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
import { BaseComponent } from "@core/components";
import { AppPermissions } from "@core/enums";
import { CustomValidators } from "@core/utilities";
import DateUtils from "@core/utilities/date-utils";
import Utils from "@core/utilities/utils";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IInvoice } from "../../interfaces/invoice";
import { IPaymentDetail } from "./../../interfaces/payment-detail";
import { InvoiceService } from "./../../services/invoice.service";

@Component({
  selector: "app-invoice-payment-form",
  templateUrl: "./invoice-payment-form.component.html",
})
export class InvoicePaymentFormComponent extends BaseComponent implements OnInit {
  @Output() savePaymentClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() verifyPaymentClicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() invoice: IInvoice;
  @Input() paymentDetail$: Observable<IPaymentDetail>;
  @Input() error$: Observable<Error>;
  paymentDetail: any;
  invoicePaymentForm: FormGroup;
  paymentMethods = [];
  submitted: boolean = false;
  hasVerifyChequePaymentAccess = AppPermissions.VERIFY_PAYMENT_BY_CHEQUE;

  constructor(private store: Store<any>, private invoiceService: InvoiceService) {
    super();
    this.paymentMethods = this.invoiceService.paymentMethods;
  }

  ngOnInit(): void {
    this.listenObservables();
    this.setInvoicePaymentForm();
    this.error$.subscribe((err) => {
      if (err && this.invoicePaymentForm) {
        this.errorMessageService.handleServerSideError(this.invoicePaymentForm, err);
      }
    });
  }

  setInvoicePaymentForm() {
    this.invoicePaymentForm = this.formBuilder.group({
      invoiceId: ["", [Validators.required]],
      paymentType: ["", [Validators.required]],
      receivedDate: ["", [Validators.required]],
      bankName: [""],
      accountHolderName: [""],
      accountNumber: [""],
      accountMaintainBranchName: [""],
      chequeDepositedBranchName: [""],
      chequeNumber: [""],
      amount: ["", [Validators.required, CustomValidators.isValidAmount()]],
      amountInWords: ["", [Validators.required]],
      image: [],
    });

    this.invoicePaymentForm.get("invoiceId").setValue([this.invoice?.id]);
  }

  listenObservables() {
    this.paymentDetail$.subscribe((detail) => {
      this.paymentDetail = detail;
      this.setInvoicePaymentForm();
      this.invoicePaymentForm.enable();
      if (detail && detail.id != null && detail?.paymentType == "CHEQUE") {
        var chequePaymentDetail = detail?.paymentDetails?.chequeResponse;
        if (chequePaymentDetail) {
          chequePaymentDetail.paymentStatus = detail?.paymentStatus;
          chequePaymentDetail.paymentType = detail?.paymentType;

          this.buildInvoicePaymentForm(chequePaymentDetail);
          this.invoicePaymentForm.get("amount").setValue(detail.amount);
          this.invoicePaymentForm.get("amountInWords").setValue(detail.amountInWords);
          const receivedDate = DateUtils.convertUtcDateTimeToLocalDate(detail.receivedDate);
          this.invoicePaymentForm.get("receivedDate").setValue(receivedDate);
          this.invoicePaymentForm.get("image").setValue(detail.image);
        }
      }
    });
  }

  buildInvoicePaymentForm(chequePaymentDetail: any) {
    if (chequePaymentDetail && this.invoicePaymentForm) {
      this.invoicePaymentForm.patchValue(chequePaymentDetail);
      if (chequePaymentDetail.paymentStatus && chequePaymentDetail.paymentStatus == "PAID") {
        this.invoicePaymentForm.disable();
      }
    }
  }

  isDisabled() {
    return this.paymentDetail && this.paymentDetail?.paymentStatus == "PAID";
  }

  onPaymentTypeSelect(paymentTypeSelect: MatSelectChange) {
    this.updateValidators(paymentTypeSelect.value);
  }

  clearFormControlValidators() {
    this.invoicePaymentForm.get("bankName").clearValidators();
    this.invoicePaymentForm.get("accountHolderName").clearValidators();
    this.invoicePaymentForm.get("accountNumber").clearValidators();
    this.invoicePaymentForm.get("accountMaintainBranchName").clearValidators();
    this.invoicePaymentForm.get("chequeDepositedBranchName").clearValidators();
    this.invoicePaymentForm.get("chequeNumber").clearValidators();
    this.invoicePaymentForm.get("image").clearValidators();

    this.invoicePaymentForm.get("bankName").updateValueAndValidity();
    this.invoicePaymentForm.get("accountHolderName").updateValueAndValidity();
    this.invoicePaymentForm.get("accountNumber").updateValueAndValidity();
    this.invoicePaymentForm.get("accountMaintainBranchName").updateValueAndValidity();
    this.invoicePaymentForm.get("chequeDepositedBranchName").updateValueAndValidity();
    this.invoicePaymentForm.get("chequeNumber").updateValueAndValidity();
    this.invoicePaymentForm.get("image").updateValueAndValidity();
  }

  updateValidators(paymentType: string) {
    this.clearFormControlValidators();
    if (paymentType === "CHEQUE") {
      this.invoicePaymentForm.get("bankName").setValidators([Validators.required]);
      this.invoicePaymentForm.get("accountHolderName").setValidators([Validators.required]);
      this.invoicePaymentForm.get("accountNumber").setValidators([Validators.required]);
      this.invoicePaymentForm.get("accountMaintainBranchName").setValidators([Validators.required]);
      this.invoicePaymentForm.get("chequeDepositedBranchName").setValidators([Validators.required]);
      this.invoicePaymentForm.get("chequeNumber").setValidators([Validators.required]);
      this.invoicePaymentForm
        .get("image")
        .setValidators([
          Validators.required,
          CustomValidators.requiredFileType(["png", "jpg", "jpeg"]),
          CustomValidators.requiredFileSize(5120),
        ]);
    }
  }

  savePayment() {
    this.submitted = true;
    if (this.invoicePaymentForm.valid) {
      const receivedDate = DateUtils.convertLocalDateTimeToUtcDateTime(
        this.invoicePaymentForm.get("receivedDate").value
      );
      this.invoicePaymentForm.get("receivedDate").setValue(receivedDate);
      this.invoicePaymentForm.get("amount").setValue(this.invoicePaymentForm.get("amount").value);
      this.savePaymentClicked.emit(this.invoicePaymentForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  verifyPayment() {
    const payload = {
      invoiceId: this.invoice?.id,
    };
    this.verifyPaymentClicked.emit(payload);
  }

  showVerifyButton() {
    if (this.paymentDetail && this.paymentDetail.paymentStatus == "PENDING") {
      return true;
    }
  }

  printAmountInWords() {
    if (this.invoicePaymentForm.get("amount").valid) {
      const amount = this.invoicePaymentForm.get("amount").value;
      const amountInWords = amount && amount > 0 ? Utils.getNepaliCurrency(amount) : "";
      this.invoicePaymentForm.get("amountInWords").setValue(amountInWords);
      return amountInWords;
    }
    return "";
  }
}
