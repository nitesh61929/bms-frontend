import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddHelpdeskCategoryComponent } from "../design-add-helpdesk-category/design-add-helpdesk-category.component";
//import { DesignAddHelpdeskCategoryComponent } from '../design-add-helpdesk-category.component';

export interface HelpdeskCategory {
  sn: number;
  category_name: string;
  category_status: string;
  created_date: string;
  actions: string;
}

const ELEMENT_DATA: HelpdeskCategory[] = [
  { sn: 1, category_name: "Plumbing", created_date: "Fri Oct 30, 2020", category_status: "active", actions: "" },
  { sn: 2, category_name: "Cleaning", created_date: "Fri Oct 30, 2020", category_status: "inactive", actions: "" },
];

@Component({
  selector: "app-design-helpdesk-category",
  templateUrl: "./design-helpdesk-category.component.html",
  styleUrls: ["./design-helpdesk-category.component.scss"],
})
export class DesignHelpdeskCategoryComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ["sn", "category_name", "created_date", "category_status", "actions"];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {}

  helpDeskAddCategoryDialog() {
    this.dialog.open(DesignAddHelpdeskCategoryComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
