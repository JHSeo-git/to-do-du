import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import useTodoState from 'lib/hooks/redux/todos/useTodoState';
import Todo from 'components/todo/Todo';
import NewTodo from 'components/todo/NewTodo';
import useSyncTodos from 'lib/hooks/redux/todos/useSyncTodos';
import useUserState from 'lib/hooks/redux/user/useUserState';

const TodosWrapper = styled.div`
  background: ${(props) => props.theme.whiteColor};
  padding: 0 ${(props) => props.theme.space[2]};
  position: relative;
`;

const TodoItems = styled.ul`
  background: ${(props) => props.theme.whiteColor};
  overflow-y: auto;
`;

const TodoItem = styled.li``;

const ExpandableWrapper = styled.ul``;

const ExpandableHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[1]};
`;

const AngleIcon = styled(FiChevronDown)`
  color: ${(props) => props.theme.grayColor};
  margin-right: ${(props) => props.theme.space[2]};
`;
const ExpandableTitle = styled.span`
  color: ${(props) => props.theme.grayDarkColor};
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-weight: 700;
`;

const Todos = () => {
  const userState = useUserState();
  const todoState = useTodoState();
  const syncTodos = useSyncTodos();

  // TODO: refactoring
  useEffect(() => {
    if (!userState.user || !userState.user.uid) return;
    syncTodos(userState.user.uid);
  }, [userState.user, syncTodos]);

  return (
    <TodosWrapper>
      <NewTodo />
      <TodoItems>
        {todoState.todos &&
          todoState.todos
            .filter((todo) => todo.done === false)
            .map((todo) => (
              <TodoItem key={todo.id}>
                <Todo
                  {...todo}
                  isSelected={todoState.selectedTodo?.id === todo.id}
                />
              </TodoItem>
            ))}
        {todoState.todos &&
          todoState.todos.filter((todo) => todo.done === true) && (
            <ExpandableWrapper>
              <ExpandableHeader>
                <AngleIcon size="20" />
                <ExpandableTitle>완료됨</ExpandableTitle>
              </ExpandableHeader>
              {todoState.todos
                .filter((todo) => todo.done === true)
                .map((todo) => (
                  <TodoItem key={todo.id}>
                    <Todo
                      {...todo}
                      isSelected={todoState.selectedTodo?.id === todo.id}
                    />
                  </TodoItem>
                ))}
            </ExpandableWrapper>
          )}
      </TodoItems>
    </TodosWrapper>
  );
};

export default Todos;
