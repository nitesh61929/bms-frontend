import { Component, Input, OnInit } from "@angular/core";
import { IAddress } from "@shared/interfaces/address";
import { IPropertyOwnerDetails } from "./../../../interfaces/property-owner-detail";

@Component({
  selector: "app-property-owner-info",
  templateUrl: "./property-owner-info.component.html",
})
export class PropertyOwnerInfoComponent implements OnInit {
  @Input() propertyOwner: IPropertyOwnerDetails;
  @Input() showStatusToggle: boolean;
  constructor() {}

  ngOnInit(): void {}

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
}
