export interface IMaintenanceChargeConfig {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  createdBy: string;
  updatedBy: string;
  deletedBy?: any;
  id: string;
  propertyId: string;
  maintenanceChargeTypeId: string;
  amountChargeTypeId: string;
  amount: number;
  maintenanceFeatureId: string[];
  includeTax: boolean;
  taxPercent: number;
  includeFine: boolean;
  fineChargeFrequency: string;
  fineAmount: number;
  remarks: string;
}
