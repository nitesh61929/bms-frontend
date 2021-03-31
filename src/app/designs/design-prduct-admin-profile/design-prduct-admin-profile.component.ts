import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

@Component({
  selector: "app-design-prduct-admin-profile",
  templateUrl: "./design-prduct-admin-profile.component.html",
  styleUrls: ["./design-prduct-admin-profile.component.scss"],
})
export class DesignPrductAdminProfileComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
