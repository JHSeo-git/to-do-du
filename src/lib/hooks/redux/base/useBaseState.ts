import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

const useBaseState = () => {
  const baseState = useSelector(({ base }: RootState) => base);
  return baseState;
};

export default useBaseState;
