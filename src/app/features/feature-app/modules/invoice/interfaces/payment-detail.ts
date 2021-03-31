import { IFile } from "@shared/interfaces/file";
export interface IPaymentDetail {
  id: string;
  invoiceId: Array<string>;
  paymentType: string;
  paymentStatus: string;
  paidAt: string;
  paidBy: string;
  pendingAt: string;
  paymentDetails: any;
  amount: string;
  amountInWords: string;
  image: IFile;
  receivedDate?: string;
}
