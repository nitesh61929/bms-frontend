import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DesignAddStaffPopupComponent } from "../design-add-staff-popup/design-add-staff-popup.component";

export interface ITenant {
  sn: number;
  full_name: string;
  mobile_number: number;
  type: string;
  unit_name: string;
  rent_or_owned: string;
  status: string;
}

const TENANTS_DATA: ITenant[] = [
  {
    sn: 1,
    full_name: "Ghanashyam Kushwaha",
    mobile_number: 9876543210,
    type: "tenant",
    unit_name: "East, Tower-01, Floor-10, Unit-01",
    rent_or_owned: "rent",
    status: "active",
  },
  {
    sn: 2,
    full_name: "Ghanashyam Kushwaha",
    mobile_number: 9876543210,
    type: "sub-tenant",
    unit_name: "East, Tower-01, Floor-10, Unit-01",
    rent_or_owned: "rent",
    status: "inactive",
  },
];
@Component({
  selector: "app-design-tenant-active",
  templateUrl: "./design-tenant-active.component.html",
  styleUrls: ["./design-tenant-active.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignTenantActiveComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ["sn", "full_name", "mobile_number", "type", "unit_name", "rent_or_owned", "status"];
  dataSource = TENANTS_DATA;

  expandedElement: ITenant | null;

  ngOnInit(): void {}

  openStaffDialog() {
    this.dialog.open(DesignAddStaffPopupComponent, {
      panelClass: "dialog-contains-form",
    });
  }
}
