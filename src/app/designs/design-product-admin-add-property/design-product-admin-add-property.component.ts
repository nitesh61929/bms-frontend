import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

@Component({
  selector: "app-design-product-admin-add-property",
  templateUrl: "./design-product-admin-add-property.component.html",
  styleUrls: ["./design-product-admin-add-property.component.scss"],
})
export class DesignProductAdminAddPropertyComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
