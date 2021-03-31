import { IAccountTypes } from "app/features/feature-admin/modules/admin-accounts/interfaces/account-types";

export interface IInvitations {
  id: number;
  name: string;
  email: string;
  mobileNumber?: string;
  status: string;
  userId?: string;
  user?: any;
  ownerId?: string;
  propertyId?: string;
  ownerType: IAccountTypes;
}
