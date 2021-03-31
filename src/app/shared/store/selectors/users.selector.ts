import { createFeatureSelector } from "@ngrx/store";
import * as fromShared from "../reducers/users.reducer";

export const selectUsersState = createFeatureSelector<fromShared.UsersState>(fromShared.usersKey);
