import { IImage } from "@shared/interfaces/image";
export interface INotices {
  id: string;
  title: string;
  description: any;
  propertyId: number;
  published: boolean;
  file: IImage;
}
