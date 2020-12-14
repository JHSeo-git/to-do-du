import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'store/modules/todos';

const useDeleteTodo = () => {
  const dispatch = useDispatch();

  return useCallback((id: string) => dispatch(actions.asyncDeleteTodo.request(id)), [dispatch]);
};

export default useDeleteTodo;
