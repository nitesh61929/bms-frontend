import { IInvoiceSetting } from "app/features/feature-app/modules/property-invoice-setting/interfaces/invoice-setting";
import { IPropertyType } from "./../../features/on-board/interfaces/property-type";
import { IAddress } from "./address";

export class IProperty {
  propertyId: string;
  id: string;
  name: string;
  email: string;
  mobileNumbers: Array<string>;
  phones: Array<string>;
  address: IAddress;
  propertyType: IPropertyType;
  status: string;
  facility: any;
  ownerId: any;
  ownerStatus?: string;
  logo: any;
  registrationCertificate: any;
  panCertificate: any;
  images: any;
  province: string;
  country: string;
  city: string;
  currencies?: any;
  invoicePrefixSetup?: IInvoiceSetting;
  timezone?: any;
}
