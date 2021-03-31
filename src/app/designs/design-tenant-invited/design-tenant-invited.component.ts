import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

export interface InvitedTenant {
  sn: number;
  full_name: string;
  mobile_number: number;
  unit_name: string;
  actions: string;
}

const TENANTS_DATA: InvitedTenant[] = [
  {
    sn: 1,
    full_name: "Ghanashyam Kushwaha",
    mobile_number: 9876543210,
    unit_name: "East, Tower-01, Floor-10, Unit-01",
    actions: "",
  },
  {
    sn: 2,
    full_name: "Ghanashyam Kushwaha",
    mobile_number: 9876543210,
    unit_name: "East, Tower-01, Floor-10, Unit-01",
    actions: "",
  },
];
@Component({
  selector: "app-design-tenant-invited",
  templateUrl: "./design-tenant-invited.component.html",
  styleUrls: ["./design-tenant-invited.component.scss"],
})
export class DesignTenantInvitedComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ["sn", "full_name", "mobile_number", "unit_name", "actions"];
  dataSource = TENANTS_DATA;

  ngOnInit(): void {}

  resendInvitation() {}

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
