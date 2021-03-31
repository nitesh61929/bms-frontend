import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

export interface InvitedOwner {
  sn: number;
  fullname: string;
  phoneNumber: string;
  email: string;
  ownerType: string;
  userStatus: string;
  actions: string;
}

@Component({
  selector: "app-design-product-admin-invited",
  templateUrl: "./design-product-admin-invited.component.html",
  styleUrls: ["./design-product-admin-invited.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignProductAdminInvitedComponent implements OnInit {
  ELEMENT_DATA: InvitedOwner[] = [
    {
      sn: 1,
      fullname: "Ghanashyam Kushwaha",
      phoneNumber: "977-1-9851006453",
      email: "ghanashyam@smartmobe.com",
      ownerType: "Company",
      userStatus: "active",
      actions: "",
    },
    {
      sn: 2,
      fullname: "Ashish Agrawal",
      phoneNumber: "977-1-9851586953",
      email: "ashish@smartmobe.com",
      ownerType: "Individual",
      userStatus: "Inactive",
      actions: "",
    },
  ];

  dataSource = this.ELEMENT_DATA;
  columnsToDisplay = ["sn", "fullname", "phoneNumber", "email", "ownerType", "userStatus"];
  expandedElement: InvitedOwner | null;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
