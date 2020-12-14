import { ActionType, createAction, createAsyncAction, createReducer } from 'typesafe-actions';
import produce from 'immer';
import * as AuthAPI from 'lib/api/auth';
import { call, put, takeLatest, getContext } from 'redux-saga/effects';

// Action type
const SET_USER = '@@user/SET_USER';
export const ASYNC_LOG_OUT = {
  REQUEST: '@@user/LOG_OUT_REQUEST',
  SUCCESS: '@@user/LOG_OUT_SUCCESS',
  FAILURE: '@@user/LOG_OUT_FAILURE',
};

export interface User {
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface UserState {
  user: User | null;
  processed: boolean;
}

// Action
const setUser = createAction(SET_USER, (payload: User | null) => payload)();
const asyncLogOut = createAsyncAction(
  ASYNC_LOG_OUT.REQUEST,
  ASYNC_LOG_OUT.SUCCESS,
  ASYNC_LOG_OUT.FAILURE
)<undefined, undefined, string>();

// Export actions
export const actions = {
  setUser,
  asyncLogOut,
};

// Type Action
export type UserAction = ActionType<typeof actions>;

// initial State
const initialState: UserState = {
  user: null,
  processed: false,
};

// reducer
export const reducer = createReducer<UserState>(initialState, {
  [SET_USER]: (state, action: ActionType<typeof setUser>) =>
    produce(state, (draft) => {
      if (!action) return;
      const { payload: user } = action;
      draft.user = user;
      draft.processed = true;
    }),
  [ASYNC_LOG_OUT.SUCCESS]: (state, action: ActionType<typeof asyncLogOut.success>) =>
    produce(state, (draft) => {
      if (!action) return;
      draft.user = null;
    }),
});

function* logout() {
  // TODO: after logout, redirect? push?
  try {
    yield call(AuthAPI.logout);
    yield put(asyncLogOut.success());

    const history = yield getContext('history');
    history.push('/');
  } catch (e) {
    yield call(() => console.log(e.message));
  }
}

export function* saga() {
  yield takeLatest(ASYNC_LOG_OUT.REQUEST, logout);
}
