import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IProfile } from "@shared/interfaces/profile";
import {
  updateProfileDetails,
  uploadProfilePicture,
  uploadProfilePictureSuccess,
} from "@shared/store/actions/profile.actions";
import { Observable, Subject } from "rxjs";
import { map, startWith, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
})
export class MyProfileComponent extends BaseComponent implements OnInit {
  @Input() myProfile$: Observable<IProfile>;
  @Input() error$: Observable<Error>;
  myProfile: IProfile;
  myProfileForm: FormGroup;
  countries = [];
  provinces = [];
  filteredProvinces: Observable<any>;
  destroyed$ = new Subject<boolean>();
  submitted: boolean = false;

  constructor(private store: Store<any>, uploadProfilePictureSuccess$: Actions) {
    super();
    uploadProfilePictureSuccess$
      .pipe(ofType(uploadProfilePictureSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.store.dispatch(updateProfileDetails({ payload: this.myProfileForm.value }));
      });
  }

  ngOnInit(): void {
    this.setMyProfileForm();
    this.listenObservables();
    this.countries = this.datasService.countries;
    this.provinces = this.datasService.provinces;
    this.listenProvinceChanges();

    this.error$.subscribe((err) => {
      if (err && this.myProfileForm) {
        this.errorMessageService.handleServerSideError(this.myProfileForm, err);
      }
    });
  }

  listenObservables() {
    if (this.myProfile$) {
      this.myProfile$.subscribe((myProfile) => {
        if (myProfile) {
          this.myProfile = myProfile;
          this.buildMyProfileForm();
          this.myProfileForm.get("id").setValue(this.myProfile.userId);
        }
      });
    }
  }

  private listenProvinceChanges() {
    this.filteredProvinces = this.myProfileForm
      .get("address")
      .get("province")
      .valueChanges.pipe(
        startWith(""),
        map((value) => this.filterProvince(value))
      );
  }

  private filterProvince(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.provinces.filter((province) => province.value.toLowerCase().includes(filterValue.toLowerCase()));
  }

  buildMyProfileForm() {
    this.myProfileForm.patchValue(this.myProfile);

    if (!this.myProfile.address || (this.myProfile.address && this.myProfile.address.country === "")) {
      const defaultCountry = this.countries.filter((c) => c.value === "Nepal").map((res) => res.value);
      this.myProfileForm.get("address").get("country").setValue(defaultCountry[0]);
    }

    this.myProfileForm.get("profilePicture").setValue(this.myProfile.profileFile);
  }

  setMyProfileForm() {
    this.myProfileForm = this.formBuilder.group({
      id: [],
      email: ["", [Validators.email]],
      mobileNumber: ["", [CustomValidators.inputLengthValidator(10)]],
      name: ["", [Validators.required, Validators.maxLength(50)]],
      address: this.formBuilder.group({
        addressLine1: ["", [Validators.required, Validators.maxLength(240)]],
        addressLine2: ["", [Validators.maxLength(240)]],
        city: ["", [Validators.required, Validators.maxLength(240)]],
        zipCode: ["", [Validators.required, Validators.maxLength(10)]],
        wardNo: ["", [Validators.required, Validators.maxLength(10)]],
        country: ["", [Validators.required, Validators.maxLength(50)]],
        province: ["", [Validators.required, Validators.maxLength(100)]],
        street: ["", [Validators.maxLength(240)]],
      }),
      profilePicture: [
        "",
        [
          Validators.required,
          CustomValidators.requiredFileType(["png", "jpg", "jpeg"]),
          CustomValidators.requiredFileSize(5120),
        ],
      ],
    });

    const defaultCountry = this.countries.filter((c) => c.value === "Nepal").map((res) => res.value);
    this.myProfileForm.get("address").get("country").setValue(defaultCountry[0]);
  }

  /**
   * First set profile image and then values
   */
  updateMyProfile() {
    this.submitted = true;
    if (this.myProfileForm.valid) {
      this.store.dispatch(uploadProfilePicture({ payload: this.myProfileForm.value }));
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }
}
