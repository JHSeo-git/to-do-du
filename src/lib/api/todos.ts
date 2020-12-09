import firebase from 'firebase/app';
import { dbService } from 'fBase';
import { call } from 'redux-saga/effects';
import { RegisterTodo, Todo } from 'store/modules/todos';
import { makeChannel } from 'lib/fbUtils';

const TODO_DOC_NAME = 'todos';

export function* addNewTodo(newTodo: RegisterTodo) {
  const collection = dbService.collection(TODO_DOC_NAME);
  return yield call([collection, collection.add], newTodo);
}

export function* deleteTodos(id: string) {
  const document = dbService.collection(TODO_DOC_NAME).doc(id);
  return yield call([document, document.delete]);
}

export function* updateTodo(id: string, name: string, value: string) {
  const document = dbService.collection(TODO_DOC_NAME).doc(id);
  return yield call([document, document.update], name, value);
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
  userId: string,
  snapshotListenOptions: firebase.firestore.SnapshotListenOptions | undefined
) {
  const collection = dbService
    .collection(TODO_DOC_NAME)
    .where('userId', '==', userId)
    .orderBy('createdAt', 'desc');

  const channel = yield call(
    makeChannel,
    collection,
    undefined,
    snapshotListenOptions
  );

  return channel;
}
