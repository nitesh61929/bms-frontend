import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-design-add-helpdesk-category',
  templateUrl: './design-add-helpdesk-category.component.html',
  styleUrls: ['./design-add-helpdesk-category.component.scss']
})
export class DesignAddHelpdeskCategoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DesignAddHelpdeskCategoryComponent>) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
