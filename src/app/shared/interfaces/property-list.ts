import { IAddress } from "@shared/interfaces/address";
export class IPropertyList {
  id: string;
  name: string;
  propertyTypeId: string;
  propertyTypeName: string;
  address?: IAddress;
  totalActiveUnits?: string;
  status: string;
  logo: any;
}
