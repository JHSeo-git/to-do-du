import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'typesafe-actions';

const useUserState = () => {
  const userState = useSelector(({ user }: RootState) => user, shallowEqual);
  return userState;
};

export default useUserState;
