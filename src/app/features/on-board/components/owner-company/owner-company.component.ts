import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormArray, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-owner-company",
  templateUrl: "./owner-company.component.html",
})
export class OwnerCompanyComponent extends BaseComponent implements OnInit, OnChanges {
  @Output() previousClicked: EventEmitter<null> = new EventEmitter<null>();
  @Output() nextClicked: EventEmitter<null> = new EventEmitter<null>();
  @Input() pathName: string;
  @Input() ownerDetail: any;
  @Input() error$: Observable<Error>;
  ownerCompanyForm: FormGroup;
  ownerType: string;
  contactsFormArray: FormArray;
  countries = [];
  provinces = [];
  filteredProvinces: Observable<any>;
  submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.countries = this.datasService.countries;
    this.provinces = this.datasService.provinces;
    this.ownerType = this.activatedRoute.snapshot.paramMap.get("ownerType").toUpperCase();
    if (this.ownerType) {
      this.setOwnerCompanyForm();
      this.listenProvinceChanges();
    }
    this.error$.subscribe((err) => {
      if (err && this.ownerCompanyForm) {
        this.errorMessageService.handleServerSideError(this.ownerCompanyForm, err);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ownerDetail && changes.ownerDetail.currentValue && this.ownerType) {
      if (this.ownerDetail.ownerType.code === "COMPANY") {
        this.ownerCompanyForm.patchValue(this.ownerDetail);
        this.ownerCompanyForm.get("ownerType").setValue(this.ownerDetail.ownerType.code.toUpperCase());
      }
      this.ownerCompanyForm.get("ownerId").setValue(this.ownerDetail.id);
      this.ownerCompanyForm.get("status").setValue("PENDING_VERIFICATION");
      this.setContacts();
    }
  }

  setContacts() {
    this.clearFormArray(this.contactsFormArray);
    this.setMobiles();
    this.setPhones();
  }

  setMobiles() {
    if (this.ownerDetail.mobileNumbers && this.ownerDetail.mobileNumbers.length > 0) {
      this.ownerDetail.mobileNumbers.forEach((mobile, index) => {
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
    if (this.ownerDetail.phones && this.ownerDetail.phones.length > 0) {
      this.ownerDetail.phones.forEach((phone, index) => {
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

  private listenProvinceChanges() {
    this.filteredProvinces = this.ownerCompanyForm
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

  setOwnerCompanyForm() {
    this.contactsFormArray = this.formBuilder.array([this.createContact()]);
    this.ownerCompanyForm = this.formBuilder.group({
      ownerId: [],
      ownerType: [this.ownerType],
      status: [],
      name: ["", [Validators.required, Validators.maxLength(80)]],
      email: ["", [Validators.required, Validators.email]],
      registrationNumber: ["", [Validators.required, Validators.maxLength(20)]],
      panNumber: ["", [Validators.required, Validators.maxLength(20)]],
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
    this.ownerCompanyForm.get("address").get("country").setValue(defaultCountry[0]);
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

  onPrevious() {
    this.previousClicked.next();
  }

  onNext() {
    this.submitted = true;
    if (this.ownerCompanyForm.valid) {
      this.ownerCompanyForm.value["phones"] = this.ownerCompanyForm.value.contacts
        .filter((contact) => contact.type === "phone")
        .map((el) => el.number.toString());
      this.ownerCompanyForm.value["mobileNumbers"] = this.ownerCompanyForm.value.contacts
        .filter((contact) => contact.type === "mobile")
        .map((el) => el.number.toString());

      this.nextClicked.emit(this.ownerCompanyForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
  }

  getContactLabel(index: number) {
    return "Phone";
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
}
