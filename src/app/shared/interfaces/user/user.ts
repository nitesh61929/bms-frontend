import { IImage } from "@shared/interfaces/image";
import { IRole } from "./role";
import { IScope } from "./scope";

export interface IUser {
  id: number;
  name?: string;
  email?: string;
  website?: string;
  mobile_number?: string;
  roles?: IRole[];
  scopes?: IScope[];
  profile_image?: string;
  imageId?: number;
  image?: IImage;
  mobileNumber?: string;
  namespaceId?: number;
  superAdmin?: boolean;
  status?: boolean;
  file?: File;
  userId?: string;
}

export interface IPrimaryUser {
  code: string;
  title: string;
  order: number;
}
