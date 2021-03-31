import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BaseComponent } from "@core/components";
import { AppPermissions, AppRoutes } from "@core/enums";
import { IAddress } from "@shared/interfaces/address";
import { UserPropertyDetailComponent } from "@shared/user-property-detail/user-property-detail.component";

@Component({
  selector: "app-owner-property-list",
  templateUrl: "./owner-property-list.component.html",
})
export class OwnerPropertyListComponent extends BaseComponent implements OnInit {
  @Input() propertyList: any;
  @Input() accountId: string;

  columnsToDisplayProperties = ["sn", "logo", "name", "address", "status"];
  hasPropertyAddAccess = AppPermissions.PROPERTY_CREATE;

  constructor(public dialog: MatDialog) {
    super();
  }

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

  openPropertyDetailDialog(propertyId: string) {
    this.dialog.open(UserPropertyDetailComponent, {
      panelClass: "is-large",
      data: {
        propertyId,
      },
    });
  }

  onAddProperty() {
    this.router.navigate([AppRoutes.ADMIN_ADD_PROPERTY], { queryParams: { accountId: this.accountId } });
  }
}
