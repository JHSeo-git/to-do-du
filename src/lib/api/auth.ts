import firebase from 'firebase/app';
import { authService } from 'fBase';
import { call } from 'redux-saga/effects';
import { CallReturnType } from 'lib/sagaUtils';

export function* signInWithPopup(authProvider: firebase.auth.AuthProvider) {
  const auth = authService;
  const { credential }: CallReturnType<typeof auth.signInWithPopup> = yield call(
    [auth, auth.signInWithPopup],
    authProvider
  );

  return credential;
}

export function* fetchProvidersForEmail(email: string) {
  const auth = authService;
  const result = yield call([auth, auth.fetchSignInMethodsForEmail], email);
  //auth.fetchSignInMethodsForEmail(email);

  return result;
}

export function* signInWithCredential(credential: firebase.auth.AuthCredential) {
  const auth = authService;
  const { user } = yield call([auth, auth.signInWithCredential], credential);

  return user;
}

export function* linkWithCredential(user: firebase.User, credential: firebase.auth.AuthCredential) {
  const result = yield call([user, user.linkWithCredential], credential);
  return result;
}

export const logout = () => authService.signOut();
