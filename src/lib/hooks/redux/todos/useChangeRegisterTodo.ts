import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'store/modules/todos';

const useChangeRegisterTodo = () => {
  const dispatch = useDispatch();

  return useCallback(
    ({ name, value }: { name: string; value: any }) =>
      dispatch(actions.changeRegisterTodo({ name, value })),
    [dispatch]
  );
};

export default useChangeRegisterTodo;
