import { Component, OnInit } from '@angular/core';

export interface reportPanicAlert {
  sn: string;
  ownerName: string;
  unitName: string;
  create: string;
  response: string;
  responseBy: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-design-report-panic-alert',
  templateUrl: './design-report-panic-alert.component.html',
  styleUrls: ['./design-report-panic-alert.component.scss']
})
export class DesignReportPanicAlertComponent implements OnInit {

  selected = "domain";
  ELEMENT_DATA: reportPanicAlert[] = [
    { sn: "1", ownerName: "Ghanashyam Kushwaha", unitName: "D-Block, Fllor-04, D3", create: "18-04-2020 15:05", response: "90 Sec", responseBy: "Bharat Gharti Magar", phoneNumber: "900987645",},
    { sn: "2", ownerName: "Ghanashyam Kushwaha", unitName: "D-Block, Fllor-04, D3", create: "18-04-2020 15:05", response: "90 Sec", responseBy: "Bharat Gharti Magar", phoneNumber: "900987645",},
    { sn: "3", ownerName: "Ghanashyam Kushwaha", unitName: "D-Block, Fllor-04, D3", create: "18-04-2020 15:05", response: "90 Sec", responseBy: "Bharat Gharti Magar", phoneNumber: "900987645",}, 
  ]

  dataSource = this.ELEMENT_DATA;
  columnsToDisplay = ["sn", "ownerName", "unitName", "create", "response", "responseBy", "phoneNumber"];

  constructor() { }

  ngOnInit(): void {}
  openStaffDialog() {}
}
