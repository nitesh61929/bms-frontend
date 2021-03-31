import { IAddress } from "@shared/interfaces/address";
import { IFile } from "@shared/interfaces/file";
export interface IPayeeInfo {
  id: string;
  name: string;
  email: string;
  gender: string;
  address: IAddress;
  profileFile: IFile;
  mobileNumber: string;
  dob: string;
}