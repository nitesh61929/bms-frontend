import { IFile } from "@shared/interfaces/file";

export interface IResidenceVehicle {
  id: string;
  vehicleType: string;
  manufacturer: string;
  model: string;
  color: string;
  vehicleNumber: string;
  profileFile: IFile;
}
