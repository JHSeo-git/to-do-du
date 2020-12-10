import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'typesafe-actions';

const useBaseState = () => {
  const baseState = useSelector(({ base }: RootState) => base, shallowEqual);
  return baseState;
};

export default useBaseState;
