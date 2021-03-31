import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@core/components";
import { CustomValidators } from "@core/utilities";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-property-detail",
  templateUrl: "./property-detail.component.html",
})
export class PropertyDetailComponent extends BaseComponent implements OnInit {
  @Output() previousClicked: EventEmitter<null> = new EventEmitter<null>();
  @Output() nextClicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() pathName: string;
  @Input() error$: Observable<Error>;
  propertyDetailForm: FormGroup;
  propertyType: string;
  ownerId: string;
  contactsFormArray: FormArray;
  countries = [];
  provinces = [];
  filteredProvinces: Observable<any>;
  siteImages = [];
  imagesFormArray: FormArray;
  submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
    super();
    this.ownerId = this.activatedRoute.snapshot.paramMap.get("ownerId");
    this.propertyType = this.activatedRoute.snapshot.paramMap.get("propertyType").toUpperCase();
  }

  ngOnInit(): void {
    this.countries = this.datasService.countries;
    this.provinces = this.datasService.provinces;
    this.setPropertyDetailForm();
    this.listenProvinceChanges();
    this.error$.subscribe((err) => {
      if (err && this.propertyDetailForm) {
        this.errorMessageService.handleServerSideError(this.propertyDetailForm, err);
      }
    });
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

  setPropertyDetailForm() {
    this.contactsFormArray = this.formBuilder.array([this.createContact()]);
    this.imagesFormArray = this.formBuilder.array([this.createSiteImage()]);
    this.propertyDetailForm = this.formBuilder.group({
      ownerId: [this.ownerId],
      propertyType: [this.propertyType, Validators.maxLength(50)],
      name: ["", [Validators.required, Validators.maxLength(80)]],
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

  onPrevious() {
    this.previousClicked.next();
  }

  onNext() {
    this.submitted = true;
    if (this.propertyDetailForm.valid) {
      this.propertyDetailForm.value["phones"] = this.propertyDetailForm.value.contacts
        .filter((contact) => contact.type === "phone")
        .map((el) => el.number.toString());
      this.propertyDetailForm.value["mobileNumbers"] = this.propertyDetailForm.value.contacts
        .filter((contact) => contact.type === "mobile")
        .map((el) => el.number.toString());

      this.nextClicked.emit(this.propertyDetailForm.value);
    } else {
      this.snackBar.open(this.translate.instant("invalid_form_message"));
    }
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

  onAddSiteImages() {
    this.imagesFormArray.push(this.createSiteImage());
  }

  onFileRemove(index: number) {
    this.imagesFormArray.removeAt(index);
  }
}
