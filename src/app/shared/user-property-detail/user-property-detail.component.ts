import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import { IAddress } from "@shared/interfaces/address";
import { getPropertyDetail } from "@shared/store/actions/property.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-property-detail",
  templateUrl: "./user-property-detail.component.html",
})
export class UserPropertyDetailComponent extends BaseComponent implements OnInit {
  propertyDetails$: Observable<IProperty>;
  propertyDetails: IProperty;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private store: Store<any>) {
    super();
  }

  ngOnInit(): void {
    this.listenObservables();
    this.getPropertyDetail();
  }

  getPropertyDetail() {
    if (this.data.propertyId) {
      this.store.dispatch(getPropertyDetail({ propertyId: this.data.propertyId }));
    }
  }

  listenObservables() {
    this.propertyDetails$ = this.store.select((store) => store.sharedModule.property.detail);
    this.propertyDetails$.subscribe((propertyDetails) => {
      this.propertyDetails = propertyDetails;
    });
  }

  getMobileNumbers(mobileNumbers: Array<string>) {
    if (mobileNumbers) {
      mobileNumbers = Object.values(mobileNumbers).filter(Boolean);
      return mobileNumbers.length > 0 ? mobileNumbers.join(", ") : "N/A";
    }
    return "N/A";
  }

  getPhones(phones: Array<string>) {
    if (phones) {
      phones = Object.values(phones).filter(Boolean);
      return phones !== null && phones.length > 0 ? phones.join(", ") : "N/A";
    }
    return "N/A";
  }

  getAddress(address: IAddress) {
    if (address) {
      const filteredAddress = Object.keys(address)
        .filter((key) => !["wardNo", "zipCode"].includes(key))
        .reduce((obj, key) => {
          obj[key] = address[key];
          return obj;
        }, {});
      return Object.values(filteredAddress).filter(Boolean).join(", ");
    }
  }

  openPDF(pdf: any) {
    window.open(pdf.largeFileUrl);
  }

  getStatus(status: string) {
    return status.replace("_", " ");
  }
}
