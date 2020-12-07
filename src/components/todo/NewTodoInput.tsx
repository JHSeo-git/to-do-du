import React from "react";
import styled from "styled-components";
import useToggleNewInput from "lib/hooks/redux/todos/useToggleNewInput";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import useChangeRegisterTodo from "lib/hooks/redux/todos/useChangeRegisterTodo";
import useAddTodo from "lib/hooks/redux/todos/useAddTodo";
import Spinner from "components/common/Spinner";
import TodoInput from "components/todo/TodoInput";
import { RegIcon } from "styles/lib/Icon";
import { TodosState } from "store/modules/todos";

const NewTodoInputWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[1]} 0;
  position: relative;
`;

const Loader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-25%);
  color: ${(props) => props.theme.primaryColor};
  border-radius: 50%;
`;

interface Props {
  todoState: TodosState;
}

const NewTodoInput = ({ todoState }: Props) => {
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
    toggleShowInput();
  };

  // TODO: useOnClickOutside
  return (
    <NewTodoInputWrapper onSubmit={onRegister}>
      <RegIcon size="20" onClick={toggleShowInput} />
      <TodoInput
        name="title"
        value={todoState.registerForm.title}
        onChange={onChange}
        autoFocus={true}
        required={true}
        placeholder="할 일을 작성해보세요"
      />
      {todoState.loading && (
        <Loader>
          <Spinner size="40" />
        </Loader>
      )}
    </NewTodoInputWrapper>
  );
};

export default NewTodoInput;
