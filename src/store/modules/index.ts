import { combineReducers } from "redux";
import todos from "./todos";
import base from "./base";

interface ModuleType {
  [moduleName: string]: any;
}

const modules: ModuleType = {};

modules["todos"] = todos;
modules["base"] = base;

export default combineReducers(modules);
