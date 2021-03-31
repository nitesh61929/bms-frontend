export interface IUnit {
  id: string;
  unitName: string;
  structures: any;
  area: number;
  facilities: string;
  propertyId: string;
  occupy: string;
  bluePrintFile: any;
  contractFileForResidence: any;
  contractDateForResidence: IUnitContractDate;
  hasTenantInvited: boolean;
  maintenanceChargeForResidence: IUnitMaintenanceConfig;
  maintenanceSetupForResidence: boolean;
  rentChargeForResidence: IUnitRentConfig;
  rentSetupForResidence: boolean;
  residenceId: string;
  residenceName: string;
  residenceMobileNumber: string;
  invitationId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy: string;
  updatedBy: string;
  deletedBy: string;
}

export interface IUnitDetail {
  area: number;
  propertyId: string;
  occupy: string;
}

export interface IUnitRentConfig {
  amountChargeTypeId: string;
  amount: number;
  rentChargeFrequencyInterval: string;
  includeTax: boolean;
  taxPercent: number;
  includeFine: boolean;
  fineChargeFrequency: string;
  fineAmount: number;
  dueDays: number;
  invoiceStartDate: string;
}

export interface IUnitDocument {
  bluePrintFile: File;
  contractFileForResidence: File;
}

export interface IUnitContractDate {
  contractStartDate: any;
  contractEndDate: any;
}

export interface IUnitMaintenanceConfig {
  maintenanceChargeTypeId: string;
  amountChargeTypeId: string;
  amount: number;
  maintenanceChargeFrequencyInterval: string;
  includeTax: boolean;
  taxPercent: number;
  includeFine: boolean;
  fineChargeFrequency: string;
  fineAmount: number;
  maintenanceFeatureId: string[];
  dueDays: number;
  invoiceStartDate: string;
}
