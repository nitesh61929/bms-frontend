import { ITableActions } from "@shared/interfaces/table-actions";
export interface IHelpdeskCategory extends ITableActions {
  id: string;
  code: string;
  title: string;
  image: any;
  status: string;
}
