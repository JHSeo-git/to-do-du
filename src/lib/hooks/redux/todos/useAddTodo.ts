import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions, Todo } from "store/modules/todos";

const useAddTodo = () => {
  const dispatch = useDispatch();
  return useCallback((todo: Todo) => dispatch(actions.addTodo(todo)), [
    dispatch,
  ]);
};

export default useAddTodo;
