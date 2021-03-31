import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-design-add-staff-popup",
  templateUrl: "./design-add-staff-popup.component.html",
  styles: [],
})
export class DesignAddStaffPopupComponent implements OnInit {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DesignAddStaffPopupComponent>) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
