import { IFile } from "@shared/interfaces/file";
export interface IGatepassReport {
  id: string;
  visitorName: string;
  visitorMobileNumber: string;
  visitorImage: IFile;
  unitName: string;
  checkedInByName: string;
  checkedInDate: string;
  createdBy: string;
  createdDate: string;
  unitOwnerName: string;
  visitorVehicleNumber: string;
  visitPurposeName: string;
  unitOwnerMobileNumber: string;
  approverName: string;
  status?: string;
}
