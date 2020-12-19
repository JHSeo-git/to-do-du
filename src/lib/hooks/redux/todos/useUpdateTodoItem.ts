import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions, UpdatableItem } from 'store/modules/todos';

const useUpdateTodoItem = () => {
  const dispatch = useDispatch();

  return useCallback(
    ({
      id,
      name,
      value,
      reload,
    }: {
      id: string;
      name: string;
      value: any;
      reload?: boolean;
    }) => {
      const now = Date.now();
      const valueWithDate: UpdatableItem<typeof value> = {
        value,
        updatedAt: now,
      };

      return dispatch(
        actions.asyncUpdateTodoItem.request({
          id,
          name,
          value: valueWithDate,
          reload,
        })
      );
    },
    [dispatch]
  );
};

export default useUpdateTodoItem;
