export interface IUnitElectricityConfig {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  createdBy: string;
  updatedBy: string;
  deletedBy?: any;
  id: string;
  propertyId: string;
  perUnitCharge: number;
  includeKvaLoadDemandCharge: boolean;
  kvaLoadDemand: number;
  kvaLoadDemandAmount: number;
  includeFine: boolean;
  fineType: string;
  fineAmount: number;
  remarks: string;
}
