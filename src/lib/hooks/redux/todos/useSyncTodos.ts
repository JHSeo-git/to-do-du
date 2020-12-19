import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'store/modules/todos';

const useSyncTodos = () => {
  const dispatch = useDispatch();

  return useCallback(
    (userId: string) => dispatch(actions.asyncSyncTodos.request(userId)),
    [dispatch]
  );
};

export default useSyncTodos;
