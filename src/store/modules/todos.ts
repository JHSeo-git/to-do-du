import { ActionType, createAction, createReducer } from "typesafe-actions";
import produce from "immer";

const OPEN_NEW_TODO = "@@todos/OPEN_NEW_TODO";
const CLOSE_NEW_TODO = "@@todos/CLOSE_NEW_TODO";
const CHANGE_REGISTER_TODO = "@@todos/CHANGE_REGISTER_TODO";
const ADD_TODO = "@@todos/ADD_TODO";
//const REMOVE_TODO = "todos/REMOVE_TODO";
//const COMPLETE_TODO = "todos/COMPLETE_TODO";

const openNewTodo = createAction(OPEN_NEW_TODO)();
const closeNewTodo = createAction(CLOSE_NEW_TODO)();
const changeRegisterTodo = createAction(
  CHANGE_REGISTER_TODO,
  ({ name, value }: { name: string; value: string }) => {
    return { name, value };
  }
)();
// TODO: change AsyncAction to firestore add api
const addTodo = createAction(ADD_TODO, (todo: RegiterTodo) => todo)();

export const actions = {
  addTodo,
  openNewTodo,
  closeNewTodo,
  changeRegisterTodo,
};

export type TodosAction = ActionType<typeof actions>;

export type RegiterTodo = {
  title: string;
  content: string;
  [name: string]: string;
};

export type Todo = {
  id: string;
  title: string;
  content?: string;
  // TODO: add Date and think Date format
  done: boolean;
};

export type TodosState = {
  showTodoInput: boolean;
  registerForm: RegiterTodo;
  todos: Todo[];
};

const initialState: TodosState = {
  showTodoInput: false,
  registerForm: {
    title: "",
    content: "",
  },
  todos: [],
};

export const reducer = createReducer<TodosState, TodosAction>(initialState, {
  [OPEN_NEW_TODO]: (state) =>
    produce(state, (draft) => {
      draft.showTodoInput = true;
    }),
  [CLOSE_NEW_TODO]: (state) =>
    produce(state, (draft) => {
      draft.showTodoInput = false;
    }),
  [CHANGE_REGISTER_TODO]: (
    state,
    action: ActionType<typeof changeRegisterTodo>
  ) => {
    return produce(state, (draft) => {
      if (!action) return;
      const { payload: registerForm } = action;
      draft.registerForm[registerForm.name] = registerForm.value;
    });
  },
});
