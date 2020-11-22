import React from "react";
import styled from "styled-components";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import NewTodoInput from "./NewTodoInput";
import NewTodoButton from "./NewTodoButton";

const NewTodoWrapper = styled.div`
  min-width: 50px;
`;

const NewTodo = () => {
  const todoState = useTodoState();

  return (
    <NewTodoWrapper>
      {todoState.showTodoInput ? <NewTodoInput /> : <NewTodoButton />}
    </NewTodoWrapper>
  );
};

export default NewTodo;
