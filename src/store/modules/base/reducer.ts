import { createReducer } from "typesafe-actions";
import produce from "immer";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "./actions";
import { BaseAction, BaseState } from "./types";

const initialState: BaseState = {
  sidebar: true,
};

const reducer = createReducer<BaseState, BaseAction>(initialState, {
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

export default reducer;
