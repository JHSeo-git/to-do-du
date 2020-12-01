import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";
import { FaMinusCircle } from "react-icons/fa";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import useUserState from "lib/hooks/redux/user/useUserState";
import useDeleteTodo from "lib/hooks/redux/todos/useDeleteTodo";
import useConfirm from "lib/hooks/common/useConfirm";

const TodoDetailWrapper = styled.div`
  background: ${(props) => props.theme.grayLightColor};
  padding: ${(props) => props.theme.space[1]};
  width: 18rem;
  overflow-y: auto;
`;

const Inner = styled.div``;

const whiteBoxBorder = css`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.grayLightColor};
  background: ${(props) => props.theme.whiteColor};
`;

const TodoTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes[3]};
  padding: ${(props) => props.theme.space[2]};
  position: sticky;
  top: 0;
  ${whiteBoxBorder};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const TodoRow = styled.div`
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  ${whiteBoxBorder};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const TodoContent = styled.span`
  flex: 1;
  min-height: ${(props) => props.theme.space[8]};
  font-size: ${(props) => props.theme.fontSizes[2]};
`;

const TodoValue = styled.span`
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes[2]};
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

const TodoDetail = () => {
  const todoState = useTodoState();
  const userState = useUserState();
  const deleteTodo = useDeleteTodo();
  const confirm = useConfirm();

  const onDeleteClick = (id: string) => {
    confirm("Confirm delete", () => deleteTodo(id));
  };
  return (
    <>
      {/* {userId === userState.user?.uid && (
        <DeleteIcon onClick={onDeleteClick} size="20" />
      )} */}
      {todoState?.selectedTodo && (
        <TodoDetailWrapper>
          <Inner>
            <TodoTitle>{todoState.selectedTodo.title}</TodoTitle>
            <TodoRow>
              <TodoContent>{todoState.selectedTodo.content}</TodoContent>
            </TodoRow>
            <TodoRow>
              <TodoValue>{todoState.selectedTodo.userId}</TodoValue>
            </TodoRow>
            <TodoRow>
              <TodoValue>{todoState.selectedTodo.targetDate}</TodoValue>
            </TodoRow>
            <TodoRow>
              <TodoValue>{todoState.selectedTodo.createdAt}</TodoValue>
            </TodoRow>
          </Inner>
        </TodoDetailWrapper>
      )}
    </>
  );
};

export default TodoDetail;
