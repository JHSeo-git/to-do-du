import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Todos from 'components/todo/Todos';
import useUserState from 'lib/hooks/redux/user/useUserState';
import { Helmet } from 'react-helmet-async';

const TodosRoute = () => {
  const userState = useUserState();

  return !userState.user ? (
    <Redirect to="/" />
  ) : (
    <Switch>
      <Route exact path="/todos">
        <Helmet>
          <title>Todo | To Do Du</title>
        </Helmet>
        <Todos />
      </Route>
      <Route exact path="/todos/today">
        <Helmet>
          <title>오늘 할 일 | To Do Du</title>
        </Helmet>
        <div>today</div>
      </Route>
      <Redirect to="/todos" />
    </Switch>
  );
};

export default TodosRoute;
