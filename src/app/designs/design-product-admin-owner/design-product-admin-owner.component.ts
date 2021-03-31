import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";
import { DesignDialogPropertyDetailComponent } from "../design-dialog-property-detail/design-dialog-property-detail.component";
import { DesignInvitationDialogComponent } from "../design-invitation-dialog/design-invitation-dialog.component";

export interface PeriodicElement {
  sn: number;
  fullname: string;
  phoneNumber: string;
  email: string;
  ownerType: string;
  userStatus: string;
}

export interface IProperties {
  sn: number;
  image: string;
  name: string;
  contact: string;
  address: string;
}
@Component({
  selector: "app-design-product-admin-owner",
  templateUrl: "./design-product-admin-owner.component.html",
  styleUrls: ["./design-product-admin-owner.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignProductAdminOwnerComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    {
      sn: 1,
      fullname: "Ghanashyam Kushwaha",
      phoneNumber: "977-1-9851006453",
      email: "ghanashyam@smartmobe.com",
      ownerType: "Company",
      userStatus: "active",
    },
    {
      sn: 2,
      fullname: "Ashish Agrawal",
      phoneNumber: "977-1-9851586953",
      email: "ashish@smartmobe.com",
      ownerType: "Company",
      userStatus: "Inactive",
    },
    {
      sn: 3,
      fullname: "Prabesh Gurung",
      phoneNumber: "977-1-9829386453",
      email: "prabesh@smartmobe.com",
      ownerType: "Company",
      userStatus: "Inactive",
    },
    {
      sn: 4,
      fullname: "Jagesh Maharjan",
      phoneNumber: "977-1-9851000918",
      email: "Jagesh@smartmobe.com",
      ownerType: "Individual",
      userStatus: "active",
    },
  ];

  PROPERTIES_DATA: IProperties[] = [
    {
      sn: 1,
      image: "./assets/images/hero.jpg",
      name: "Sunrise Homes",
      contact: "977-1-423567890",
      address: "Tripura Marg, Tripureswor, Kathmandu, Nepal",
    },
    {
      sn: 2,
      image: "./assets/images/hero.jpg",
      name: "Sunrise Homes",
      contact: "977-1-423567890",
      address: "Tripura Marg, Tripureswor, Kathmandu, Nepal",
    },
    {
      sn: 3,
      image: "./assets/images/hero.jpg",
      name: "Sunrise Housing",
      contact: "977-1-423567890",
      address: "Balkumari, Koteshwor, Kathmandu, Nepal",
    },
  ];

  dataSource = this.ELEMENT_DATA;
  columnsToDisplay = ["sn", "fullname", "phoneNumber", "email", "ownerType"];
  expandedElement: PeriodicElement | null;

  dataSourceProperties = this.PROPERTIES_DATA;
  columnsToDisplayProperties = ["sn", "image", "name", "contact", "address"];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DesignInvitationDialogComponent, {
      panelClass: "dialog-contains-form",
    });
  }

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }

  openPropertyDetailDialog() {
    this.dialog.open(DesignDialogPropertyDetailComponent, {});
  }
}
