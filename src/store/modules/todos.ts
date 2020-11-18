import { ActionType, createAction, createReducer } from "typesafe-actions";
import produce from "immer";

const ADD_TODO = "@@todos/ADD_TODO";
//const REMOVE_TODO = "todos/REMOVE_TODO";
//const COMPLETE_TODO = "todos/COMPLETE_TODO";

// TODO: call firebase db insert
const addTodo = createAction(ADD_TODO, (todo: Todo) => todo)();

export const actions = {
  addTodo,
};

export type TodosAction = ActionType<typeof actions>;

export type Todo = {
  id: string;
  title: string;
  content?: string;
  // TODO: add Date and think Date format
  done: boolean;
};

export type TodosState = Todo[];

const initialState: TodosState = [];

export const reducer = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;
      const { payload: newTodo } = action;
      draft.concat(newTodo);
    });
  },
});
