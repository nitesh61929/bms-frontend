import { IFile } from "./file";
export interface IHelpdesk {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  createdBy: string;
  updatedBy: string;
  deletedBy: string;
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
  assigneeId: string;
  forUnitId: string;
  forUserId: string;
  ticketCategoryCode: string;
  files: IFile[];
  createdByEmail: string;
  createdByMobileNumber: string;
  createdByUnitName: string;
}
