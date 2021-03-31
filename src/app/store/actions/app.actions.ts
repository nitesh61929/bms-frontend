import { Action, createAction } from "@ngrx/store";

export const logout = createAction("[App] logout request");

export class ActionTypes {
  static CLEAR_REDUX_STATE = "[App] Clear Redux State";
}

export class clearReduxState implements Action {
  readonly type = ActionTypes.CLEAR_REDUX_STATE;
}
