import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Store } from "@ngrx/store";
import { IUser } from "@shared/interfaces/user/user";
import { getUsersByNameOrMobile } from "@shared/store/actions/users.actions";
import { fromEvent, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-add-staff",
  templateUrl: "./add-staff.component.html",
})
export class AddStaffComponent extends BaseComponent implements OnInit, AfterViewInit {
  @Output() addStaffClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() dialogCloseClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("addStaffNgForm") addStaffNgForm;
  @ViewChild("mobileNumberInput") mobileNumberInput: ElementRef;
  addStaffForm: FormGroup;
  error$: Observable<Error>;
  searchedUsers$: Observable<IUser[]>;
  searchedUsers: IUser[];
  ownerId: string;
  suggestionSelected: boolean;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.setAddStaffForm();
    this.searchedUsers = [];
    this.suggestionSelected = false;
    this.error$ = this.store.select((store) => store.sharedModule.staffs.error);
    this.error$.subscribe((err) => {
      if (err && this.addStaffForm) {
        this.errorMessageService.handleServerSideError(this.addStaffForm, err);
      }
    });

    this.searchedUsers$ = this.store.select((store) => store.sharedModule.users.userSearch);
    this.searchedUsers$.subscribe((users) => {
      this.searchedUsers = users;
      if (users.length > 0) {
        this.addStaffForm.get("name").disable();
      } else {
        this.addStaffForm.get("name").enable();
        this.addStaffForm.get("name").setValue("");
        this.addStaffForm.get("asAdmin").setValue(false);
        this.addStaffForm.get("userId").setValue(null);
      }
    });
  }

  private setAddStaffForm() {
    this.addStaffForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      mobileNumber: ["", [Validators.required, CustomValidators.inputLengthValidator(10)]],
      // email: ["", [Validators.email]],
      userId: [null],
      asAdmin: [false],
    });
  }

  onAddStaffClick() {
    const name = this.addStaffForm.getRawValue().name;
    this.addStaffForm.get("name").enable();
    this.addStaffForm.get("name").setValue(name);
    if (this.addStaffForm.valid) {
      this.addStaffClicked.emit(this.addStaffForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
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
    this.addStaffForm.get("mobileNumber").setValue(user.mobileNumber);
    this.addStaffForm.get("name").setValue(user.name);
    this.addStaffForm.get("userId").setValue(user.userId);
    this.suggestionSelected = true;
    this.searchedUsers = [];
  }

  showNameField() {
    const mobileValue = this.addStaffForm.get("mobileNumber").value;
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

  closeModal() {
    this.dialogCloseClicked.emit();
  }
}
