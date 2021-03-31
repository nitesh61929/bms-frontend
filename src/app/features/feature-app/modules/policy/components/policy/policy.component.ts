import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, NgForm, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "@core/components";
import { AppPermissions } from "@core/enums";
import { CustomValidators } from "@core/utilities";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IPagination } from "@shared/interfaces";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IPolicy } from "../../interfaces/policy";
import * as policyActions from "../../store/policy.actions";

@Component({
  selector: "app-policy",
  templateUrl: "./policy.component.html",
})
export class PolicyComponent extends BaseComponent implements OnInit {
  @ViewChild("addPolicyNgForm") addPolicyNgForm: NgForm;
  policies$: Observable<IPolicy[]>;
  policies: Array<IPolicy>;
  policiesDataSource = new MatTableDataSource<IPolicy>();
  pagination$: Observable<IPagination>;
  addPolicyForm: FormGroup;
  submitted: boolean = false;
  listLength: number;
  destroyed$ = new Subject<boolean>();
  error$: Observable<Error>;
  isUpdate: boolean = false;
  hasAddPolicyAccess = AppPermissions.PROPERTY_POLICY_ADD;
  hasUpdatePolicyAccess = AppPermissions.PROPERTY_POLICY_UPDATE;
  hasRemovePolicyAccess = AppPermissions.PROPERTY_POLICY_REMOVE;
  hasListPolicyAccess = AppPermissions.PROPERTY_POLICY_LIST;
  params: any = {};
  checked: boolean;

  displayedColumns: string[] = ["sn", "title", "policy_file", "status", "actions"];

  constructor(
    private store: Store<any>,
    public addPolicySuccess$: Actions,
    public updatePolicySuccess$: Actions,
    public deletePolicySuccess$: Actions
  ) {
    super();
    addPolicySuccess$.pipe(ofType(policyActions.addPolicySuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.resetvalues();
    });

    updatePolicySuccess$.pipe(ofType(policyActions.updatePolicySuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.resetvalues();
    });

    deletePolicySuccess$.pipe(ofType(policyActions.deletePolicySuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.resetvalues();
    });
  }

  resetvalues() {
    this.addPolicyNgForm.resetForm("");
    this.isUpdate = false;
    this.fetchPolicies();
    this.submitted = false;
    this.checked = false;
  }

  ngOnInit(): void {
    this.error$ = this.store.select((store) => store.policy.error);
    this.error$.subscribe((err) => {
      if (err && this.addPolicyForm) {
        this.errorMessageService.handleServerSideError(this.addPolicyForm, err);
      }
    });
    this.listenObservables();
    this.setAddPolicyForm();
    this.fetchPolicies();
  }

  listenObservables() {
    this.policies$ = this.store.select((store: any) => store.policy.list);

    this.policies$.subscribe((policies) => {
      this.policiesDataSource = new MatTableDataSource(policies);
    });

    this.pagination$ = this.store.select((store: any) => store.policy.pagination);
    this.pagination$.subscribe((pagination) => {
      this.listLength = pagination ? pagination.totalRecord : null;
    });
  }

  fetchPolicies() {
    this.store.dispatch(policyActions.loadPolicies({ params: this.params }));
  }

  setAddPolicyForm() {
    this.addPolicyForm = this.formBuilder.group({
      id: [""],
      title: ["", [Validators.required, Validators.maxLength(50)]],
      file: [
        "",
        [Validators.required, CustomValidators.requiredFileType(["pdf"]), CustomValidators.requiredFileSize(5120)],
      ],
      status: ["INACTIVE", [Validators.required]],
    });
  }

  onAddOrUpdatePolicy() {
    this.submitted = true;
    if (this.addPolicyForm.valid) {
      const policyFormValue = this.addPolicyForm.value;
      if (policyFormValue.id) {
        this.store.dispatch(policyActions.updatePolicy({ policyId: policyFormValue.id, payload: policyFormValue }));
      } else {
        this.store.dispatch(policyActions.addPolicy({ payload: policyFormValue }));
      }
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  onEditClick(policy: IPolicy) {
    this.isUpdate = true;
    this.checked = false;
    if (policy.status == "ACTIVE") {
      this.checked = true;
    }
    this.addPolicyForm.patchValue(policy);
  }

  onCancelEdit() {
    this.isUpdate = false;
    this.checked = false;
    this.addPolicyNgForm.resetForm("");
  }

  onDeletePolicy(policyId: string) {
    const options = {
      message: this.getTranslatedString("confirm_policy_delete"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(policyActions.deletePolicy({ policyId }));
      }
    });
  }

  getFileName(url: string) {
    const fileName = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf(".pdf"));
    return fileName + ".pdf";
  }

  openPDF(url: string) {
    window.open(url);
  }

  onSearch(searchValue: string) {
    this.params.searchKey = searchValue;
    this.fetchPolicies();
  }

  setStatus(event: any) {
    if (event.checked) {
      this.addPolicyForm.get("status").setValue("ACTIVE");
      this.checked = true;
    } else {
      this.addPolicyForm.get("status").setValue("INACTIVE");
      this.checked = false;
    }
  }
}
