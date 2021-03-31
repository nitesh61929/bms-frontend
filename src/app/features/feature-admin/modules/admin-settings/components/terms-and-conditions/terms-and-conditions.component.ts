import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { ITermsAndConditions } from "@shared/interfaces/terms-and-conditions";
import { AdminSettingsService } from "@shared/services/admin-settings/admin-settings.service";
import { addOrUpdatePolicy, getTermsAndConditions } from "@shared/store/actions/admin-settings.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-terms-and-conditions",
  templateUrl: "./terms-and-conditions.component.html",
})
export class TermsAndConditionsComponent extends BaseComponent implements OnInit {
  addOrUpdateTermsAndConditionsForm: FormGroup;
  termsAndConditions$: Observable<ITermsAndConditions>;
  termsAndConditions: ITermsAndConditions;
  policyType: string;
  submitted: boolean = false;

  constructor(private store: Store<any>, protected adminSettingsService: AdminSettingsService) {
    super();
    this.policyType = this.adminSettingsService.policyTypes.TERMS_AND_CONDITIONS;
  }

  ngOnInit(): void {
    this.getTermsAndConditions();
    this.setTermsAndConditionsForm();
    this.listenObservables();
  }

  listenObservables() {
    this.termsAndConditions$ = this.store.select((store: any) => store.sharedModule.adminSettings.termsAndConditions);
    this.termsAndConditions$.subscribe((termsAndConditions) => {
      this.termsAndConditions = termsAndConditions;
      if (this.termsAndConditions) {
        this.buildTermsAndConditionsForm();
      }
    });
  }

  getTermsAndConditions() {
    this.store.dispatch(getTermsAndConditions({}));
  }

  setTermsAndConditionsForm() {
    this.addOrUpdateTermsAndConditionsForm = this.formBuilder.group({
      id: [""],
      policyType: [this.policyType, [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }

  buildTermsAndConditionsForm() {
    this.addOrUpdateTermsAndConditionsForm.patchValue(this.termsAndConditions);
    this.addOrUpdateTermsAndConditionsForm.get("policyType").setValue(this.policyType);
  }

  onAddOrUpdateTermsAndConditions() {
    this.submitted = true;
    if (this.addOrUpdateTermsAndConditionsForm.valid) {
      this.store.dispatch(addOrUpdatePolicy({ payload: this.addOrUpdateTermsAndConditionsForm.value }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
