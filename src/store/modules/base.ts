import { ActionType, createAction, createReducer } from "typesafe-actions";
import produce from "immer";

export const OPEN_SIDEBAR = "@@base/OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "@@base/OPEN)SIDEBAR";

// TODO: call firebase db insert
export const openSidebar = createAction(
  OPEN_SIDEBAR,
  ({ sidebar }: BaseState) => sidebar
)();
export const closeSidebar = createAction(
  CLOSE_SIDEBAR,
  ({ sidebar }: BaseState) => sidebar
)();

export const actions = {
  openSidebar,
  closeSidebar,
};

export type BaseAction = ActionType<typeof actions>;

export type BaseState = {
  sidebar: boolean;
};

const initialState: BaseState = {
  sidebar: true,
};

export const reducer = createReducer<BaseState, BaseAction>(initialState, {
  [OPEN_SIDEBAR]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.sidebar = true;
    });
  },
  [CLOSE_SIDEBAR]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      draft.sidebar = false;
    });
  },
});
