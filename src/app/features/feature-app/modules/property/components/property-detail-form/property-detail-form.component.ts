import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { AppPermissions, StorageKeys } from "@core/enums";
import { PermissionsService } from "@core/services";
import { CustomValidators } from "@core/utilities";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import {
  loadPropertyType,
  updatePropertyDetail,
  updateVerifiedPropertyDetail,
} from "@shared/store/actions/property.actions";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-property-detail-form",
  templateUrl: "./property-detail-form.component.html",
})
export class PropertyDetailFormComponent extends BaseComponent implements OnInit {
  @Input() propertyDetail: IProperty;
  contactsFormArray: FormArray;
  propertyDetailForm: FormGroup;
  propertyType: string;
  ownerId: string;
  countries = [];
  provinces = [];
  filteredProvinces: Observable<any>;
  propertyTypes$: Observable<any>;
  imagesFormArray: FormArray;
  hasPropertyEditAccess = AppPermissions.PROPERTY_EDIT;
  error$: Observable<Error>;

  constructor(private store: Store<any>, protected permissionService: PermissionsService) {
    super();
  }

  ngOnInit(): void {
    this.countries = this.datasService.countries;
    this.provinces = this.datasService.provinces;
    this.ownerId = this.storage.get(StorageKeys.OWNER).id;
    this.loadPropertyTypes();
    this.setPropertyDetailForm();
    this.buildForm();
    this.listenProvinceChanges();
    this.error$ = this.store.select((store) => store.sharedModule.property.error);
    this.error$.subscribe((err) => {
      if (err && this.propertyDetailForm) {
        this.errorMessageService.handleServerSideError(this.propertyDetailForm, err);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.setPropertyDetailForm();
    if (changes.propertyDetail && changes.propertyDetail.currentValue) {
      this.buildForm();
    }
  }

  private listenProvinceChanges() {
    this.filteredProvinces = this.propertyDetailForm
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

  loadPropertyTypes() {
    this.propertyTypes$ = this.store.select((store) => store.sharedModule.property.propertyTypes);
    this.store.dispatch(loadPropertyType(null));
  }

  private buildForm() {
    if (this.propertyDetail && this.propertyDetailForm) {
      //TODO: remove this code later
      // this.propertyDetail = this.removeEmptyOrNull(this.propertyDetail);
      this.propertyDetailForm.patchValue(this.propertyDetail);
      this.propertyDetailForm.get("propertyType").setValue(this.propertyDetail.propertyType.code);
      this.setSiteImages();
      this.setContacts();
    }
  }

  removeEmptyOrNull(obj) {
    Object.keys(obj).forEach(
      (k) =>
        (obj[k] && typeof obj[k] === "object" && this.removeEmptyOrNull(obj[k])) ||
        (!obj[k] && obj[k] !== undefined && delete obj[k])
    );

    return obj;
  }

  setContacts() {
    this.clearFormArray(this.contactsFormArray);
    this.setMobiles();
    this.setPhones();
  }

  setSiteImages() {
    this.clearFormArray(this.imagesFormArray);
    if (this.propertyDetail.images && this.propertyDetail.images.length > 0) {
      this.propertyDetail.images.forEach((image, index) => {
        const siteImageFormGroup: any = this.createSiteImage();
        siteImageFormGroup.patchValue(image);
        this.imagesFormArray.push(siteImageFormGroup);
      });
    }
  }

  setMobiles() {
    if (this.propertyDetail.mobileNumbers && this.propertyDetail.mobileNumbers.length > 0) {
      this.propertyDetail.mobileNumbers.forEach((mobile, index) => {
        const formGroup: any = this.createContact();
        formGroup.get("number").clearValidators();
        formGroup.get("number").updateValueAndValidity();
        formGroup.get("type").setValue("mobile");
        formGroup.get("number").setValue(mobile);
        formGroup.setValidators([Validators.minLength(10), Validators.maxLength(10), Validators.required]);
        formGroup.updateValueAndValidity();
        this.contactsFormArray.push(formGroup);
      });
    }
  }

  setPhones() {
    if (this.propertyDetail.phones && this.propertyDetail.phones.length > 0) {
      this.propertyDetail.phones.forEach((phone, index) => {
        if (phone) {
          const formGroup: any = this.createContact();
          formGroup.get("number").clearValidators();
          formGroup.get("number").updateValueAndValidity();
          formGroup.get("type").setValue("phone");
          formGroup.get("number").setValue(phone);
          formGroup.setValidators([Validators.minLength(7), Validators.maxLength(7), Validators.required]);
          formGroup.updateValueAndValidity();
          this.contactsFormArray.push(formGroup);
        }
      });
    }
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

  setPropertyDetailForm() {
    this.contactsFormArray = this.formBuilder.array([]);
    this.imagesFormArray = this.formBuilder.array([this.createSiteImage()]);
    this.propertyDetailForm = this.formBuilder.group({
      ownerId: [this.ownerId],
      propertyType: [this.propertyDetail.propertyType.code],
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
    this.propertyDetailForm.get("address").get("country").setValue(defaultCountry[0]);
  }

  createSiteImage() {
    return new FormControl("", [
      Validators.required,
      CustomValidators.requiredFileType(["png", "jpg", "jpeg"]),
      CustomValidators.requiredFileSize(5120),
    ]);
  }

  private createContact() {
    return this.formBuilder.group({
      type: ["phone"],
      number: ["", [Validators.minLength(7), Validators.maxLength(7)]],
    });
  }

  onAddSiteImages() {
    this.imagesFormArray.push(this.createSiteImage());
  }

  onUpdate() {
    if (this.propertyDetailForm.valid) {
      this.propertyDetailForm.value["phones"] = this.propertyDetailForm.value.contacts
        .filter((contact) => contact.type === "phone")
        .map((el) => el.number.toString());
      this.propertyDetailForm.value["mobileNumbers"] = this.propertyDetailForm.value.contacts
        .filter((contact) => contact.type === "mobile")
        .map((el) => el.number.toString());
      this.proceedUpdate();
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  proceedUpdate() {
    if (this.propertyDetail.status === "VERIFIED") {
      this.store.dispatch(updateVerifiedPropertyDetail({ payload: this.propertyDetailForm.value }));
    } else {
      this.store.dispatch(updatePropertyDetail({ payload: this.propertyDetailForm.value }));
    }
  }

  onFileRemove(index: number) {
    this.imagesFormArray.removeAt(index);
  }
}
