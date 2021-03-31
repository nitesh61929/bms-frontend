import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Store } from "@ngrx/store";
import { IAccountType } from "@shared/interfaces";
import { loadAccountType } from "@shared/store/actions/account.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-property-owner-invitation",
  templateUrl: "./property-owner-invitation.component.html",
})
export class PropertyOwnerInvitationComponent extends BaseComponent implements OnInit {
  @Output() invitePropertyOwnerClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("invitationNgForm") invitationNgForm;
  invitationForm: FormGroup;
  error$: Observable<Error>;
  accountTypes: IAccountType[];

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.setInvitationForm();
    this.listenInvitationError();
    this.listenAccountTypes();
    this.fetchAccountTypes();
  }

  fetchAccountTypes() {
    this.store.dispatch(loadAccountType({}));
  }

  private listenInvitationError() {
    this.store
      .select((store) => store.sharedModule.invitations.error)
      .subscribe((err) => {
        if (err && this.invitationForm) {
          this.errorMessageService.handleServerSideError(this.invitationForm, err);
        }
      });
  }

  private listenAccountTypes() {
    this.store
      .select((store) => store.sharedModule.account.accountTypes)
      .subscribe((accountTypes) => {
        this.accountTypes = accountTypes;
      });
  }

  /**
   * Initialize invitation form
   */
  private setInvitationForm() {
    this.invitationForm = this.formBuilder.group({
      name: ["", [Validators.maxLength(50)]],
      mobileNumber: ["", [CustomValidators.inputLengthValidator(10)]],
      email: ["", [Validators.email]],
      accountType: ["", [Validators.required]],
    });
    this.trackAccountTypeValueChange();
  }

  /**
   * Track account type
   */
  private trackAccountTypeValueChange() {
    this.invitationForm.get("accountType").valueChanges.subscribe((value) => {
      if (value) {
        this.updateValidators(value);
      }
    });
  }

  updateValidators(value: string) {
    this.invitationForm.get("name").setValue("");
    this.invitationForm.get("mobileNumber").setValue("");
    this.invitationForm.get("email").setValue("");
    this.clearFormControlValidators();
    if (value === "INDIVIDUAL") {
      this.invitationForm.get("name").setValidators([Validators.required]);
      this.invitationForm.get("mobileNumber").setValidators([Validators.required]);
      this.invitationForm.get("name").updateValueAndValidity();
      this.invitationForm.get("mobileNumber").updateValueAndValidity();
    }
    if (value === "COMPANY") {
      this.invitationForm.get("email").setValidators([Validators.required]);
      this.invitationForm.get("email").updateValueAndValidity();
    }
  }

  clearFormControlValidators() {
    this.invitationForm.get("name").clearValidators();
    this.invitationForm.get("mobileNumber").clearValidators();
    this.invitationForm.get("email").clearValidators();
    this.invitationForm.get("name").updateValueAndValidity();
    this.invitationForm.get("mobileNumber").updateValueAndValidity();
    this.invitationForm.get("email").updateValueAndValidity();
  }

  /**
   * Invite account
   */
  onInvite() {
    if (this.invitationForm.valid) {
      this.invitePropertyOwnerClicked.emit(this.invitationForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
