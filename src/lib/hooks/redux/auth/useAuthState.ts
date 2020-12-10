import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'typesafe-actions';

const useAuthState = () => {
  const authState = useSelector(({ auth }: RootState) => auth, shallowEqual);
  return authState;
};

export default useAuthState;
