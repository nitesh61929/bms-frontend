import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

export interface IUser {
  fullname: string;
  age: number;
  user_type: string;
  associated_properties: string;
  joined_date: string;
  last_active: string;
}

const USERS_DATA: IUser[] = [
  {
    fullname: "James C. Barlow",
    age: 30,
    user_type: "Owner",
    associated_properties: "Bridge House",
    joined_date: "Fri Nov 30, 2020",
    last_active: "1 day ago",
  },
  {
    fullname: "Salvatore H. Hayter",
    age: 40,
    user_type: "Property Manager",
    associated_properties: "Primrose House",
    joined_date: "Fri Nov 30, 2020",
    last_active: "2 days ago",
  },
  {
    fullname: "Cora C. Holguin",
    age: 24,
    user_type: "Tenant",
    associated_properties: "Primrose House",
    joined_date: "Fri Nov 30, 2020",
    last_active: "1 day ago",
  },
  {
    fullname: "Cora C. Holguin",
    age: 24,
    user_type: "Staff",
    associated_properties: "Bridge House",
    joined_date: "Fri Nov 30, 2020",
    last_active: "1 day ago",
  },
  {
    fullname: "Alfred D. Galloway",
    age: 45,
    user_type: "Staff",
    associated_properties: "Primrose House",
    joined_date: "Fri Nov 30, 2020",
    last_active: "1 hour ago",
  },
];

@Component({
  selector: "app-design-users",
  templateUrl: "./design-users.component.html",
  styles: [],
})
export class DesignUsersComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = ["fullname", "age", "user_type", "associated_properties", "joined_date", "last_active"];
  userDataSource = USERS_DATA;

  openDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
