export interface IUpdateInvitationStatus {
  userId: string;
  ownerId?: string;
  propertyId?: string;
  status: string;
  modules?: Array<string>;
  index?: number;
}
