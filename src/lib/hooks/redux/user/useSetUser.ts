import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions, User } from "store/modules/user";

const useSetUser = () => {
  const dispatch = useDispatch();
  return useCallback((user: User | null) => dispatch(actions.setUser(user)), [
    dispatch,
  ]);
};

export default useSetUser;
