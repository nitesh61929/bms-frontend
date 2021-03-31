import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

export interface IUnit {
  sn: number;
  unit_name: string;
  unit_area: number;
  tenant_fullname: string;
  mobile_number: number;
  rent_or_owned: string;
}

const UNIT_DATA: IUnit[] = [
  {
    sn: 1,
    unit_name: "East,Tower-01,Floor-10,Unit-01",
    unit_area: 1680,
    tenant_fullname: "Ghanashyam Kushwaha",
    mobile_number: 9876543210,
    rent_or_owned: "Owned",
  },
  {
    sn: 2,
    unit_name: "East,Tower-02,Floor-14,Unit-02",
    unit_area: 1220,
    tenant_fullname: "-",
    mobile_number: 9851008979,
    rent_or_owned: "",
  },
];

@Component({
  selector: "app-design-units",
  templateUrl: "./design-units.component.html",
  styleUrls: ["./design-units.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignUnitsComponent implements OnInit {
  displayedColumns: string[] = ["sn", "unit_name", "unit_area", "tenant_fullname", "mobile_number", "rent_or_owned"];
  dataSource = UNIT_DATA;

  expandedElement: IUnit | null;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openStaffDialog() {}
}
