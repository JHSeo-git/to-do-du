import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions, RegisterTodo } from "store/modules/todos";

const useAddTodo = () => {
  const dispatch = useDispatch();
  return useCallback(
    (todo: RegisterTodo) => dispatch(actions.asyncAddTodo.request(todo)),
    [dispatch]
  );
};

export default useAddTodo;
