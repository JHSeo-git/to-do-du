import { ActionType, createAction, createReducer } from "typesafe-actions";
import produce from "immer";

const OPEN_SIDEBAR = "@@base/OPEN_SIDEBAR";
const CLOSE_SIDEBAR = "@@base/OPEN)SIDEBAR";
const SHOW_USER_MENU = "@@base/SHOW_USER_MENU";
const HIDE_USER_MENU = "@@base/HIDE_USER_MENU";

// TODO: call firebase db insert
const openSidebar = createAction(OPEN_SIDEBAR)();
const closeSidebar = createAction(CLOSE_SIDEBAR)();
const showUserMenu = createAction(SHOW_USER_MENU)();
const hideUserMenu = createAction(HIDE_USER_MENU)();

export const actions = {
  openSidebar,
  closeSidebar,
  showUserMenu,
  hideUserMenu,
};

export type BaseAction = ActionType<typeof actions>;

export type BaseState = {
  sidebar: boolean;
  userMenu: boolean;
};

const initialState: BaseState = {
  sidebar: true,
  userMenu: false,
};

export const reducer = createReducer<BaseState>(initialState, {
  [OPEN_SIDEBAR]: (state) => {
    return produce(state, (draft) => {
      draft.sidebar = true;
    });
  },
  [CLOSE_SIDEBAR]: (state) => {
    return produce(state, (draft) => {
      draft.sidebar = false;
    });
  },
  [SHOW_USER_MENU]: (state) => {
    return produce(state, (draft) => {
      draft.userMenu = true;
    });
  },
  [HIDE_USER_MENU]: (state) => {
    return produce(state, (draft) => {
      draft.userMenu = false;
    });
  },
});
