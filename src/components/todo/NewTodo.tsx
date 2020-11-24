import React from "react";
import styled from "styled-components";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import NewTodoInput from "components/todo/NewTodoInput";
import NewTodoButton from "components/todo/NewTodoButton";

const NewTodoWrapper = styled.div`
  margin-top: ${(props) => props.theme.space[5]};
  min-height: 50px;
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
