import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/modules/todos";

const useGetTodos = () => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(actions.asyncGetTodos.request()), [
    dispatch,
  ]);
};

export default useGetTodos;
