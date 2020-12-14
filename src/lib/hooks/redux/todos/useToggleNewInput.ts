import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'store/modules/todos';
import useTodoState from 'lib/hooks/redux/todos/useTodoState';

const useToggleNewInput = () => {
  const todos = useTodoState();
  const dispatch = useDispatch();

  return useCallback(
    () => dispatch(todos.showTodoInput ? actions.closeNewTodo() : actions.openNewTodo()),
    [dispatch, todos.showTodoInput]
  );
};

export default useToggleNewInput;
