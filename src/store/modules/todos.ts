import {
  ActionType,
  createAction,
  createAsyncAction,
  createReducer,
} from "typesafe-actions";
import produce from "immer";
import { put, call, takeEvery } from "redux-saga/effects";
import * as TodoAPI from "lib/api/todos";

const OPEN_NEW_TODO = "@@todos/OPEN_NEW_TODO";
const CLOSE_NEW_TODO = "@@todos/CLOSE_NEW_TODO";
const CHANGE_REGISTER_TODO = "@@todos/CHANGE_REGISTER_TODO";
const ASYNC_ADD_TODO = {
  REQUEST: "@@todos/ADD_TODO_REQUEST",
  SUCCESS: "@@todos/ADD_TODO_SUCCESS",
  FAILURE: "@@todos/ADD_TODO_FAILURE",
};
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

const asyncAddTodo = createAsyncAction(
  ASYNC_ADD_TODO.REQUEST,
  ASYNC_ADD_TODO.SUCCESS,
  ASYNC_ADD_TODO.FAILURE
)<RegisterTodo, undefined, string>();

export const actions = {
  openNewTodo,
  closeNewTodo,
  changeRegisterTodo,
  asyncAddTodo,
};

export type TodosAction = ActionType<typeof actions>;

export type RegisterTodo = {
  title: string;
  content: string;
  done: boolean;
  [name: string]: string | boolean;
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
  registerForm: RegisterTodo;
  todos: Todo[];
  loading: boolean;
  error?: string;
};

const initialState: TodosState = {
  showTodoInput: false,
  registerForm: {
    title: "",
    content: "",
    done: false,
  },
  todos: [],
  loading: false,
  error: undefined,
};

export const reducer = createReducer<TodosState>(initialState, {
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
  [ASYNC_ADD_TODO.REQUEST]: (
    state,
    action: ActionType<typeof asyncAddTodo.request>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      draft.loading = true;
    }),
  [ASYNC_ADD_TODO.SUCCESS]: (
    state,
    action: ActionType<typeof asyncAddTodo.success>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      draft.loading = false;
      draft.error = "";
      draft.registerForm = {
        title: "",
        content: "",
        done: false,
      };
    }),
  [ASYNC_ADD_TODO.FAILURE]: (
    state,
    action: ActionType<typeof asyncAddTodo.failure>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      const { payload: message } = action;
      draft.loading = false;
      draft.error = message;
    }),
});

function* addTodoSaga(action: ReturnType<typeof asyncAddTodo.request>) {
  try {
    yield call(TodoAPI.addNewTodo, action.payload);
    yield put(asyncAddTodo.success());
  } catch (e) {
    yield put(asyncAddTodo.failure(e.message));
  }
}

export function* saga() {
  yield takeEvery(ASYNC_ADD_TODO.REQUEST, addTodoSaga);
}
