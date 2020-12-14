import React from 'react';
import Header from 'components/base/Header';
import TodosTemplate from 'components/todo/TodosTemplate';
import Sidebar from 'components/sidebar/Sidebar';
import TodoDetail from 'components/todo/TodoDetail';
import TodosRoute from 'components/todo/TodosRoute';

const Todos = () => {
  return (
    <TodosTemplate header={<Header />} sidebar={<Sidebar />} detailbar={<TodoDetail />}>
      <TodosRoute />
    </TodosTemplate>
  );
};

export default Todos;
