import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/modules/todos";

const useUpdateTodoItem = () => {
  const dispatch = useDispatch();

  return useCallback(
    ({ id, name, value }: { id: string; name: string; value: string }) =>
      dispatch(actions.asyncUpdateTodoItem.request({ id, name, value })),
    [dispatch]
  );
};

export default useUpdateTodoItem;
