import firebase from "firebase/app";
import { dbService } from "fBase";
import { call } from "redux-saga/effects";
import { RegisterTodo, Todo } from "store/modules/todos";
import { makeChannel } from "lib/sagaUtils";

const TODO_DOC_NAME = "todos";

export function* addNewTodo(newTodo: RegisterTodo) {
  const collection = dbService.collection(TODO_DOC_NAME);
  return yield call([collection, collection.add], newTodo);
}

export function* getTodos() {
  const collection = dbService.collection(TODO_DOC_NAME);
  const snapshot: firebase.firestore.QuerySnapshot<Todo> = yield call([
    collection,
    collection.get,
  ]);

  const todos: Todo[] = snapshot.docs.map((doc) => {
    const id = doc.id;
    const todo = doc.data();
    return {
      ...todo,
      id,
    };
  });
  return todos;
}

export function* syncGetTodos(
  snapshotListenOptions: firebase.firestore.SnapshotListenOptions | undefined
) {
  const collection = dbService.collection(TODO_DOC_NAME);

  const channel = yield call(
    makeChannel,
    collection,
    undefined,
    snapshotListenOptions
  );

  return channel;
}
