import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import { authService } from "fBase";
import useUserState from "lib/hooks/redux/user/useUserState";
import useSetUser from "lib/hooks/redux/user/useSetUser";

const AppRouter = () => {
  const userState = useUserState();
  const setUser = useSetUser();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);

  // logged in
  // logged out
  // TODO: User Initialize component
  return (
    <>
      {userState.processed ? (
        <BrowserRouter>
          <Switch>
            <Route exact to="/">
              <Home />
            </Route>
            <Route to="/test">
              <div>test</div>
            </Route>
          </Switch>
        </BrowserRouter>
      ) : (
        <div>Initialize...</div>
      )}
    </>
  );
};

export default AppRouter;
