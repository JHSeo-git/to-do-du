import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'typesafe-actions';

const useTodoState = () => {
  const todos = useSelector(({ todos }: RootState) => {
    return todos;
  }, shallowEqual);

  return todos;
};

export default useTodoState;
