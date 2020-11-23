import React, { useEffect } from "react";
import styled from "styled-components";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import useGetTodos from "lib/hooks/redux/todos/useGetTodos";
import Todo from "components/todo/Todo";
import NewTodo from "components/todo/NewTodo";

const TodoItems = styled.ul`
  background: ${(props) => props.theme.whiteColor};
  padding: ${(props) => props.theme.space[2]};
`;

const TodoItem = styled.li``;

const Todos = () => {
  const todoState = useTodoState();
  const getTodos = useGetTodos();

  // TODO: refactoring
  useEffect(() => {
    getTodos();
  }, [getTodos]);

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
