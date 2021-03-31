import { IAddress } from "./address";
import { IOwnerDetails } from "./owner-details";

export interface IPropertyOwnerDetails {
  id: string;
  name: string;
  email: string;
  mobileNumber: string;
  status: string;
  active: boolean;
  address: IAddress;
  owners: IOwnerDetails;
  propertyList?: any;
  ownerId?: string;
  ownerName?: string;
  ownerStatus?: string;
}
