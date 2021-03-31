import { IAddress } from "./address";
import { IProperty } from "./property";
export class IOwnerDetails {
  id: string;
  name: string;
  email: string;
  mobileNumbers?: Array<string>;
  phones?: Array<string>;
  address: IAddress;
  ownerType: any;
  status: string;
  modules?: Array<string>;
  citizenshipFront: any;
  citizenshipBack: any;
  panCertificate: any;
  logo: any;
  registrationCertificate: any;
  documents: any;
  registrationNumber: any;
  panNumber: any;
  citizenshipNumber: any;
  property?: Array<IProperty>;
  propertyList?: Array<IProperty>;
  ownerDetailsId?: string;
}
