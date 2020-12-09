import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { all } from 'redux-saga/effects';
import { reducer as authReducer, saga as authSaga } from './auth';
import { reducer as baseReducer } from './base';
import { reducer as todosReducer, saga as todoSaga } from './todos';
import {
  ASYNC_LOG_OUT,
  reducer as userReducer,
  saga as userSaga,
} from './user';

// interface ModuleType {
//   [moduleName: string]: any;
// }

// const modules: ModuleType = {};

// modules["auth"] = authReducer;
// modules["base"] = baseReducer;
// modules["todos"] = todosReducer;
// modules["user"] = userReducer;

const appReducer = combineReducers({
  auth: authReducer,
  base: baseReducer,
  todos: todosReducer,
  user: userReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === ASYNC_LOG_OUT.SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

export function* rootSaga() {
  yield all([authSaga(), userSaga(), todoSaga()]);
}

declare module 'typesafe-actions' {
  export type RootState = StateType<typeof rootReducer>;
}
