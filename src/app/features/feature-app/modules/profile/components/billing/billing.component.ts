import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BaseComponent } from "@core/components";
import DateUtils from "@core/utilities/date-utils";
import { Observable } from "rxjs";
import { ITrialDates } from "../../interfaces/trial-dates";

@Component({
  selector: "app-billing",
  templateUrl: "./billing.component.html",
  styleUrls: ["./billing.component.scss"],
})
export class BillingComponent extends BaseComponent implements OnInit {
  @Input() billingDetails$: Observable<ITrialDates>;
  @Input() error$: Observable<Error>;
  billingDetailForm: FormGroup;
  billingDetails: ITrialDates;
  error: Error;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.buildBillingDetailForm();
    this.billingDetails$.subscribe((data) => {
      this.billingDetails = data;
      this.setBillingDetailForm();
    });
  }

  buildBillingDetailForm() {
    this.billingDetailForm = this.formBuilder.group({
      trialStartDate: [{ value: "", disabled: true }],
      trialEndDate: [{ value: "", disabled: true }],
    });
  }

  setBillingDetailForm() {
    if (this.billingDetails?.trialStartDate && this.billingDetails?.trialEndDate) {
      const trialStartDate = DateUtils.convertUtcDateTimeToLocalDate(this.billingDetails?.trialStartDate);
      const trialEndDate = DateUtils.convertUtcDateTimeToLocalDate(this.billingDetails?.trialEndDate);
      this.billingDetailForm.get("trialStartDate").setValue(trialStartDate);
      this.billingDetailForm.get("trialEndDate").setValue(trialEndDate);
    }
  }

  updateBillingDetail() {}
}
