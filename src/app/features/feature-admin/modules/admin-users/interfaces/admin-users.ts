import { IAccountType } from "@shared/interfaces";

export interface IAdminUsers {
  accountType: IAccountType;
  active: Boolean;
  email: string;
  mobileNumber: string;
  name: string;
  status: string;
  userId: string;
}
