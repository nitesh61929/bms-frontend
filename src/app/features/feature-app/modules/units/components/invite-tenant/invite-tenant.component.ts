import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Store } from "@ngrx/store";
import { IUnit } from "@shared/interfaces/unit";
import { IUser } from "@shared/interfaces/user/user";
import * as unitAction from "@shared/store/actions/unit.actions";
import { getUsersByNameOrMobile } from "@shared/store/actions/users.actions";
import { fromEvent, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-invite-tenant",
  templateUrl: "./invite-tenant.component.html",
})
export class InviteTenantComponent extends BaseComponent implements OnInit, AfterViewInit {
  @Input() unit: IUnit;
  @Input() hasInvoicePrefixSetup: boolean;
  @ViewChild("mobileNumberInput") mobileNumberInput: ElementRef;
  inviteTenantForm: FormGroup;
  searchedUsers$: Observable<IUser[]>;
  searchedUsers: IUser[];
  suggestionSelected: boolean;
  error$: Observable<Error>;
  inputDisabled: boolean;

  constructor(public store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.setInviteTenantForm();
    this.searchedUsers = [];
    this.suggestionSelected = false;

    this.error$ = this.store.select((store) => store.sharedModule.unit.error);
    this.error$.subscribe((err) => {
      if (err && this.inviteTenantForm) {
        this.errorMessageService.handleServerSideError(this.inviteTenantForm, err);
      }
    });

    this.searchedUsers$ = this.store.select((store) => store.sharedModule.users.userSearch);
    this.searchedUsers$.subscribe((users) => {
      this.searchedUsers = users;
      if (users.length > 0) {
        this.inviteTenantForm.get("name").disable({ onlySelf: true });
      } else {
        this.inviteTenantForm.get("name").enable();
        this.inviteTenantForm.get("name").setValue("");
        this.inviteTenantForm.get("userId").setValue(null);
      }
    });

    if (!this.hasInvoicePrefixSetup) {
      this.inviteTenantForm.disable();
    }
  }

  private setInviteTenantForm() {
    this.inviteTenantForm = this.formBuilder.group({
      mobileNumber: ["", [Validators.required, CustomValidators.inputLengthValidator(10)]],
      name: ["", [Validators.required, Validators.maxLength(50)]],
      unitId: [this.unit.id, [Validators.required]],
      userId: [null],
    });
  }

  ngAfterViewInit() {
    this.resetValues();
    fromEvent(this.mobileNumberInput.nativeElement, "keyup")
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((event: any) => {
        const typedMobileNumber = event.target.value;
        let params = null;
        if (typedMobileNumber.length >= 8) {
          params = { searchString: typedMobileNumber };
          this.store.dispatch(getUsersByNameOrMobile({ params }));
        }
      });
  }

  resetValues() {
    this.suggestionSelected = false;
    this.searchedUsers = [];
  }

  suggestionSelectionClicked(user: IUser) {
    this.inviteTenantForm.get("mobileNumber").setValue(user.mobileNumber);
    this.inviteTenantForm.get("userId").setValue(user.userId);
    this.inviteTenantForm.get("name").setValue(user.name);
    this.inviteTenantForm.get("name").disable({ onlySelf: true });
    this.suggestionSelected = true;
    this.searchedUsers = [];
  }

  showNameField() {
    const mobileValue = this.inviteTenantForm.get("mobileNumber").value;
    if (
      this.suggestionSelected === true ||
      (mobileValue !== "" &&
        mobileValue.toString().length >= 8 &&
        this.searchedUsers.length === 0 &&
        this.suggestionSelected === false)
    ) {
      return true;
    }
    return false;
  }

  onInviteTenant() {
    const name = this.inviteTenantForm.getRawValue().name;
    this.inviteTenantForm.get("name").enable();
    this.inviteTenantForm.get("name").setValue(name);
    if (this.inviteTenantForm.valid) {
      this.store.dispatch(unitAction.inviteTenant({ payload: this.inviteTenantForm.value }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
