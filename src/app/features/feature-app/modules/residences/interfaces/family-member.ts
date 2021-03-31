import { IFile } from "@shared/interfaces/file";

export interface IFamilyMember {
  id: string;
  name: string;
  relationship: string;
  email: string;
  mobileNumber: string;
  dateOfBirth: string;
  profileFile: IFile;
  status: string;
}
