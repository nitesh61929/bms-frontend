import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

export interface InvoiceUnitInfo {
  invoiceNumber: string;
  ownerName: string;
  phoneNumber: string;
  category: string;
  invoiceInterval: string;
  createdDate: string;
  amount: string;
  status: string;
}

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: "app-design-invoices",
  templateUrl: "./design-invoices.component.html",
  styleUrls: ["./design-invoices.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class DesignInvoicesComponent implements OnInit {
  selected = "domain";
  ELEMENT_DATA: InvoiceUnitInfo[] = [
    {
      invoiceNumber: "SL-4569307",
      ownerName: "Ghanashyam Kushwaha",
      phoneNumber: "9851008969",
      category: "Electricity",
      invoiceInterval: "01-12-2020 - 01-01-2021",
      createdDate: "01-01-2021",
      amount: "7810.9",
      status: "Due",
    },
    {
      invoiceNumber: "SL-4569307",
      ownerName: "Nitesh Shrestha",
      phoneNumber: "9851008969",
      category: "Electricity",
      invoiceInterval: "01-12-2020 - 01-01-2021",
      createdDate: "01-01-2021",
      amount: "7810.9",
      status: "Completed",
    },
    {
      invoiceNumber: "SL-4569307",
      ownerName: "Dhan Bahadur Rana Magar",
      phoneNumber: "9851008969",
      category: "Maintenance",
      invoiceInterval: "01-12-2020 - 01-01-2021",
      createdDate: "01-01-2021",
      amount: "10,518.01",
      status: "OverDue",
    },
    {
      invoiceNumber: "SL-4569307",
      ownerName: "Dhan Bahadur Rana Magar",
      phoneNumber: "9851008969",
      category: "Maintenance",
      invoiceInterval: "01-12-2020 - 01-01-2021",
      createdDate: "01-01-2021",
      amount: "10,518.01",
      status: "Pending",
    },
  ];

  dataSource = this.ELEMENT_DATA;
  columnsToDisplay = [
    "invoiceNumber",
    "ownerName",
    "phoneNumber",
    "category",
    "invoiceInterval",
    "createdDate",
    "amount",
    "status",
  ];
  expandedElement: InvoiceUnitInfo | null;

  displayedColumns: string[] = ["item", "cost"];
  transactions: Transaction[] = [
    { item: "Total", cost: 7560 },
    { item: "Fine", cost: 170.9 },
    { item: "Taxable Amount", cost: 7710.9 },
    { item: "VAT 13%", cost: 800.4 },
    { item: "Total Amount", cost: 7810.9 },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openStaffDialog() {}
}
