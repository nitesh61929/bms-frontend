import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {
  updateProfileCredential,
  updateProfileCredentialSuccess,
  verifyProfileCredential,
  verifyProfileCredentialSuccess,
} from "@shared/store/actions/profile.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-update-credential",
  templateUrl: "./update-credential.component.html",
  styleUrls: ["./update-credential.component.scss"],
})
export class UpdateCredentialComponent extends BaseComponent implements OnInit {
  haveOtp: boolean = false;
  haveCode: boolean = false;
  updateMobileForm: FormGroup;
  updateEmailForm: FormGroup;
  verifyMobileForm: FormGroup;
  verifyEmailForm: FormGroup;
  destroyed$ = new Subject<boolean>();
  updateCredentialError$: Observable<Error>;
  verifyCredentialError$: Observable<Error>;

  constructor(
    private store: Store<any>,
    updateProfileCredentialSuccess$: Actions,
    verifyProfileCredentialSuccess$: Actions
  ) {
    super();
    updateProfileCredentialSuccess$
      .pipe(ofType(updateProfileCredentialSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        if (d.data.hasOwnProperty("mobileNumber")) {
          this.haveOtp = true;
        } else if (d.data.hasOwnProperty("emailAddress")) {
          this.haveCode = true;
        }
      });

    verifyProfileCredentialSuccess$
      .pipe(ofType(verifyProfileCredentialSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        if (d.data.email) {
          this.haveCode = false;
        } else {
          this.haveOtp = false;
        }
      });
  }

  ngOnInit(): void {
    this.setUpdateMobileForm();
    this.setUpdateEmailForm();
    this.setVerifyMobileForm();
    this.setVerifyEmailForm();

    this.updateCredentialError$ = this.store.select((store) => store.sharedModule.profile.updateCredentialError);
    this.updateCredentialError$.subscribe((err) => {
      if (err && this.updateMobileForm) {
        this.errorMessageService.handleServerSideError(this.updateMobileForm, err);
      }
      if (err && this.updateEmailForm) {
        this.errorMessageService.handleServerSideError(this.updateEmailForm, err);
      }
    });

    this.verifyCredentialError$ = this.store.select((store) => store.sharedModule.profile.verifyCredentialError);
    this.verifyCredentialError$.subscribe((err) => {
      if (err && this.verifyMobileForm && this.haveOtp) {
        this.errorMessageService.handleServerSideError(this.verifyMobileForm, err);
      }
      if (err && this.verifyEmailForm && this.haveCode) {
        this.errorMessageService.handleServerSideError(this.verifyEmailForm, err);
      }
    });
  }

  private setUpdateMobileForm() {
    this.updateMobileForm = this.formBuilder.group({
      mobileNumber: ["", [Validators.required, CustomValidators.inputLengthValidator(10)]],
      email: [false],
    });
  }

  private setUpdateEmailForm() {
    this.updateEmailForm = this.formBuilder.group({
      emailAddress: ["", [Validators.required, Validators.email]],
      email: [true],
    });
  }

  private setVerifyMobileForm() {
    this.verifyMobileForm = this.formBuilder.group({
      otp: ["", [Validators.required]],
      email: [false],
    });
  }

  private setVerifyEmailForm() {
    this.verifyEmailForm = this.formBuilder.group({
      otp: ["", [Validators.required]],
      email: [true],
    });
  }

  gotOtp() {
    this.haveOtp = !this.haveOtp;
  }

  gotCode() {
    this.haveCode = !this.haveCode;
  }

  onChangeMobileNumber() {
    if (this.updateMobileForm.valid) {
      const options = {
        message: this.getTranslatedString("confirm_mobile_change"),
        cancelText: this.getTranslatedString("common.cancel"),
        confirmText: this.getTranslatedString("common.yes"),
      };
      this.confirmDialog.open(options);
      this.confirmDialog.confirmed().subscribe((confirmed) => {
        if (confirmed) {
          this.store.dispatch(updateProfileCredential({ payload: this.updateMobileForm.value }));
        }
      });
    }
  }

  onChangeEmail() {
    if (this.updateEmailForm.valid) {
      const options = {
        message: this.getTranslatedString("confirm_email_change"),
        cancelText: this.getTranslatedString("common.cancel"),
        confirmText: this.getTranslatedString("common.yes"),
      };
      this.confirmDialog.open(options);
      this.confirmDialog.confirmed().subscribe((confirmed) => {
        if (confirmed) {
          this.store.dispatch(updateProfileCredential({ payload: this.updateEmailForm.value }));
        }
      });
    }
  }

  onVerifyMobileNumber() {
    if (this.verifyMobileForm.valid) {
      const options = {
        message: this.getTranslatedString("confirm_mobile_verify"),
        cancelText: this.getTranslatedString("common.cancel"),
        confirmText: this.getTranslatedString("common.yes"),
      };
      this.confirmDialog.open(options);
      this.confirmDialog.confirmed().subscribe((confirmed) => {
        if (confirmed) {
          this.store.dispatch(verifyProfileCredential({ payload: this.verifyMobileForm.value }));
        }
      });
    }
  }

  onVerifyEmail() {
    if (this.verifyEmailForm.valid) {
      const options = {
        message: this.getTranslatedString("confirm_email_verify"),
        cancelText: this.getTranslatedString("common.cancel"),
        confirmText: this.getTranslatedString("common.yes"),
      };
      this.confirmDialog.open(options);
      this.confirmDialog.confirmed().subscribe((confirmed) => {
        if (confirmed) {
          this.store.dispatch(verifyProfileCredential({ payload: this.verifyEmailForm.value }));
        }
      });
    }
  }
}
