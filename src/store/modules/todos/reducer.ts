import { createReducer } from "typesafe-actions";
import produce from "immer";
import { ADD_TODO } from "./actions";
import { TodosAction, TodosState } from "./types";

const initialState: TodosState = [
  {
    id: "2",
    title: "test title",
    content: "test content",
    done: false,
  },
];

const reducer = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      const { payload: newTodo } = action;
      draft.concat(newTodo);
    });
  },
});

export default reducer;
