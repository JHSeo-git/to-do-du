import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions, Todo } from "store/modules/todos";

const useSelectedTodo = () => {
  const dispatch = useDispatch();

  return useCallback(
    (payload?: Todo) =>
      payload
        ? dispatch(actions.showTodoDetail(payload))
        : dispatch(actions.hideTodoDetail()),
    [dispatch]
  );
};

export default useSelectedTodo;
