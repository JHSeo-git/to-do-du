import React from "react";
import styled from "styled-components";
import { FaRegCircle } from "react-icons/fa";
import { pressedKey } from "lib/common";
import useToggleNewInput from "lib/hooks/redux/todos/useToggleNewInput";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import useChangeRegisterTodo from "lib/hooks/redux/todos/useChangeRegisterTodo";

const RegIcon = styled(FaRegCircle)`
  color: ${(props) => props.theme.grayDarkColor};
`;

const NewTodoInputBox = styled.input`
  flex: 1;
  margin-left: ${(props) => props.theme.space[2]};
  border: none;
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-weight: 500;
`;

const NewTodoInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[1]} 0;
`;

const NewTodoInput = () => {
  const todoState = useTodoState();
  const toggleShowInput = useToggleNewInput();
  const changeRegisterTodo = useChangeRegisterTodo();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeRegisterTodo({ name, value });
  };

  const onKeyPressEnter = pressedKey(() => {
    onRegister();
  });

  const onRegister = () => {
    // TODO: add redux
    console.log("todo add redux");
  };

  return (
    <NewTodoInputWrapper>
      <RegIcon onClick={toggleShowInput} />
      <NewTodoInputBox
        name="title"
        value={todoState.registerForm.title}
        onChange={onChange}
        onKeyPress={onKeyPressEnter}
        autoFocus
      />
    </NewTodoInputWrapper>
  );
};

export default NewTodoInput;
