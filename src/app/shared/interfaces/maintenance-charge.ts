import { IAmountChargeType } from "./amount-charge-type";
export interface IMaintenanceCharge {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  createdBy: string;
  updatedBy?: any;
  deletedBy?: any;
  id: string;
  maintenanceChargeTypeName: string;
  amountChargeTypes: Array<IAmountChargeType>;
}
