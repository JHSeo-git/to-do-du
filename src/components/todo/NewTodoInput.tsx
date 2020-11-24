import React from "react";
import styled from "styled-components";
import { FaRegCircle } from "react-icons/fa";
import useToggleNewInput from "lib/hooks/redux/todos/useToggleNewInput";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import useChangeRegisterTodo from "lib/hooks/redux/todos/useChangeRegisterTodo";
import useAddTodo from "lib/hooks/redux/todos/useAddTodo";
import Spinner from "components/common/Spinner";
import TodoInput from "components/todo/TodoInput";

const RegIcon = styled(FaRegCircle)`
  color: ${(props) => props.theme.grayDarkColor};
`;

const NewTodoInputWrapper = styled.form`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[1]} 0;
`;

const NewTodoInput = () => {
  const todoState = useTodoState();
  const toggleShowInput = useToggleNewInput();
  const changeRegisterTodo = useChangeRegisterTodo();
  const addNewTodo = useAddTodo();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeRegisterTodo({ name, value });
  };

  const onRegister = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    addNewTodo(todoState.registerForm);
  };

  // TODO: useOnClickOutside
  return (
    <NewTodoInputWrapper onSubmit={onRegister}>
      <RegIcon onClick={toggleShowInput} />
      <TodoInput
        name="title"
        value={todoState.registerForm.title}
        onChange={onChange}
        autoFocus={true}
        required={true}
      />
      {todoState.loading && <Spinner />}
    </NewTodoInputWrapper>
  );
};

export default NewTodoInput;
