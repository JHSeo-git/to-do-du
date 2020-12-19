import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions, UpdatableItem } from 'store/modules/todos';

const useChangeRegisterTodo = () => {
  const dispatch = useDispatch();

  return useCallback(
    ({ name, value }: { name: string; value: string }) => {
      const now = Date.now();
      const valueWithDate: UpdatableItem<typeof value> = {
        value,
        updatedAt: now,
      };

      return dispatch(
        actions.changeRegisterTodo({ name, value: valueWithDate })
      );
    },

    [dispatch]
  );
};

export default useChangeRegisterTodo;
