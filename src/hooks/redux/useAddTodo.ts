import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addTodo, Todo } from "store/modules/todos";

const useAddTodo = () => {
  const dispatch = useDispatch();
  return useCallback((todo: Todo) => dispatch(addTodo(todo)), [dispatch]);
};

export default useAddTodo;
