import { UserCredential } from "@firebase/auth-types";
import { takeEvery, call, put } from "redux-saga/effects";
import { ActionType, createReducer, createAsyncAction } from "typesafe-actions";
import produce from "immer";
import * as AuthAPI from "lib/api/auth";

// action type
const ASYNC_SOCIAL_LOGIN = {
  REQUEST: "@@auth/ASYNC_SOCIAL_LOGIN_REQUEST",
  SUCCESS: "@@auth/ASYNC_SOCIAL_LOGIN_SUCCESS",
  FAILURE: "@@auth/ASYNC_SOCIAL_LOGIN_FAILURE",
};

type AuthResult = UserCredential;

// action
export const asyncSocialLogin = createAsyncAction(
  ASYNC_SOCIAL_LOGIN.REQUEST,
  ASYNC_SOCIAL_LOGIN.SUCCESS,
  ASYNC_SOCIAL_LOGIN.FAILURE
)<string, AuthResult, string>();

export const actions = {
  asyncSocialLogin,
};

export type AuthAction = ActionType<typeof actions>;

export type AuthState = {
  loading: boolean;
  authResult?: AuthResult;
  error?: string;
};

const initialState: AuthState = {
  loading: false,
  authResult: undefined,
  error: undefined,
};

// reducer
export const reducer = createReducer<AuthState>(initialState, {
  [ASYNC_SOCIAL_LOGIN.REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.loading = true;
    }),
  [ASYNC_SOCIAL_LOGIN.SUCCESS]: (
    state,
    action: ActionType<typeof asyncSocialLogin.success>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      const { payload: fbAuthResult } = action;
      draft.authResult = fbAuthResult;
      draft.loading = false;
    }),
  [ASYNC_SOCIAL_LOGIN.FAILURE]: (
    state,
    action: ActionType<typeof asyncSocialLogin.failure>
  ) =>
    produce(state, (draft) => {
      if (!action) return;
      const { payload: message } = action;
      draft.error = message;
      draft.loading = false;
    }),
});

// saga
function* asyncSocialLoginSaga(
  action: ReturnType<typeof asyncSocialLogin.request>
) {
  try {
    const provider = action.payload;
    const authResult: AuthResult = yield call(AuthAPI.socialLogin, provider);
    yield put(asyncSocialLogin.success(authResult));
  } catch (e) {
    yield put(asyncSocialLogin.failure(e.message));
  }
}

export function* socialLoginSaga() {
  yield takeEvery(ASYNC_SOCIAL_LOGIN.REQUEST, asyncSocialLoginSaga);
}
