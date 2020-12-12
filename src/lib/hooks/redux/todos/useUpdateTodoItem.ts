import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions, UpdatableItem } from 'store/modules/todos';

const useUpdateTodoItem = () => {
  const dispatch = useDispatch();

  return useCallback(
    ({ id, name, value }: { id: string; name: string; value: any }) => {
      const now = Date.now();
      const valueWithDate: UpdatableItem<typeof value> = {
        value,
        updatedAt: now,
      };

      return dispatch(
        actions.asyncUpdateTodoItem.request({ id, name, value: valueWithDate })
      );
    },
    [dispatch]
  );
};

export default useUpdateTodoItem;
