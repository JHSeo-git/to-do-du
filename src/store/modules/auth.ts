import firebase from 'firebase/app';
import { put, call, takeEvery } from 'redux-saga/effects';
import { ActionType, createAsyncAction, createReducer } from 'typesafe-actions';
import produce from 'immer';
import * as AuthAPI from 'lib/api/auth';
import * as FbUtils from 'lib/fbUtils';

const AUTH_ACCOUNT_EXISTS_CODE =
  'auth/account-exists-with-different-credential';

// Action Type
const ASYNC_SOCIAL_LOGIN = {
  REQEUST: '@@auth/ASYNC_SOCIAL_LOGIN_REQUEST',
  SUCCESS: '@@auth/ASYNC_SOCIAL_LOGIN_SUCCESS',
  FAILURE: '@@auth/ASYNC_SOCIAL_LOGIN_FAILURE',
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
      draft.error = undefined;
    });
  },
  [ASYNC_SOCIAL_LOGIN.FAILURE]: (
    state,
    action: ActionType<typeof asyncSocialLogin.failure>
  ) => {
    return produce(state, (draft) => {
      if (!action) return;
      const { payload: message } = action;
      draft.loading = false;
      draft.error = message;
    });
  },
});

const supportedProviders = [
  {
    providerName: 'Google',
    providerId: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  },
  {
    providerName: 'Facebook',
    providerId: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  },
  {
    providerName: 'Github',
    providerId: firebase.auth.GithubAuthProvider.PROVIDER_ID,
  },
];

// TODO: call returntype typescript
// reference: https://firebase.google.com/docs/auth/web/google-signin
// saga
function* socialLoginSaga(action: ReturnType<typeof asyncSocialLogin.request>) {
  try {
    const authProvider = FbUtils.getStringToAuthProvider(action.payload);
    if (!authProvider) {
      yield put(asyncSocialLogin.failure('Not Exists Auth Provider'));
      return;
    }
    const authResult = yield call(AuthAPI.signInWithPopup, authProvider);
    yield put(asyncSocialLogin.success(authResult));
  } catch (e) {
    if (e.code === AUTH_ACCOUNT_EXISTS_CODE) {
      // auth/account-exists-with-different-credential
      // 위 code가 오면 같은 계정으로 이미 등록되어 있단 뜻으로 link 시켜준다.
      const providers = yield call(AuthAPI.fetchProvidersForEmail, e.email);
      if (!providers || providers.length === 0) {
        yield put(
          asyncSocialLogin.failure('Not Exists Auth Account for your Email')
        );
        return;
      }

      // OAuth provider에 따라서 재 로그인을 하도록 한다.
      // google..., facebook..., github...
      const firstProvider = supportedProviders.find((provider) =>
        providers.find((p: string) => p === provider.providerId)
      );
      if (!firstProvider) {
        yield put(
          asyncSocialLogin.failure('Not Exists Auth Provider for your Email')
        );
        return;
      }

      // 재 로그인
      const linkProvider = FbUtils.getStringToAuthProvider(
        firstProvider.providerName
      );
      if (!linkProvider) {
        yield put(asyncSocialLogin.failure('Not Exists Link Provider'));
        return;
      }

      const linkCredential = yield call(AuthAPI.signInWithPopup, linkProvider);
      if (!linkCredential) {
        yield put(asyncSocialLogin.failure('Not Exists Link Credential'));
        return;
      }

      const user = yield call(AuthAPI.signInWithCredential, linkCredential);

      if (!user || !e.credential) {
        yield put(asyncSocialLogin.failure('Not Find Linking User'));
        return;
      }

      const linkResult = yield call(
        AuthAPI.linkWithCredential,
        user,
        e.credential
      );

      if (!linkResult || !linkResult.credential) {
        yield put(asyncSocialLogin.failure('Not Linked User'));
        return;
      }

      yield put(asyncSocialLogin.success(linkResult.credential));
    } else {
      yield put(asyncSocialLogin.failure(e.message));
    }
  }
}

export function* saga() {
  yield takeEvery(ASYNC_SOCIAL_LOGIN.REQEUST, socialLoginSaga);
}
