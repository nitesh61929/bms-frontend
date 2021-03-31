import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import * as appActions from "./actions/app.actions";

export function logout(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action != null && action.type === appActions.logout.type) {
      return reducer(undefined, { type: INIT });
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer[] = [logout];

export interface State {}

export const reducers: ActionReducerMap<State> = {};

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
