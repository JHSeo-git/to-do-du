import React from 'react';
import styled from 'styled-components';
import useTodoState from 'lib/hooks/redux/todos/useTodoState';
import NewTodoInput from 'components/todo/NewTodoInput';
import NewTodoButton from 'components/todo/NewTodoButton';

const NewTodoWrapper = styled.div`
  background: inherit;
  min-height: 50px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  padding-left: ${(props) => props.theme.space[1]};
  z-index: ${(props) => props.theme.zIndex.headerSticky};
`;

const NewTodo = () => {
  const todoState = useTodoState();

  return (
    <NewTodoWrapper>
      {todoState.showTodoInput ? <NewTodoInput todoState={todoState} /> : <NewTodoButton />}
    </NewTodoWrapper>
  );
};

export default NewTodo;
