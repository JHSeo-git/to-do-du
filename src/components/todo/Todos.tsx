import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import useTodoState from 'lib/hooks/redux/todos/useTodoState';
import Todo from 'components/todo/Todo';
import NewTodo from 'components/todo/NewTodo';
import useSyncTodos from 'lib/hooks/redux/todos/useSyncTodos';
import useUserState from 'lib/hooks/redux/user/useUserState';
import useExpandable from 'lib/hooks/common/useExpandable';

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
  cursor: pointer;
`;

const AngleIcon = styled(FiChevronDown)<{ $isExpand: boolean }>`
  color: ${(props) => props.theme.grayColor};
  margin-right: ${(props) => props.theme.space[2]};
  transition: transform 0.1s linear;
  ${(props) =>
    props.$isExpand === false &&
    css`
      transform: rotate(-90deg);
    `}
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
  const [expand, onToggle] = useExpandable();

  // TODO: refactoring
  useEffect(() => {
    if (!userState.user || !userState.user.uid) return;
    syncTodos(userState.user.uid);
  }, [userState.user, syncTodos]);

  return (
    <TodosWrapper>
      <NewTodo />
      {todoState.todos && (
        <TodoItems>
          {todoState.todos
            .filter((todo) => !todo.done || todo.done.value === false)
            .map((todo) => (
              <TodoItem key={todo.id}>
                <Todo
                  {...todo}
                  isSelected={todoState.selectedTodo?.id === todo.id}
                />
              </TodoItem>
            ))}
          {todoState.todos.filter((todo) => todo.done?.value === true).length >
            0 && (
            <ExpandableWrapper>
              <ExpandableHeader onClick={onToggle}>
                <AngleIcon size="20" $isExpand={expand} />
                <ExpandableTitle>완료됨</ExpandableTitle>
              </ExpandableHeader>
              {expand &&
                todoState.todos
                  .filter((todo) => todo.done?.value === true)
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
      )}
    </TodosWrapper>
  );
};

export default Todos;
