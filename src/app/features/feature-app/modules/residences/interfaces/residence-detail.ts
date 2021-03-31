import { IAddress } from "@shared/interfaces/address";
import { IDocument } from "@shared/interfaces/document";
import { IFile } from "@shared/interfaces/file";
import { IFamilyMember } from "./family-member";
import { IResidenceVehicle } from "./residence-vehicle";
import { IUnitOwner } from "./unit-owner";
export interface IResidenceDetail {
  id?: string;
  name: string;
  mobileNumber: string;
  email: string;
  citizenshipNumber: string;
  panNumber: string;
  gender: string;
  profileFile: IFile;
  address: IAddress;
  dob: string;
  documents: IDocument[];
  familyMembers: IFamilyMember[];
  totalFamilyMember: number;
  vehicles: IResidenceVehicle[];
  unitOwner: IUnitOwner;
}
