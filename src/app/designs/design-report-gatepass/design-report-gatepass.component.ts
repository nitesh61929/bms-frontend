import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";


export interface reportGatepass {
  sn: string;
  image: string;
  visitorName: string;
  phoneNumberVisitor: string;
  approverName: string;
  dateTime: string;
  unitName: string;
  purposeVisit: string;
}

@Component({
  selector: 'app-design-report-gatepass',
  templateUrl: './design-report-gatepass.component.html',
  styleUrls: ['./design-report-gatepass.component.scss'],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignReportGatepassComponent implements OnInit {

  selected = "domain";
  ELEMENT_DATA: reportGatepass[] = [
    {
      sn: "1",
      image: "./assets/images/hero.jpg",
      visitorName:"Aditya Malla",
      phoneNumberVisitor:"9808465783",
      approverName:"Sushant Nakarmi",
      dateTime: "03-02-2021 , 14:30",
      unitName: "Floor 4, D-12",
      purposeVisit: "Delivery",
    }, 
    {
      sn: "2",
      image: "./assets/images/hero.jpg",
      visitorName:"Aditya Malla",
      phoneNumberVisitor:"9808465783",
      approverName:"Sushant Nakarmi",
      dateTime: "03-02-2021 , 14:30",
      unitName: "Floor 4, D-12",
      purposeVisit: "Delivery",
    }, 
    {
      sn: "3",
      image: "./assets/images/hero.jpg",
      visitorName:"Aditya Malla",
      phoneNumberVisitor:"9808465783",
      approverName:"Sushant Nakarmi",
      dateTime: "03-02-2021 , 14:30",
      unitName: "Floor 4, D-12",
      purposeVisit: "Delivery",
    }, 
  ]

  dataSource = this.ELEMENT_DATA;
  columnsToDisplay = ["sn", "image", "visitorName", "phoneNumberVisitor", "approverName", "dateTime", "unitName", "purposeVisit"];
  expandedElement: reportGatepass | null;

  constructor() { }

  ngOnInit(): void {}

  openStaffDialog() {}

}
