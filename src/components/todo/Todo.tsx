import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { GoCheck } from 'react-icons/go';
import moment from 'moment';
import useSelectedTodo from 'lib/hooks/redux/todos/useSelectedTodo';
import { Todo as TodoProps } from 'store/modules/todos';
import { fadeInWithDelay } from 'styles/lib/animation';
import useUpdateTodoItem from 'lib/hooks/redux/todos/useUpdateTodoItem';

interface Props extends TodoProps {
  isSelected: boolean;
}

const TodoWrapper = styled.div<{ $isSelected: boolean; $isNew: boolean }>`
  padding: ${(props) => props.theme.space[2]} 0;
  padding-left: ${(props) => props.theme.space[1]};
  display: flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.grayLightColor};
  }
  ${(props) =>
    props.$isSelected &&
    css`
      background: ${(props) => rgba(props.theme.primaryColor, 0.2)};
      &:hover {
        background: ${(props) => rgba(props.theme.primaryColor, 0.2)};
      }
    `};
  ${(props) =>
    props.$isNew &&
    css`
      ${fadeInWithDelay()}
    `}
`;

const TodoIconWrapper = styled.div``;

const CircleBox = styled.div<{ $isDone?: boolean }>`
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 0.1rem solid ${(props) => props.theme.primaryColor};
  padding: 0.2rem;
  ${(props) =>
    props.$isDone &&
    css`
      background: ${(props) => props.theme.primaryColor};
    `}
`;

const CheckIcon = styled(GoCheck)<{ $isDone?: boolean }>`
  opacity: 0;
  color: ${(props) => props.theme.primaryColor};
  transition: opacity 0.1s linear;
  ${CircleBox}:hover & {
    opacity: 1;
  }
  ${(props) =>
    props.$isDone &&
    css`
      opacity: 1;
      color: ${(props) => props.theme.whiteColor};
    `}
`;

const TodoContentWrapper = styled.div`
  flex: 1;
  margin-left: ${(props) => props.theme.space[2]};
  display: flex;
  flex-direction: column;
`;

const TodoTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes[3]};
`;

const TodoContent = styled.span`
  margin-top: ${(props) => props.theme.space[1]};
  font-size: ${(props) => props.theme.fontSizes[2]};
`;

const Todo = (todoItem: Props) => {
  const {
    //content,
    //userId,
    id,
    title,
    done,
    targetDate,
    createdAt,
    isSelected,
    isNew,
  } = todoItem;

  const setSelect = useSelectedTodo();
  const updateItem = useUpdateTodoItem();

  useEffect(() => {
    return () => {
      // when exit, deSelect
      setSelect();
    };
  }, [setSelect]);

  const onSelect = () => {
    setSelect(todoItem);
  };

  const onComplete = () => {
    const doneItem: { id: string; name: string; value: any } = {
      id,
      name: 'done',
      value: !done?.value,
    };
    updateItem(doneItem);
  };

  // TODO: New Item Transition
  return (
    <TodoWrapper $isSelected={isSelected} $isNew={isNew ? true : false}>
      <TodoIconWrapper onClick={onComplete}>
        <CircleBox $isDone={done?.value}>
          <CheckIcon $isDone={done?.value} />
        </CircleBox>
      </TodoIconWrapper>
      <TodoContentWrapper onClick={onSelect}>
        <TodoTitle>{title}</TodoTitle>
        <TodoContent>
          {moment(createdAt).format('yyyy.MM.DD HH:mm:ss.SSS')}
        </TodoContent>
        {targetDate && <TodoContent>{targetDate}</TodoContent>}
      </TodoContentWrapper>
    </TodoWrapper>
  );
};

export default Todo;
