import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DesignAddStaffPopupComponent } from '../design-add-staff-popup/design-add-staff-popup.component';
import { DesignDialogAdminOwnerDetailComponent } from '../design-dialog-admin-owner-detail/design-dialog-admin-owner-detail.component';

export interface PeriodicElement {
  sn: number;
  ownername: string;
  propertyName: string;
  phoneNumber: string;
  propertyEmail: string;
  propertyType: string;
}

export interface IProperties {
  sn: number;
  image: string;
  name: string;
  contact: string;
  address: string;
}

@Component({
  selector: 'app-design-product-admin-property-cancelled',
  templateUrl: './design-product-admin-property-cancelled.component.html',
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignProductAdminPropertyCancelledComponent implements OnInit {
  selected = "domain";
  ELEMENT_DATA: PeriodicElement[] = [
    {
      sn: 1,
      ownername: "Ghanashyam Kushwaha",
      phoneNumber: "5782890",
      propertyName: "Sunrise Homes",
      propertyEmail: "ghanashyam@smartmobe.com",
      propertyType: "Apartment",
    },
    {
      sn: 2,
      ownername: "Ashish Agrawal",
      phoneNumber: "57856890",
      propertyName: "CE Apartment, chauni",
      propertyEmail: "ashish@smartmobe.com",
      propertyType: "Apartment",
    },
    {
      sn: 3,
      ownername: "Prabesh Suwal",
      phoneNumber: "57856890",
      propertyName: "Sunrise homes",
      propertyEmail: "prabesh@sunriseconstrucrion.com",
      propertyType: "Housing",
    },
    {
      sn: 4,
      ownername: "Nisteh shrestha",
      phoneNumber: "57856890",
      propertyName: "Westar",
      propertyEmail: "nitesh@4servicebuilder.com",
      propertyType: "Housing",
    },
    {
      sn: 4,
      ownername: "Nisteh shrestha",
      phoneNumber: "57856890",
      propertyName: "Westar",
      propertyEmail: "nitesh@4servicebuilder.com",
      propertyType: "Housing",
    },
  ];

  PROPERTIES_DATA: IProperties[] = [
    {
      sn: 1,
      image: "./assets/images/hero.jpg",
      name: "Ghanashyam Kushwaha",
      contact: "977-1-423567890",
      address: "Tripura Marg, Tripureswor, Kathmandu, Nepal",
    },
    {
      sn: 2,
      image: "./assets/images/hero.jpg",
      name: "Prabesh Suwal",
      contact: "977-1-423567890",
      address: "Tripura Marg, Tripureswor, Kathmandu, Nepal",
    },
    {
      sn: 3,
      image: "./assets/images/hero.jpg",
      name: "Jagesh Maharjan",
      contact: "977-1-423567890",
      address: "Balkumari, Koteshwor, Kathmandu, Nepal",
    },
  ];

  dataSource = this.ELEMENT_DATA;
  columnsToDisplay = ["sn", "propertyName", "phoneNumber", "propertyEmail", "propertyType", "ownername"];
  expandedElement: PeriodicElement | null;

  dataSourceProperties = this.PROPERTIES_DATA;
  columnsToDisplayProperties = ["sn", "image", "name", "contact", "address"];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DesignDialogAdminOwnerDetailComponent);
  }

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }

}
