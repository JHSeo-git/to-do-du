import {
  ActionType,
  createAction,
  createAsyncAction,
  createReducer,
} from "typesafe-actions";
import firebase from "firebase/app";
import produce from "immer";
import {
  put,
  call,
  all,
  takeEvery,
  fork,
  take,
  cancel,
  takeLatest,
} from "redux-saga/effects";
import * as TodoAPI from "lib/api/todos";
import { syncChannel } from "lib/fbUtils";
import { ASYNC_LOG_OUT } from "store/modules/user";

const OPEN_NEW_TODO = "@@todos/OPEN_NEW_TODO";
const CLOSE_NEW_TODO = "@@todos/CLOSE_NEW_TODO";
const CHANGE_REGISTER_TODO = "@@todos/CHANGE_REGISTER_TODO";
const ASYNC_GET_TODOS = {
  REQUEST: "@@todos/ASYNC_GET_TODOS_REQUEST",
  SUCCESS: "@@todos/ASYNC_GET_TODOS_SUCCESS",
  FAILURE: "@@todos/ASYNC_GET_TODOS_FAILURE",
};
const ASYNC_SYNC_TODOS = {
  REQUEST: "@@todos/ASYNC_SYNC_TODOS_REQUEST",
  SUCCESS: "@@todos/ASYNC_SYNC_TODOS_SUCCESS",
  FAILURE: "@@todos/ASYNC_SYNC_TODOS_FAILURE",
};
const ASYNC_ADD_TODO = {
  REQUEST: "@@todos/ASYNC_ADD_TODO_REQUEST",
  SUCCESS: "@@todos/ASYNC_ADD_TODO_SUCCESS",
  FAILURE: "@@todos/ASYNC_ADD_TODO_FAILURE",
};
const ASYNC_DELETE_TODO = {
  REQUEST: "@@todos/ASYNC_DELETE_TODO_REQUEST",
  SUCCESS: "@@todos/ASYNC_DELETE_TODO_SUCCESS",
  FAILURE: "@@todos/ASYNC_DELETE_TODO_FAILURE",
};
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
const asyncSyncTodos = createAsyncAction(
  ASYNC_SYNC_TODOS.REQUEST,
  ASYNC_SYNC_TODOS.SUCCESS,
  ASYNC_SYNC_TODOS.FAILURE
)<undefined, Todo[], string>();
const asyncAddTodo = createAsyncAction(
  ASYNC_ADD_TODO.REQUEST,
  ASYNC_ADD_TODO.SUCCESS,
  ASYNC_ADD_TODO.FAILURE
)<RegisterTodo, undefined, string>();
const asyncDeleteTodo = createAsyncAction(
  ASYNC_DELETE_TODO.REQUEST,
  ASYNC_DELETE_TODO.SUCCESS,
  ASYNC_DELETE_TODO.FAILURE
)<string, undefined, string>();

export const actions = {
  openNewTodo,
  closeNewTodo,
  changeRegisterTodo,
  asyncGetTodos,
  asyncSyncTodos,
  asyncAddTodo,
  asyncDeleteTodo,
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
  createdAt: number;
};

export type TodosState = {
  showTodoInput: boolean;
  registerForm: RegisterTodo;
  targetTodoId?: string;
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
  targetTodoId: undefined,
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
  [ASYNC_SYNC_TODOS.REQUEST]: (
    state,
    action: ActionType<typeof asyncSyncTodos.request>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      draft.loading = true;
    }),
  [ASYNC_SYNC_TODOS.SUCCESS]: (
    state,
    action: ActionType<typeof asyncSyncTodos.success>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      const { payload: todos } = action;
      draft.loading = false;
      draft.todos = todos;
    }),
  [ASYNC_SYNC_TODOS.FAILURE]: (
    state,
    action: ActionType<typeof asyncSyncTodos.failure>
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
  [ASYNC_DELETE_TODO.REQUEST]: (
    state,
    action: ActionType<typeof asyncDeleteTodo.request>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      const { payload: id } = action;
      draft.loading = true;
      draft.targetTodoId = id;
    }),
  [ASYNC_DELETE_TODO.SUCCESS]: (
    state,
    action: ActionType<typeof asyncDeleteTodo.success>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      draft.loading = false;
    }),
  [ASYNC_DELETE_TODO.FAILURE]: (
    state,
    action: ActionType<typeof asyncDeleteTodo.failure>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      draft.loading = false;
      const { payload: message } = action;
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

export interface SyncTodosOptions {
  onSuccess: typeof asyncSyncTodos.success;
  onFailure: typeof asyncSyncTodos.failure;
  snapshotListenOptions: firebase.firestore.SnapshotListenOptions | undefined;
  transform: any;
}

function* syncTodosSaga() {
  try {
    const channel = yield call(TodoAPI.syncGetTodos, undefined);
    const options: SyncTodosOptions = {
      onSuccess: asyncSyncTodos.success,
      onFailure: asyncSyncTodos.failure,
      snapshotListenOptions: undefined,
      transform: (snapshot: firebase.firestore.QuerySnapshot<Todo>) => {
        const todos: Todo[] = snapshot.docs.map((doc) => {
          const id = doc.id;
          const todo = doc.data();
          return {
            ...todo,
            id,
          };
        });

        return todos;
      },
    };
    yield fork(syncChannel, channel, options);
  } catch (e) {
    yield put(asyncSyncTodos.failure(e.message));
  }
}

function* syncTodosSagaWithLogInfo() {
  let task = yield fork(syncTodosSaga);

  // watching LOGOUT SUCESS or FAILURE
  yield take(ASYNC_LOG_OUT.SUCCESS || ASYNC_LOG_OUT.FAILURE);
  yield cancel(task);
}

function* deleteTodoSaga(action: ReturnType<typeof asyncDeleteTodo.request>) {
  try {
    yield call(TodoAPI.deleteTodos, action.payload);
    yield put(asyncDeleteTodo.success());
  } catch (e) {
    yield put(asyncDeleteTodo.failure(e.message));
  }
}

export function* saga() {
  yield all([
    takeEvery(ASYNC_ADD_TODO.REQUEST, addTodoSaga),
    takeEvery(ASYNC_GET_TODOS.REQUEST, getTodosSaga),
    takeLatest(ASYNC_SYNC_TODOS.REQUEST, syncTodosSagaWithLogInfo),
    takeEvery(ASYNC_DELETE_TODO.REQUEST, deleteTodoSaga),
  ]);
}
