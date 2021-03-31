import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

export interface IStaff {
  fullname: string;
  mobile_number: number;
  role: string;
}

const STAFF_DATA: IStaff[] = [
  { fullname: "Ghanashyam Kushwaha", mobile_number: 9876543210, role: "Property Manager" },
  { fullname: "Ghanashyam Kushwaha", mobile_number: 9876543210, role: "Property Manager" },
];

@Component({
  selector: "app-design-staff",
  templateUrl: "./design-staff.component.html",
  styleUrls: ["./design-staff.component.scss"],
})
export class DesignStaffComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ["fullname", "mobile_number", "role", "actions"];
  staffDataSource = STAFF_DATA;

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
