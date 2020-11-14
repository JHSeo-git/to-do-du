import { combineReducers } from "redux";
import todos from "./todos";

interface ModuleType {
  [moduleName: string]: any;
}

const modules: ModuleType = {};

modules["todos"] = todos;

export default combineReducers(modules);
