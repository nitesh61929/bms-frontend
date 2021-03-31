import { IAddress } from "./address";
import { IFile } from "./file";
export class IProfile {
  userId: string;
  name: string;
  email: string;
  mobileNumber: string;
  address: IAddress;
  citizenshipNumber: string;
  panNumber: string;
  documents: IFile[];
  profileFile?: IFile;
}
