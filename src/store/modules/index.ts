import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { reducer as authReducer, socialLoginSaga as authSaga } from "./auth";
import { reducer as todosReducer } from "./todos";
import { reducer as baseReducer } from "./base";

interface ModuleType {
  [moduleName: string]: any;
}

const modules: ModuleType = {};

modules["auth"] = authReducer;
modules["todos"] = todosReducer;
modules["base"] = baseReducer;

export default combineReducers(modules);

// TODO: saga reducers
export function* rootSaga() {
  yield all([authSaga()]);
}
