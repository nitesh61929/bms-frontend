import { Component, Input, OnInit } from "@angular/core";
import { IAddress } from "@shared/interfaces/address";

@Component({
  selector: "app-owner-details",
  templateUrl: "./owner-details.component.html",
})
export class OwnerDetailsComponent implements OnInit {
  @Input() owner: any;
  constructor() {}

  ngOnInit(): void {}

  getMobileNumbers(mobileNumbers: any) {
    if (mobileNumbers) {
      mobileNumbers = Object.values(mobileNumbers).filter(Boolean);
      return mobileNumbers.length > 0 ? mobileNumbers.join(", ") : "N/A";
    }
    return "N/A";
  }

  getPhones(phones: any) {
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

  getOwnerType() {
    return this.owner?.ownerType?.code;
  }
}
