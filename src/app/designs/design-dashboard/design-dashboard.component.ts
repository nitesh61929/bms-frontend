import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

export interface IProperty {
  id?: string;
  name: string;
  type: string;
  units: number;
  location: string;
  open_tickets: number;
  status?: string;
  logo?: any;
}

const PROPERTIES: IProperty[] = [
  {
    name: "Sunrise Tower",
    type: "Apartment",
    units: 240,
    location: "Bhaisapati, Kathmandu, Nepal",
    open_tickets: 6,
  },
  {
    name: "Sunrise Homes",
    type: "Housing",
    units: 20,
    location: "Jhamsikhel, Kathmandu, Nepal",
    open_tickets: 10,
  },
  {
    name: "Sunrise Homes",
    type: "Housing",
    units: 20,
    location: "Jhamsikhel, Kathmandu, Nepal",
    open_tickets: 10,
  },
  {
    name: "Sunrise Homes",
    type: "Housing",
    units: 20,
    location: "Jhamsikhel, Kathmandu, Nepal",
    open_tickets: 10,
  },
  {
    name: "Sunrise Homes",
    type: "Housing",
    units: 20,
    location: "Jhamsikhel, Kathmandu, Nepal",
    open_tickets: 10,
  },
];

@Component({
  selector: "app-design-dashboard",
  templateUrl: "./design-dashboard.component.html",
})
export class DesignDashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  properties = PROPERTIES;

  ngOnInit(): void {}

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
