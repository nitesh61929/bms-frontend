import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { IPrivacyPolicy } from "@shared/interfaces/privacy-policy";
import { AdminSettingsService } from "@shared/services/admin-settings/admin-settings.service";
import { addOrUpdatePolicy, getPrivacyPolicy } from "@shared/store/actions/admin-settings.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-privacy-policy",
  templateUrl: "./privacy-policy.component.html",
})
export class PrivacyPolicyComponent extends BaseComponent implements OnInit {
  addOrUpdatePrivacyPolicyForm: FormGroup;
  privacyPolicy$: Observable<IPrivacyPolicy>;
  privacyPolicy: IPrivacyPolicy;
  policyType: string;
  submitted: boolean = false;

  constructor(private store: Store<any>, protected adminSettingsService: AdminSettingsService) {
    super();
    this.policyType = this.adminSettingsService.policyTypes.PRIVACY_POLICY;
  }

  ngOnInit(): void {
    this.getPrivacyPolicy();
    this.setPrivacyPolicyForm();
    this.listenObservables();
  }

  listenObservables() {
    this.privacyPolicy$ = this.store.select((store: any) => store.sharedModule.adminSettings.privacyPolicy);
    this.privacyPolicy$.subscribe((privacyPolicy) => {
      this.privacyPolicy = privacyPolicy;
      if (this.privacyPolicy) {
        this.buildPrivacyPolicyForm();
      }
    });
  }

  getPrivacyPolicy() {
    this.store.dispatch(getPrivacyPolicy({}));
  }

  setPrivacyPolicyForm() {
    this.addOrUpdatePrivacyPolicyForm = this.formBuilder.group({
      id: [""],
      policyType: [this.policyType, [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }

  buildPrivacyPolicyForm() {
    this.addOrUpdatePrivacyPolicyForm.patchValue(this.privacyPolicy);
    this.addOrUpdatePrivacyPolicyForm.get("policyType").setValue(this.policyType);
  }

  onAddOrUpdatePrivacyPolicy() {
    this.submitted = true;
    if (this.addOrUpdatePrivacyPolicyForm.valid) {
      this.store.dispatch(addOrUpdatePolicy({ payload: this.addOrUpdatePrivacyPolicyForm.value }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
