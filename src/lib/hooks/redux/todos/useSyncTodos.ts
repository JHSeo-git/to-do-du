import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/modules/todos";

const useSyncTodos = () => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(actions.asyncSyncTodos.request()), [
    dispatch,
  ]);
};

export default useSyncTodos;
