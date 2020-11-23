import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/modules/todos";

// TODO: channel
const useSyncGetTodos = () => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(actions.asyncGetTodos.request()), [
    dispatch,
  ]);
};

export default useSyncGetTodos;
