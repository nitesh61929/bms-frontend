import { IAddress } from "@shared/interfaces/address";

export interface IUnitOwner {
  id: string;
  name: string;
  dob: string;
  mobileNumber: string;
  gender: string;
  email: string;
  address: IAddress;
}
