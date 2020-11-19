import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";

const useAuthState = () => {
  const authState = useSelector(({ auth }: RootState) => auth);
  return authState;
};

export default useAuthState;
