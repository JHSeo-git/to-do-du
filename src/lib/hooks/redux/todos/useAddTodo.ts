import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { actions, RegisterTodo } from 'store/modules/todos';
import useUserState from 'lib/hooks/redux/user/useUserState';

const useAddTodo = () => {
  const userState = useUserState();
  const dispatch = useDispatch();
  return useCallback(
    (todo: RegisterTodo) => {
      if (!userState.user || !userState.user.uid) return;
      const newTodo: RegisterTodo = {
        ...todo,
        userId: userState.user.uid,
        createdAt: Date.now(),
      };
      return dispatch(actions.asyncAddTodo.request(newTodo));
    },
    [dispatch, userState.user]
  );
};

export default useAddTodo;
