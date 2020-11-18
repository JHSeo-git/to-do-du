import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/modules/user";

const useLogout = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(actions.asyncLogOut.request()), [dispatch]);
};

export default useLogout;
