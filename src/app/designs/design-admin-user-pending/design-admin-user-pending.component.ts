import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { DesignAddStaffPopupComponent } from '../design-add-staff-popup/design-add-staff-popup.component';
import { DesignDialogAdminOwnerDetailComponent } from '../design-dialog-admin-owner-detail/design-dialog-admin-owner-detail.component';

export interface IAdminUser {
  sn: number;
  username: string;
  type: string;
  email: string;
  contact: string;
  address: string;
}


@Component({
  selector: 'app-design-admin-user-pending',
  templateUrl: './design-admin-user-pending.component.html',
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignAdminUserPendingComponent implements OnInit {

  ADMINUSER_DATA: IAdminUser[] = [
    {
      sn: 1, username: "Sunrise Builders", type: "Company", email: "info@smartmobe.com", contact: "977-1-4256789", address: "Tripura Marg, Triprushwor, Kathmandu, Ward Number: 01, Zip Code: 650045, Bagmati, Nepal",
    },
    {
      sn: 2, username: "Sunrise Builders", type: "Individual", email: "info@smartmobe.com", contact: "977-1-4256789", address: "Tripura Marg, Triprushwor, Kathmandu, Ward Number: 01, Zip Code: 650045, Bagmati, Nepal",
    }
  ];

  dataSource = this.ADMINUSER_DATA;
  columnsToDisplay = ["sn", "username", "type", "email", "contact", "address"];
  expandedElement: IAdminUser | null;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DesignDialogAdminOwnerDetailComponent);
  }

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }

}
