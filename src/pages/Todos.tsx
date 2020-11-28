import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "components/base/Header";
import MainTemplate from "components/main/MainTemplate";
import TodosComponent from "components/todo/Todos";
import Sidebar from "components/sidebar/Sidebar";
import TodoDetail from "components/todo/TodoDetail";

const Todos = () => {
  return (
    <MainTemplate
      header={<Header />}
      sidebar={<Sidebar />}
      detailbar={<TodoDetail />}
    >
      <Switch>
        <Route exact path="/todos">
          <TodosComponent />
        </Route>
        <Route exact path="/todos/today">
          <div>today</div>
        </Route>
        <Redirect to="/todos" />
      </Switch>
    </MainTemplate>
  );
};

export default Todos;
