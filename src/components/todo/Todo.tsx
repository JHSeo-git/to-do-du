import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken, rgba } from "polished";
import { FaRegCircle, FaRegCheckCircle, FaMinusCircle } from "react-icons/fa";
import moment from "moment";
import useUserState from "lib/hooks/redux/user/useUserState";
import useDeleteTodo from "lib/hooks/redux/todos/useDeleteTodo";
import useConfirm from "lib/hooks/common/useConfirm";
import useSelectedTodo from "lib/hooks/redux/todos/useSelectedTodo";
import { Todo as TodoProps } from "store/modules/todos";

interface Props extends TodoProps {
  isSelected: boolean;
}

const TodoWrapper = styled.div<{ $isSelected: boolean }>`
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
`;

const RegIcon = styled(FaRegCircle)`
  color: ${(props) => props.theme.primaryColor};
`;

const RegCheckIcon = styled(FaRegCheckCircle)`
  color: ${(props) => props.theme.primaryDarkColor};
`;

const DeleteIcon = styled(FaMinusCircle)`
  color: ${(props) => props.theme.alertColor};
  margin-right: ${(props) => props.theme.space[0]};
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => lighten(0.1, props.theme.alertColor)};
  }
  &:active {
    color: ${(props) => darken(0.1, props.theme.alertColor)};
  }
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
    id,
    title,
    content,
    done,
    userId,
    targetDate,
    createdAt,
    isSelected,
  } = todoItem;

  const userState = useUserState();
  const deleteTodo = useDeleteTodo();
  const confirm = useConfirm();
  const selectedTodo = useSelectedTodo();

  const onDeleteClick = () => {
    confirm("Confirm delete", () => deleteTodo(id));
  };

  const onSelect = () => {
    selectedTodo(todoItem);
  };

  // TODO: RegIcon hover icon change
  return (
    <TodoWrapper onClick={onSelect} $isSelected={isSelected}>
      {/* {userId === userState.user?.uid && (
        <DeleteIcon onClick={onDeleteClick} size="20" />
      )} */}
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
