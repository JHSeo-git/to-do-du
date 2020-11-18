import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/modules/auth";

const useSocialLogin = () => {
  const dispatch = useDispatch();

  return useCallback(
    (provider: string) => dispatch(actions.asyncSocialLogin.request(provider)),
    [dispatch]
  );
};

export default useSocialLogin;
