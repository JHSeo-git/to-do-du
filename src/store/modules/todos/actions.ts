import { createAction } from "typesafe-actions";
import { Todo } from "./types";

export const ADD_TODO = "@@todos/ADD_TODO";
//const REMOVE_TODO = "todos/REMOVE_TODO";
//const COMPLETE_TODO = "todos/COMPLETE_TODO";

// TODO: call firebase db insert
export const addTodo = createAction(ADD_TODO, (todo: Todo) => todo)();
