import { createFeatureSelector } from "@ngrx/store";
import * as fromAuth from "../reducers/auth.reducer";

export const selectAuthState = createFeatureSelector<fromAuth.IAuthState>(fromAuth.authFeatureKey);
