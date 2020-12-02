import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/modules/todos";

const useUpdateTodo = () => {
  const dispatch = useDispatch();

  return useCallback(
    ({ id, name, value }: { id: string; name: string; value: any }) =>
      dispatch(actions.updateTodoDetail({ id, name, value })),
    [dispatch]
  );
};

export default useUpdateTodo;
