export interface IInvoiceSetting {
  prefix: string;
  identifier: string;
  startingInvoiceNumber: number;
  currentInvoiceNum?: string;
}
