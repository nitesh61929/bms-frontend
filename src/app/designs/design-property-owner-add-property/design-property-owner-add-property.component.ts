import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

@Component({
  selector: "app-design-property-owner-add-property",
  templateUrl: "./design-property-owner-add-property.component.html",
  styleUrls: ["./design-property-owner-add-property.component.scss"],
})
export class DesignPropertyOwnerAddPropertyComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
