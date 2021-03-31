import { Component, OnInit } from '@angular/core';

export interface CommitteeMember {
  sn: string;
  fullname: string;
  mobile_number: number;
  role: string;
  action: string;
}

const COMMITTEE_DATA: CommitteeMember[] = [
  { sn:"1", fullname: "Ghanashyam Kushwaha", mobile_number: 9876543210, role: "Property Manager", action:"" },
  { sn:"2", fullname: "Ashish Agrawal", mobile_number: 9876543210, role: "Gate Keeper", action:"" },
];

@Component({
  selector: 'app-design-committee-member',
  templateUrl: './design-committee-member.component.html',
  styleUrls: ['./design-committee-member.component.scss']
})
export class DesignCommitteeMemberComponent implements OnInit {

  constructor() { }

  dataSource = COMMITTEE_DATA;
  displayedColumns: string[] = ["sn", "fullname", "mobile_number", "role", "action"];

  ngOnInit(): void {
  }

openStaffDialog(){}
}
