// import firebase from "firebase";
// import { takeLatest, all } from "redux-saga/effects";
// import { ActionType, createReducer } from "typesafe-actions";
// import produce from "immer";
// import * as AuthAPI from "lib/api/auth";
// import createAsyncSaga, { asyncAction, asyncActionCreator } from "lib/utils";

// // action type
// const ASYNC_SOCIAL_LOGIN = asyncActionCreator("@@auth/ASYNC_SOCIAL_LOGIN");

// type AuthResult = firebase.auth.UserCredential;

// // action
// export const asyncSocialLogin = asyncAction<string, AuthResult, string>(
//   ASYNC_SOCIAL_LOGIN
// );

// export const actions = {
//   asyncSocialLogin,
// };

// export type AuthAction = ActionType<typeof actions>;

// export type AuthState = {
//   loading: boolean;
//   data?: AuthResult;
//   error?: string;
// };

// const initialState: AuthState = {
//   loading: false,
//   data: undefined,
//   error: undefined,
// };

// // reducer
// export const reducer = createReducer<AuthState>(initialState, {
//   [ASYNC_SOCIAL_LOGIN.REQUEST]: (state) =>
//     produce(state, (draft) => {
//       draft.loading = true;
//     }),
//   [ASYNC_SOCIAL_LOGIN.SUCCESS]: (
//     state,
//     action: ActionType<typeof asyncSocialLogin.success>
//   ) =>
//     produce(state, (draft) => {
//       if (!action) return;
//       const { payload: fbAuthResult } = action;
//       draft.data = fbAuthResult;
//       draft.loading = false;
//     }),
//   [ASYNC_SOCIAL_LOGIN.FAILURE]: (
//     state,
//     action: ActionType<typeof asyncSocialLogin.failure>
//   ) =>
//     produce(state, (draft) => {
//       if (!action) return;
//       const { payload: message } = action;
//       draft.error = message;
//       draft.loading = false;
//     }),
// });

// // saga
// const getAsyncSocialLoginSaga = createAsyncSaga(
//   asyncSocialLogin,
//   (provider: string) => AuthAPI.socialLogin(provider)
// );

// function* socialLoginSaga() {
//   yield takeLatest(ASYNC_SOCIAL_LOGIN.REQUEST, getAsyncSocialLoginSaga);
// }

// export function* saga() {
//   yield all([socialLoginSaga]);
// }
export default console.log("tt");
