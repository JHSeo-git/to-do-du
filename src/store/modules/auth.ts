import firebase from "firebase/app";
import { put, call, takeEvery } from "redux-saga/effects";
import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import produce from "immer";
import * as AuthAPI from "lib/api/auth";
import * as FbUtils from "lib/fbUtils";

// Action Type
const ASYNC_SOCIAL_LOGIN = {
  REQEUST: "@@auth/ASYNC_SOCIAL_LOGINREQUEST",
  SUCCESS: "@@auth/ASYNC_SOCIAL_LOGINSUCCESS",
  FAILURE: "@@auth/ASYNC_SOCIAL_LOGINFAILURE",
};
type AuthResult = firebase.auth.AuthCredential;

// Async Action
const asyncSocialLogin = createAsyncAction(
  ASYNC_SOCIAL_LOGIN.REQEUST,
  ASYNC_SOCIAL_LOGIN.SUCCESS,
  ASYNC_SOCIAL_LOGIN.FAILURE
)<string, AuthResult, string>();

export const actions = {
  asyncSocialLogin,
};

export type AuthAction = ActionType<typeof actions>;

export interface AuthState {
  loading: boolean;
  authResult?: AuthResult;
  error?: string;
}

const initialState: AuthState = {
  loading: false,
  authResult: undefined,
  error: undefined,
};

// Reducer
export const reducer = createReducer<AuthState>(initialState, {
  [ASYNC_SOCIAL_LOGIN.REQEUST]: (state) =>
    produce(state, (draft) => {
      draft.loading = true;
    }),
  [ASYNC_SOCIAL_LOGIN.SUCCESS]: (
    state,
    action: ActionType<typeof asyncSocialLogin.success>
  ) => {
    return produce(state, (draft) => {
      if (!action) return;
      const { payload: authResult } = action;
      draft.authResult = authResult;
      draft.loading = false;
    });
  },
  [ASYNC_SOCIAL_LOGIN.FAILURE]: (
    state,
    action: ActionType<typeof asyncSocialLogin.failure>
  ) => {
    return produce(state, (draft) => {
      if (!action) return;
      const { payload: message } = action;
      draft.error = message;
      draft.loading = false;
    });
  },
});

// saga
function* socialLoginSaga(action: ReturnType<typeof asyncSocialLogin.request>) {
  try {
    const authProvider = FbUtils.getStringToAuthProvider(action.payload);
    if (!authProvider) return;
    const authResult = yield call(AuthAPI.signInWithPopup, authProvider);
    yield put(asyncSocialLogin.success(authResult));
  } catch (e) {
    yield put(asyncSocialLogin.failure(e.message));
  }
}

export function* saga() {
  yield takeEvery(ASYNC_SOCIAL_LOGIN.REQEUST, socialLoginSaga);
}
