import { useSelector } from "react-redux";
import { AuthState } from "store/modules/auth";

const useAuthState = () => {
  const authState = useSelector((state: AuthState) => state);
  return authState;
};

export default useAuthState;
