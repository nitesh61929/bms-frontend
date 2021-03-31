import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { BaseComponent } from "@core/components/base.component";
import { CustomValidators } from "@core/utilities";
import { IProperty } from "@shared/interfaces";

@Component({
  selector: "app-basic-property-detail",
  templateUrl: "./basic-property-detail.component.html",
})
export class BasicPropertyDetailComponent extends BaseComponent implements OnInit {
  @ViewChild("basicPropertyDetailNgForm") basicPropertyDetailNgForm: NgForm;
  @Output() logoChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() propertyDetail: IProperty;
  @Input() propertyDetailForm: FormGroup;
  basicPropertyDetailForm: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  onFileUpload(file: any) {
    this.logoChanged.emit(file);
  }

  setBasicPropertyDetailForm() {
    this.basicPropertyDetailForm = this.formBuilder.group({
      logo: ["", [CustomValidators.requiredFileType(["png", "jpg", "jpeg"]), CustomValidators.requiredFileSize(5120)]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setBasicPropertyDetailForm();
    if (changes.propertyDetail && changes.propertyDetail.currentValue) {
      if (this.propertyDetail && this.basicPropertyDetailForm) {
        this.basicPropertyDetailForm.get("logo").setValue(this.propertyDetail.logo);
      }
    }
  }

  getPhones(phones: any) {
    if (phones) {
      phones = Object.values(phones).filter(Boolean);
      return phones !== null && phones.length > 0 ? phones.join(", ") : "N/A";
    }
    return "N/A";
  }

  getMobiles(mobiles: Array<string>) {
    if (mobiles) {
      mobiles = Object.values(mobiles).filter(Boolean);
      return mobiles.length > 0 ? mobiles.join(", ") : "N/A";
    }
    return "N/A";
  }
}
