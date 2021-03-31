import { createFeatureSelector } from "@ngrx/store";
import * as fromAccount from "./account.reducer";
import * as fromAdminSettings from "./admin-settings.reducer";
import * as fromHelpdesk from "./helpdesk.reducer";
import * as fromInvitations from "./invitations.reducers";
import * as fromNotices from "./notices.reducer";
import * as fromNotifications from "./notifications.reducer";
import * as fromProfile from "./profile.reducer";
import * as fromPropertyOwner from "./property-owner.reducers";
import * as fromPropertyStructure from "./property-structure.reducer";
import * as fromProperty from "./property.reducer";
import * as fromStaffs from "./staffs.reducer";
import * as fromUnit from "./unit.reducers";
import * as fromUsers from "./users.reducer";

export interface SharedModuleState {
  users: fromUsers.UsersState;
  notifications: fromNotifications.NotificationsState;
  property: fromProperty.PropertyState;
  unit: fromUnit.UnitState;
  propertyStructure: fromPropertyStructure.PropertyStructureState;
}

export interface State {
  sharedModule: SharedModuleState;
}

export const sharedReducers = {
  users: fromUsers.usersReducer,
  notifications: fromNotifications.notificationsReducer,
  invitations: fromInvitations.invitationsReducer,
  propertyOwner: fromPropertyOwner.propertyOwnerReducer,
  property: fromProperty.propertyReducer,
  unit: fromUnit.unitReducer,
  staffs: fromStaffs.staffsReducer,
  profile: fromProfile.profileReducer,
  propertyStructure: fromPropertyStructure.propertyStructureReducer,
  notices: fromNotices.noticeReducer,
  helpdesk: fromHelpdesk.helpdeskReducer,
  account: fromAccount.accountReducer,
  adminSettings: fromAdminSettings.adminSettingsReducer,
};

export const selectSharedModuleState = createFeatureSelector<SharedModuleState>("sharedModule");
