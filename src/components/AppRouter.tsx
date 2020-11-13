import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "pages/Home";

const AppRouter = () => {
  // 로그인 시
  // 미 로그인 시
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
