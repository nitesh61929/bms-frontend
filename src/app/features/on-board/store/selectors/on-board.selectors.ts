import { createFeatureSelector } from "@ngrx/store";
import * as fromOnBoard from "../reducers/on-board.reducer";

export const selectOnBoardState = createFeatureSelector<fromOnBoard.IOnBoardState>(fromOnBoard.onBoardFeatureKey);
