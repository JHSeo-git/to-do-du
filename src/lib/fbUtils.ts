import firebase from 'firebase/app';
import { firebaseInstance } from 'fBase';
import { cancelled, take, put } from 'redux-saga/effects';
import { EventChannel, eventChannel, buffers } from 'redux-saga';

export const getStringToAuthProvider = (provider: string) => {
  let authProvider: firebase.auth.AuthProvider | null = null;
  if (provider === 'Github') {
    authProvider = new firebaseInstance.auth.GithubAuthProvider();
  } else if (provider === 'Google') {
    authProvider = new firebaseInstance.auth.GoogleAuthProvider();
  } else if (provider === 'Facebook') {
    authProvider = new firebaseInstance.auth.FacebookAuthProvider();
  }
  return authProvider;
};

export function makeChannel(
  collection: firebase.firestore.CollectionReference | firebase.firestore.Query,
  buffer = buffers.none(),
  snapshotListenOptions: firebase.firestore.SnapshotListenOptions | undefined
) {
  const ref = collection;

  const channel = eventChannel((emit) => {
    const unsubscribe = snapshotListenOptions
      ? ref.onSnapshot(snapshotListenOptions, emit)
      : ref.onSnapshot(emit);

    // Returns unsubscribe function
    return unsubscribe;
  }, buffer);

  return channel;
}

// TODO: Refactoring
// export interface SyncChannelOptions {
//   onSuccess: typeof asyncSyncTodos.success;
//   onFailure: typeof asyncSyncTodos.failure;
//   snapshotListenOptions: firebase.firestore.SnapshotListenOptions | undefined;
//   transform: any;
// }

export function* syncChannel(channel: EventChannel<any>, options: any) {
  const { onSuccess, onFailure, transform } = options;

  try {
    while (true) {
      const data = yield take(channel);
      const transformedData = transform ? transform(data) : data;
      yield put(onSuccess(transformedData));
    }
  } catch (err) {
    if (onFailure) yield put(onFailure(err.message));
    else
      console.error(
        'The following error has been ignored because no `failureActionCreator` has been set:',
        err
      );
  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
}
