import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

export interface IHelpDesk {
  ticket_ID: string;
  title: string;
  category: string;
  priority: string;
  status: string;
  created_date: string;
  due_date: string;
  detail: string;
}

const HELPDESK_DATA: IHelpDesk[] = [
  {
    ticket_ID: "SH-001",
    title: "Issue will stop project progress.",
    category: "Electricity",
    priority: "critical",
    status: "New",
    created_date: "4 min ago",
    due_date: "Fri Oct 30, 2020",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in    culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    ticket_ID: "SH-002",
    title: "Issue will likely impact budget, schedule or scope.",
    category: "Plumbing",
    priority: "high",
    status: "New",
    created_date: "16 hr ago",
    due_date: "Fri Oct 30, 2020",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in    culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    ticket_ID: "SH-003",
    title: "Issue impact the project, but could be mitigated to avoid an impact on budget, schedule or scope.",
    category: "Roof Leakage",
    priority: "medium",
    status: "In Progress",
    created_date: "2 days ago",
    due_date: "Fri Oct 30, 2020",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in    culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    ticket_ID: "SH-004",
    title: "Issue is low impact and/or low effort to resolve.",
    category: "Internet",
    priority: "low",
    status: "Resolved",
    created_date: "4 days ago",
    due_date: "Fri Oct 30, 2020",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in    culpa qui officia deserunt mollit anim id est laborum.",
  },
];

@Component({
  selector: "app-design-helpdesk",
  templateUrl: "./design-helpdesk.component.html",
  styleUrls: ["./design-helpdesk.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignHelpdeskComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = ["ticket_ID", "title", "category", "priority", "status", "created_date", "due_date"];
  dataSource = HELPDESK_DATA;
  expandedElement: IHelpDesk | null;

  ngOnInit(): void {}
}
