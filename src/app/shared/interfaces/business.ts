import { IImage } from "./image";
import { ITypeData } from "./type-data";

export interface IBusiness {
  id: number;
  name: string;
  address: string;
  type: string;
  owner: string;
  logo: string;
  alias: string;
  businessType: number;
  companyEmail: string;
  companyWebsite: string;
  description: string;
  image: IImage;
  imageId: number;
  phoneNumber: string;
  registrationNumber: string;
  vatNumber: string;
  typeData: ITypeData;
}
