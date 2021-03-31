import { IFile } from "@shared/interfaces/file";

export interface IPolicy {
  id: string;
  title: string;
  file: IFile;
  status?: string;
}
