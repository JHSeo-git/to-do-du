import React, { useEffect } from "react";
import styled from "styled-components";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import Todo from "components/todo/Todo";
import NewTodo from "components/todo/NewTodo";
import useSyncTodos from "lib/hooks/redux/todos/useSyncTodos";

const TodoItems = styled.ul`
  background: ${(props) => props.theme.whiteColor};
  padding: ${(props) => props.theme.space[2]};
`;

const TodoItem = styled.li``;

const Todos = () => {
  const todoState = useTodoState();
  const syncTodos = useSyncTodos();

  // TODO: refactoring
  useEffect(() => {
    syncTodos();
  }, [syncTodos]);

  return (
    <TodoItems>
      {todoState.todos?.map((todo) => (
        <TodoItem key={todo.id}>
          <Todo {...todo} />
        </TodoItem>
      ))}
      <TodoItem>
        <NewTodo />
      </TodoItem>
    </TodoItems>
  );
};

export default Todos;
