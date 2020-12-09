import firebase from 'firebase/app';
import { authService } from 'fBase';
import { call } from 'redux-saga/effects';
import { CallReturnType } from 'lib/sagaUtils';

export function* signInWithPopup(authProvider: firebase.auth.AuthProvider) {
  const auth = authService;
  const {
    credential,
  }: CallReturnType<typeof auth.signInWithPopup> = yield call(
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

export const logout = () => authService.signOut();
