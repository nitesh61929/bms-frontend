import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-design-add-notice-popup",
  templateUrl: "./design-add-notice-popup.component.html",
})
export class DesignAddNoticePopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DesignAddNoticePopupComponent>) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
