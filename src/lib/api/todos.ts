import { dbService } from "fBase";
import { call } from "redux-saga/effects";
import { RegisterTodo } from "store/modules/todos";

const TODO_DOC_NAME = "todos";

export function* addNewTodo(newTodo: RegisterTodo) {
  const collection = dbService.collection(TODO_DOC_NAME);
  return yield call([collection, collection.add], newTodo);
}
