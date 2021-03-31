import { IAccountTypes } from "./account-types";
export interface IAccounts {
  id: string;
  name: string;
  email: string;
  ownerType?: IAccountTypes;
  // user?: IUser;
  mobileNumber?: string;
  status?: string;
  active?: boolean;
}
