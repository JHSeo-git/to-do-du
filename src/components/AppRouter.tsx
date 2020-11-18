import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import useSetUser from "lib/hooks/redux/user/useSetUser";
import { authService } from "fBase";

const AppRouter = () => {
  const setUser = useSetUser();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [setUser]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
