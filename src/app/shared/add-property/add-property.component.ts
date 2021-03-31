import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { FormArray, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import { loadPropertyType } from "@shared/store/actions/property.actions";
import { Observable, Subject } from "rxjs";
import { map, startWith, takeUntil } from "rxjs/operators";
import * as propertyActions from "../store/actions/property.actions";

@Component({
  selector: "app-add-property",
  templateUrl: "./add-property.component.html",
})
export class AddPropertyComponent extends BaseComponent implements OnInit {
  @ViewChild("addPropertyNgForm") addPropertyNgForm: NgForm;
  @Output() addProperty: EventEmitter<IProperty> = new EventEmitter<IProperty>();
  countries = [];
  provinces = [];
  filteredProvinces: Observable<any>;
  addPropertyForm: FormGroup;
  contactsFormArray: FormArray;
  imagesFormArray: FormArray;
  ownerId: string;
  propertyTypes$: Observable<any>;
  submitted: boolean = false;
  error$: Observable<Error>;
  destroyed$ = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute, private store: Store<any>, public addPropertySuccess$: Actions) {
    super();
    addPropertySuccess$.pipe(ofType(propertyActions.addPropertySuccess), takeUntil(this.destroyed$)).subscribe((d) => {
      this.submitted = false;
      this.addPropertyNgForm.resetForm("");
      this.addPropertyForm.markAsPristine();
      this.addPropertyForm.markAsUntouched();
      this.addPropertyForm.updateValueAndValidity();
    });
  }

  ngOnInit(): void {
    this.countries = this.datasService.countries;
    this.provinces = this.datasService.provinces;
    this.activatedRoute.queryParams.subscribe((params) => {
      this.ownerId = params.accountId;
      if (this.ownerId) {
        this.setAddPropertyForm();
      }
    });

    this.loadPropertyTypes();
    this.listenProvinceChanges();

    this.error$ = this.store.select((store) => store.sharedModule.property.error);
    this.error$.subscribe((err) => {
      if (err && this.addPropertyForm) {
        this.errorMessageService.handleServerSideError(this.addPropertyForm, err);
      }
    });
  }

  loadPropertyTypes() {
    this.propertyTypes$ = this.store.select((store) => store.sharedModule.property.propertyTypes);
    this.store.dispatch(loadPropertyType(null));
  }

  setAddPropertyForm() {
    this.contactsFormArray = this.formBuilder.array([this.createContact()]);
    this.imagesFormArray = this.formBuilder.array([this.createSiteImage()]);
    this.addPropertyForm = this.formBuilder.group({
      ownerId: [this.ownerId, [Validators.required]],
      propertyType: ["", [Validators.required]],
      name: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        addressLine1: ["", [Validators.required, Validators.maxLength(240)]],
        addressLine2: ["", [Validators.maxLength(240)]],
        city: ["", [Validators.required, Validators.maxLength(240)]],
        zipCode: ["", [Validators.required, Validators.maxLength(10)]],
        wardNo: ["", [Validators.required, Validators.maxLength(10)]],
        country: ["", [Validators.required, Validators.maxLength(50)]],
        province: ["", [Validators.required, Validators.maxLength(100)]],
        street: ["", [Validators.required, Validators.maxLength(240)]],
      }),
      contacts: this.contactsFormArray,
      facility: ["", Validators.maxLength(300)],
      images: this.imagesFormArray,
      logo: [
        "",
        [
          Validators.required,
          CustomValidators.requiredFileType(["png", "jpg", "jpeg"]),
          CustomValidators.requiredFileSize(5120),
        ],
      ],
      panCertificate: [
        "",
        [
          Validators.required,
          CustomValidators.requiredFileType(["png", "jpg", "jpeg", "pdf"]),
          CustomValidators.requiredFileSize(5120),
        ],
      ],
      registrationCertificate: [
        "",
        [
          Validators.required,
          CustomValidators.requiredFileType(["png", "jpg", "jpeg", "pdf"]),
          CustomValidators.requiredFileSize(5120),
        ],
      ],
    });

    const defaultCountry = this.countries.filter((c) => c.value === "Nepal").map((res) => res.value);
    this.addPropertyForm.get("address").get("country").setValue(defaultCountry[0]);
  }

  private createContact() {
    return this.formBuilder.group({
      type: ["phone"],
      number: ["", [Validators.minLength(7), Validators.maxLength(7)]],
    });
  }

  createSiteImage() {
    return new FormControl("", [
      Validators.required,
      CustomValidators.requiredFileType(["png", "jpg", "jpeg"]),
      CustomValidators.requiredFileSize(5120),
    ]);
  }

  onAddSiteImages() {
    this.imagesFormArray.push(this.createSiteImage());
  }

  onFileRemove(index: number) {
    this.imagesFormArray.removeAt(index);
  }

  private listenProvinceChanges() {
    this.filteredProvinces = this.addPropertyForm
      .get("address")
      .get("province")
      .valueChanges.pipe(
        startWith(""),
        map((value) => this.filterProvince(value))
      );
  }

  private filterProvince(value: string): string[] {
    const filterValue = value?.toLowerCase();
    return this.provinces.filter((province) => province.value.toLowerCase().includes(filterValue.toLowerCase()));
  }

  addContact(): void {
    this.contactsFormArray.push(this.createContact());
  }

  onPhoneIconClick(index: number) {
    this.contactsFormArray.controls[index]["controls"]["type"].setValue("phone");
    this.contactsFormArray.controls[index]
      .get("number")
      .setValidators([Validators.minLength(7), Validators.maxLength(7), Validators.required]);
    this.contactsFormArray.controls[index].get("number").updateValueAndValidity();
  }

  onMobileIconClick(index: number) {
    this.contactsFormArray.controls[index]["controls"]["type"].setValue("mobile");
    this.contactsFormArray.controls[index]
      .get("number")
      .setValidators([Validators.minLength(10), Validators.maxLength(10), Validators.required]);
    this.contactsFormArray.controls[index].get("number").updateValueAndValidity();
  }

  removeContact(index: number) {
    this.contactsFormArray.removeAt(index);
  }

  onAdd() {
    this.submitted = true;
    if (this.addPropertyForm.valid) {
      this.addPropertyForm.value["phones"] = this.addPropertyForm.value.contacts
        .filter((contact) => contact.type === "phone")
        .map((el) => el.number.toString());
      this.addPropertyForm.value["mobileNumbers"] = this.addPropertyForm.value.contacts
        .filter((contact) => contact.type === "mobile")
        .map((el) => el.number.toString());

      this.addProperty.emit(this.addPropertyForm.value);
    } else {
      this.snackBar.open(this.getTranslatedString("invalid_form_message"));
    }
  }
}
