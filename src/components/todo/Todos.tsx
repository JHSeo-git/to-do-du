import React from "react";
import styled from "styled-components";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import Todo from "components/todo/Todo";
import NewTodo from "components/todo/NewTodo";

const TodoItems = styled.ul`
  background: ${(props) => props.theme.whiteColor};
  padding: ${(props) => props.theme.space[2]};
`;

const TodoItem = styled.li``;

const Todos = () => {
  const todoState = useTodoState();
  return (
    <TodoItems>
      {todoState.todos?.map((todo) => (
        <TodoItem key={todo.id}>
          <Todo content={todo.content} />
        </TodoItem>
      ))}
      <TodoItem>
        <NewTodo />
      </TodoItem>
    </TodoItems>
  );
};

export default Todos;
