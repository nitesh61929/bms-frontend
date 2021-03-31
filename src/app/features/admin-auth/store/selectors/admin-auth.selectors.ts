import { createFeatureSelector } from "@ngrx/store";
import * as fromAdminAuth from "../reducers/admin-auth.reducer";

export const selectNewsState = createFeatureSelector<fromAdminAuth.IAdminAuthState>(fromAdminAuth.adminAuthFeatureKey);
