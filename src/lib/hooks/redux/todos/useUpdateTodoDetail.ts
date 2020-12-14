import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions, UpdatableItem } from 'store/modules/todos';

const useUpdateTodoDetail = () => {
  const dispatch = useDispatch();

  return useCallback(
    ({ id, name, value }: { id: string; name: string; value: any }) => {
      const changedValue: UpdatableItem<typeof value> = {
        value,
      };
      return dispatch(actions.updateTodoDetail({ id, name, value: changedValue }));
    },
    [dispatch]
  );
};

export default useUpdateTodoDetail;
