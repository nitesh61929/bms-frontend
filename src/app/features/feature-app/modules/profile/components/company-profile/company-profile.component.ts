import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Store } from "@ngrx/store";
import { IOwnerDetails } from "@shared/interfaces/owner-details";
import { updateCompanyDetails, updateVerifiedCompanyDetails } from "@shared/store/actions/profile.actions";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-company-profile",
  templateUrl: "./company-profile.component.html",
})
export class CompanyProfileComponent extends BaseComponent implements OnInit {
  @Input() companyDetail$: Observable<IOwnerDetails>;
  @Input() companyProfileError$: Observable<Error>;
  companyDetail: IOwnerDetails;
  companyDetailForm: FormGroup;
  countries = [];
  provinces = [];
  filteredProvinces: Observable<any>;
  contactsFormArray: FormArray;
  submitted: boolean = false;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.setCompanyDetailForm();
    this.listenObservables();
    this.countries = this.datasService.countries;
    this.provinces = this.datasService.provinces;
    this.listenProvinceChanges();

    this.companyProfileError$.subscribe((err) => {
      if (err && this.companyDetailForm) {
        this.errorMessageService.handleServerSideError(this.companyDetailForm, err);
      }
    });
  }

  listenObservables() {
    this.companyDetail$.subscribe((companyDetail) => {
      if (companyDetail) {
        this.companyDetail = companyDetail;
        // this.setCompanyDetailForm();
        this.updateValidators(this.companyDetail?.ownerType?.code);
        this.buildCompanyDetailForm();
      }
    });
  }

  private listenProvinceChanges() {
    this.filteredProvinces = this.companyDetailForm
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

  buildCompanyDetailForm() {
    this.submitted = false;
    if (this.companyDetail && this.companyDetailForm) {
      if (!this.companyDetail.address) {
        delete this.companyDetail.address;
      }
      this.companyDetailForm.patchValue(this.companyDetail);
      this.companyDetailForm.get("ownerId").setValue(this.companyDetail?.id);
      this.companyDetailForm.get("ownerType").setValue(this.companyDetail?.ownerType?.code);

      if (!this.companyDetail.address || (this.companyDetail.address && this.companyDetail.address.country === "")) {
        const defaultCountry = this.countries.filter((c) => c.value === "Nepal").map((res) => res.value);
        this.companyDetailForm.get("address").get("country").setValue(defaultCountry[0]);
      }
      this.companyDetailForm.get("status").setValue(this.companyDetail?.status);
      this.setContacts();
    }
  }

  setContacts() {
    this.clearFormArray(this.contactsFormArray);
    this.setMobiles();
    this.setPhones();
  }

  setMobiles() {
    if (this.companyDetail.mobileNumbers && this.companyDetail.mobileNumbers.length > 0) {
      this.companyDetail.mobileNumbers.forEach((mobile, index) => {
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
    if (this.companyDetail.phones && this.companyDetail.phones.length > 0) {
      this.companyDetail.phones.forEach((phone, index) => {
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

  setCompanyDetailForm() {
    this.contactsFormArray = this.formBuilder.array([this.createContact()]);
    this.companyDetailForm = this.formBuilder.group({
      ownerId: "",
      name: ["", [Validators.required, Validators.maxLength(80)]],
      email: ["", [Validators.required, Validators.email]],
      status: [],
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
      ownerType: [""],
      panNumber: ["", [Validators.required, Validators.maxLength(20)]],
      registrationNumber: [""],
      citizenshipNumber: [""],
      logo: [""],
      panCertificate: [""],
      registrationCertificate: [""],
      citizenshipFront: [""],
      citizenshipBack: [""],
    });

    const defaultCountry = this.countries.filter((c) => c.value === "Nepal").map((res) => res.value);
    this.companyDetailForm.get("address").get("country").setValue(defaultCountry[0]);
  }

  updateValidators(value: string) {
    this.clearFormControlValidators();
    this.companyDetailForm
      .get("logo")
      .setValidators([
        Validators.required,
        CustomValidators.requiredFileType(["png", "jpg", "jpeg"]),
        CustomValidators.requiredFileSize(5120),
      ]);
    this.companyDetailForm
      .get("panCertificate")
      .setValidators([
        Validators.required,
        CustomValidators.requiredFileType(["png", "jpg", "jpeg", "pdf"]),
        CustomValidators.requiredFileSize(5120),
      ]);
    if (value === "INDIVIDUAL") {
      this.companyDetailForm.get("citizenshipNumber").setValidators([Validators.required, Validators.maxLength(20)]);
      this.companyDetailForm
        .get("citizenshipFront")
        .setValidators([
          Validators.required,
          CustomValidators.requiredFileType(["png", "jpg", "jpeg", "pdf"]),
          CustomValidators.requiredFileSize(5120),
        ]);
      this.companyDetailForm
        .get("citizenshipBack")
        .setValidators([
          Validators.required,
          CustomValidators.requiredFileType(["png", "jpg", "jpeg", "pdf"]),
          CustomValidators.requiredFileSize(5120),
        ]);
      this.companyDetailForm.get("citizenshipNumber").updateValueAndValidity();
      this.companyDetailForm.get("citizenshipFront").updateValueAndValidity();
      this.companyDetailForm.get("citizenshipBack").updateValueAndValidity();
    }
    if (value === "COMPANY") {
      this.companyDetailForm.get("registrationNumber").setValidators([Validators.required, Validators.maxLength(20)]);
      this.companyDetailForm
        .get("registrationCertificate")
        .setValidators([
          Validators.required,
          CustomValidators.requiredFileType(["png", "jpg", "jpeg", "pdf"]),
          CustomValidators.requiredFileSize(5120),
        ]);
      this.companyDetailForm.get("registrationNumber").updateValueAndValidity();
      this.companyDetailForm.get("registrationCertificate").updateValueAndValidity();
    }
  }

  clearFormControlValidators() {
    this.companyDetailForm.get("logo").clearValidators();
    this.companyDetailForm.get("panCertificate").clearValidators();
    this.companyDetailForm.get("citizenshipNumber").clearValidators();
    this.companyDetailForm.get("registrationNumber").clearValidators();
    this.companyDetailForm.get("citizenshipFront").clearValidators();
    this.companyDetailForm.get("citizenshipBack").clearValidators();
    this.companyDetailForm.get("registrationCertificate").clearValidators();

    this.companyDetailForm.get("logo").updateValueAndValidity();
    this.companyDetailForm.get("panCertificate").updateValueAndValidity();
    this.companyDetailForm.get("citizenshipNumber").updateValueAndValidity();
    this.companyDetailForm.get("registrationNumber").updateValueAndValidity();
    this.companyDetailForm.get("citizenshipFront").updateValueAndValidity();
    this.companyDetailForm.get("citizenshipBack").updateValueAndValidity();
    this.companyDetailForm.get("registrationCertificate").updateValueAndValidity();
  }

  private createContact() {
    return this.formBuilder.group({
      type: ["phone"],
      number: ["", [Validators.minLength(7), Validators.maxLength(7)]],
    });
  }

  addContact(): void {
    this.contactsFormArray.push(this.createContact());
  }

  removeContact(index: number) {
    this.contactsFormArray.removeAt(index);
  }

  onPhoneIconClick(index: number) {
    this.contactsFormArray.controls[index]["controls"]["type"].setValue("phone");
    this.contactsFormArray.controls[index]
      .get("number")
      .setValidators([Validators.minLength(7), Validators.maxLength(7)]);
    this.contactsFormArray.controls[index].get("number").updateValueAndValidity();
  }

  onMobileIconClick(index: number) {
    this.contactsFormArray.controls[index]["controls"]["type"].setValue("mobile");
    this.contactsFormArray.controls[index]
      .get("number")
      .setValidators([Validators.minLength(10), Validators.maxLength(10)]);
    this.contactsFormArray.controls[index].get("number").updateValueAndValidity();
  }

  updateCompanyDetail() {
    this.submitted = true;
    if (this.companyDetailForm.valid) {
      this.companyDetailForm.value["phones"] = this.companyDetailForm.value.contacts
        .filter((contact) => contact.type === "phone")
        .map((el) => el.number.toString());
      this.companyDetailForm.value["mobileNumbers"] = this.companyDetailForm.value.contacts
        .filter((contact) => contact.type === "mobile")
        .map((el) => el.number.toString());

      if (this.companyDetail.status === "VERIFIED") {
        this.store.dispatch(updateVerifiedCompanyDetails({ payload: this.companyDetailForm.value }));
      } else {
        this.store.dispatch(updateCompanyDetails({ payload: this.companyDetailForm.value }));
      }
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  getOwnerType() {
    return this.companyDetail?.ownerType?.code;
  }
}
