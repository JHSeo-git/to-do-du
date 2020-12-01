import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions, Todo } from "store/modules/todos";

const useSelectedTodo = () => {
  const dispatch = useDispatch();

  return useCallback(
    (payload: Todo) => dispatch(actions.showTodoDetail(payload)),
    [dispatch]
  );
};

export default useSelectedTodo;
