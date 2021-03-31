import { Component, OnInit } from '@angular/core';

export interface invoiceDetail {
  items: string;
  description: string;
  amount: number;
}


@Component({
  selector: 'app-design-invoice-detail-popup',
  templateUrl: './design-invoice-detail-popup.component.html',
  styleUrls: ['./design-invoice-detail-popup.component.scss']
})
export class DesignInvoiceDetailPopupComponent implements OnInit {

  selected = "domain";
  ELEMENT_DATA: invoiceDetail[] = [
    {
      items: "Electricity",
      description: "Electricity Bill of Dec",
      amount: 3000,
    }, 
      
  ];

  
  dataSource = this.ELEMENT_DATA;
  columnsToDisplay = ["items", "description", "amount"];

  constructor() { }

  ngOnInit(): void {
  }

}
