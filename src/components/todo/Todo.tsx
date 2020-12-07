import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import moment from "moment";
import useSelectedTodo from "lib/hooks/redux/todos/useSelectedTodo";
import { Todo as TodoProps } from "store/modules/todos";
import { fadeInWithDelay } from "styles/lib/animation";

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

const RegIcon = styled(FaRegCircle)`
  color: ${(props) => props.theme.primaryColor};
`;

const RegCheckIcon = styled(FaRegCheckCircle)`
  color: ${(props) => props.theme.primaryDarkColor};
`;

const TodoContentWrapper = styled.div`
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
    //id,
    //content,
    //userId,
    title,
    done,
    targetDate,
    createdAt,
    isSelected,
    isNew,
  } = todoItem;

  const selectedTodo = useSelectedTodo();

  useEffect(() => {
    return () => {
      // when exit, deSelect
      selectedTodo();
    };
  }, [selectedTodo]);

  const onSelect = () => {
    selectedTodo(todoItem);
  };

  // TODO: New Item Transition
  return (
    <TodoWrapper
      onClick={onSelect}
      $isSelected={isSelected}
      $isNew={isNew ? true : false}
    >
      {done ? <RegCheckIcon size="20" /> : <RegIcon size="20" />}
      <TodoContentWrapper>
        <TodoTitle>{title}</TodoTitle>
        <TodoContent>
          {moment(createdAt).format("yyyy.MM.DD HH:mm:ss.SSS")}
        </TodoContent>
        {targetDate && <TodoContent>{targetDate}</TodoContent>}
      </TodoContentWrapper>
    </TodoWrapper>
  );
};

export default Todo;
