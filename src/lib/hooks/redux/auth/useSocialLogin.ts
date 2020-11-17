import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/modules/auth";

const useSocialLogin = (provider: string) => {
  const dispatch = useDispatch();
  return useCallback(
    () => dispatch(actions.asyncSocialLogin.request(provider)),
    [dispatch, provider]
  );
};

export default useSocialLogin;
