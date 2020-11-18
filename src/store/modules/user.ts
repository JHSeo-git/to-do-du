import { ActionType, createAction, createReducer } from "typesafe-actions";
import produce from "immer";

// Action type
const SET_USER = "@@user/SET_USER";

export interface User {
  uid: string | null;
  email: string | null;
  displayName: string | null;
}

export interface UserState {
  user: User | null;
  processed: boolean;
}

// Action
const setUser = createAction(SET_USER, (payload: User) => payload)();

// Export actions
export const actions = {
  setUser,
};

// Type Action
export type UserAction = ActionType<typeof actions>;

// initial State
const initialState: UserState = {
  user: null,
  processed: false,
};

// reducer
export const reducer = createReducer<UserState, UserAction>(initialState, {
  [SET_USER]: (state, action: ActionType<typeof setUser>) =>
    produce(state, (draft) => {
      if (!action) return;
      const { payload: user } = action;
      draft.user = user;
    }),
});
