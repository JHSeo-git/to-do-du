import {
  ActionType,
  createAction,
  createAsyncAction,
  createReducer,
} from "typesafe-actions";
import produce from "immer";
import { put, call, all, takeEvery } from "redux-saga/effects";
import * as TodoAPI from "lib/api/todos";

const OPEN_NEW_TODO = "@@todos/OPEN_NEW_TODO";
const CLOSE_NEW_TODO = "@@todos/CLOSE_NEW_TODO";
const CHANGE_REGISTER_TODO = "@@todos/CHANGE_REGISTER_TODO";
const ASYNC_GET_TODOS = {
  REQUEST: "@@todos/ASYNC_GET_TODOS_REQUEST",
  SUCCESS: "@@todos/ASYNC_GET_TODOS_SUCCESS",
  FAILURE: "@@todos/ASYNC_GET_TODOS_FAILURE",
};
const ASYNC_ADD_TODO = {
  REQUEST: "@@todos/ASYNC_ADD_TODO_REQUEST",
  SUCCESS: "@@todos/ASYNC_ADD_TODO_SUCCESS",
  FAILURE: "@@todos/ASYNC_ADD_TODO_FAILURE",
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
const asyncGetTodos = createAsyncAction(
  ASYNC_GET_TODOS.REQUEST,
  ASYNC_GET_TODOS.SUCCESS,
  ASYNC_GET_TODOS.FAILURE
)<undefined, Todo[], string>();
const asyncAddTodo = createAsyncAction(
  ASYNC_ADD_TODO.REQUEST,
  ASYNC_ADD_TODO.SUCCESS,
  ASYNC_ADD_TODO.FAILURE
)<RegisterTodo, undefined, string>();

export const actions = {
  openNewTodo,
  closeNewTodo,
  changeRegisterTodo,
  asyncGetTodos,
  asyncAddTodo,
};

export type TodosAction = ActionType<typeof actions>;

export type RegisterTodo = {
  title: string;
  content: string;
  done: boolean;
  userId: string | null;
  createdAt: number | null;
  [name: string]: string | boolean | number | null;
};

export type Todo = {
  id: string;
  title: string;
  content?: string;
  // TODO: add Date and think Date format
  done: boolean;
  userId: string;
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
    userId: null,
    createdAt: null,
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
  [ASYNC_GET_TODOS.REQUEST]: (
    state,
    action: ActionType<typeof asyncGetTodos.request>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      draft.loading = true;
    }),
  [ASYNC_GET_TODOS.SUCCESS]: (
    state,
    action: ActionType<typeof asyncGetTodos.success>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      const { payload: todos } = action;
      draft.loading = false;
      draft.todos = todos;
    }),
  [ASYNC_GET_TODOS.FAILURE]: (
    state,
    action: ActionType<typeof asyncGetTodos.failure>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      const { payload: message } = action;
      draft.loading = false;
      draft.error = message;
    }),
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
      draft.showTodoInput = false;
      draft.registerForm = {
        title: "",
        content: "",
        done: false,
        userId: null,
        createdAt: null,
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

function* getTodosSaga(action: ReturnType<typeof asyncGetTodos.request>) {
  try {
    const todos = yield call(TodoAPI.getTodos);
    yield put(asyncGetTodos.success(todos));
  } catch (e) {
    yield put(asyncAddTodo.failure(e.message));
  }
}

export function* saga() {
  yield all([
    takeEvery(ASYNC_ADD_TODO.REQUEST, addTodoSaga),
    takeEvery(ASYNC_GET_TODOS.REQUEST, getTodosSaga),
  ]);
}
