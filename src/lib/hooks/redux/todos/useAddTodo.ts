import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions, RegiterTodo } from "store/modules/todos";

const useAddTodo = () => {
  const dispatch = useDispatch();
  return useCallback((todo: RegiterTodo) => dispatch(actions.addTodo(todo)), [
    dispatch,
  ]);
};

export default useAddTodo;
