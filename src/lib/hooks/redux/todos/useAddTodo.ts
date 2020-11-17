import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions, Todo } from "store/modules/todos";

const useAddTodo = (todo: Todo) => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(actions.addTodo(todo)), [dispatch, todo]);
};

export default useAddTodo;
