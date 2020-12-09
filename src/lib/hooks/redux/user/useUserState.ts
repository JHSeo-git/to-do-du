import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

const useUserState = () => {
  const userState = useSelector(({ user }: RootState) => user);
  return userState;
};

export default useUserState;
