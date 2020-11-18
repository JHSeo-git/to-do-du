import firebase from "firebase/app";
import { authService } from "fBase";
import { call } from "redux-saga/effects";

export function* signInWithPopup(authProvider: firebase.auth.AuthProvider) {
  const auth = authService;
  const { credential } = yield call([auth, auth.signInWithPopup], authProvider);

  return credential;
}

export const logout = () => authService.signOut();
