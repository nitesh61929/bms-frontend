import { IAddress } from "@shared/interfaces/address";
import { IPropertyType } from "app/features/on-board/interfaces/property-type";

export interface IPropertyList {
  id: string;
  name: string;
  email: string;
  mobileNumbers: Array<string>;
  phones: Array<string>;
  address: IAddress;
  propertyType: IPropertyType;
  status: string;
  facility: any;
  ownerName: any;
}
