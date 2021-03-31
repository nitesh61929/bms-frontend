export interface IWaterChargeConfig {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  createdBy: string;
  updatedBy: string;
  deletedBy?: any;
  id: string;
  propertyId: string;
  chargeType: string;
  amount: number;
  includeFine: boolean;
  fineChargeFrequency: string;
  fineAmount: number;
  remarks: string;
}
