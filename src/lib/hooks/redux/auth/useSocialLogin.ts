import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authService } from "fBase";
import { actions } from "store/modules/auth";
import useSetUser from "lib/hooks/redux/user/useSetUser";
import useAuthState from "lib/hooks/redux/auth/useAuthState";

const useSocialLogin = (provider: string) => {
  const authState = useAuthState();
  const dispatch = useDispatch();
  const setUser = useSetUser();

  useEffect(() => {
    console.log(
      "authState.authResult.providerId : ",
      authState?.authResult?.providerId
    );
    console.log("provider.toUpperCase : ", provider);

    if (
      authState.authResult &&
      authState.authResult.providerId?.toUpperCase() === provider.toUpperCase()
    ) {
      if (authService.currentUser) {
        setUser(authService.currentUser);
      }
    }
  }, [authState.authResult, provider, setUser]);

  return useCallback(
    () => dispatch(actions.asyncSocialLogin.request(provider)),
    [dispatch, provider]
  );
};

export default useSocialLogin;
