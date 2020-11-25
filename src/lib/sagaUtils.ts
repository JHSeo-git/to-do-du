import { AsyncActionCreatorBuilder, createAsyncAction } from "typesafe-actions";
import { put, call } from "redux-saga/effects";

interface AsyncAction {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}

export const asyncActionCreator = (actionName: string): AsyncAction => {
  const asyncTypeAction: string[] = ["_REQUEST", "_SUCCESS", "_FAILURE"];

  return {
    REQUEST: actionName + asyncTypeAction[0],
    SUCCESS: actionName + asyncTypeAction[1],
    FAILURE: actionName + asyncTypeAction[2],
  };
};

export const asyncAction = <T, P, J>(asyncAction: AsyncAction) => {
  return createAsyncAction(
    asyncAction.REQUEST,
    asyncAction.SUCCESS,
    asyncAction.FAILURE
  )<T, P, J>();
};

type PromiseCreatorFunction<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>);

export default function createAsyncSaga<
  RequestType,
  RequestPayload,
  SuccessType,
  SuccessPayload,
  FailureType,
  FailurePayload
>(
  asyncAction: AsyncActionCreatorBuilder<
    [RequestType, [RequestPayload, undefined]],
    [SuccessType, [SuccessPayload, undefined]],
    [FailureType, [FailurePayload, undefined]]
  >,
  asyncFunction: PromiseCreatorFunction<RequestPayload, SuccessPayload>,
  successFunc?: any,
  failureFunc?: any
) {
  return function* saga(action: ReturnType<typeof asyncAction.request>) {
    try {
      const result: SuccessPayload = yield call(
        asyncFunction,
        (action as any).payload
      );
      yield put(asyncAction.success(result));
      if (successFunc) {
        yield call(successFunc, result);
      }
    } catch (e) {
      yield put(asyncAction.failure(e));
      if (failureFunc) {
        yield call(failureFunc, e);
      }
    }
  };
}
