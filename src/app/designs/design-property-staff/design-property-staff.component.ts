import { Component, OnInit } from '@angular/core';

export interface IStaff {
  sn: string;
  fullname: string;
  mobile_number: number;
  role: string;
  action: string;
}

const STAFF_DATA: IStaff[] = [
  { sn:"1", fullname: "Ghanashyam Kushwaha", mobile_number: 9876543210, role: "Property Manager", action:"" },
  { sn:"2", fullname: "Ashish Agrawal", mobile_number: 9876543210, role: "Gate Keeper", action:"" },
];

@Component({
  selector: 'app-design-property-staff',
  templateUrl: './design-property-staff.component.html',
  styleUrls: ['./design-property-staff.component.scss']
})
export class DesignPropertyStaffComponent implements OnInit {

  constructor() { }

  dataSource = STAFF_DATA;
  displayedColumns: string[] = ["sn", "fullname", "mobile_number", "role", "action"];
  

  ngOnInit(): void {
  }

  openStaffDialog() {}

}
