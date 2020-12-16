import React from 'react';
import { rgba } from 'polished';
import moment from 'moment';
import styled, { css } from 'styled-components';
import useSelectedTodo from 'lib/hooks/redux/todos/useSelectedTodo';
import useUpdateTodoItem from 'lib/hooks/redux/todos/useUpdateTodoItem';
import { Todo as TodoProps } from 'store/modules/todos';
import { fadeInWithDelay } from 'styles/lib/animation';
import TodoCircleButton from './TodoCircleButton';

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

const TodoContentWrapper = styled.div`
  flex: 1;
  margin-left: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[1]};
  display: flex;
  flex-direction: column;
`;

const TodoTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes[3]};
  line-height: 1.3rem;
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
      <TodoCircleButton isDone={done?.value} onClick={onComplete} />
      <TodoContentWrapper onClick={onSelect}>
        <TodoTitle>{title.value}</TodoTitle>
        <TodoContent>{moment(createdAt).format('yyyy.MM.DD HH:mm:ss.SSS')}</TodoContent>
        {targetDate && <TodoContent>{targetDate}</TodoContent>}
      </TodoContentWrapper>
    </TodoWrapper>
  );
};

export default Todo;
