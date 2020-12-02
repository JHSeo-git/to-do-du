import React from "react";
import moment from "moment";
import styled, { css } from "styled-components";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import useDeleteTodo from "lib/hooks/redux/todos/useDeleteTodo";
import useConfirm from "lib/hooks/common/useConfirm";
import useSelectedTodo from "lib/hooks/redux/todos/useSelectedTodo";
import useUpdateTodo from "lib/hooks/redux/todos/useUpdateTodo";
import { whiteBox } from "styles/lib/common";
import { CloseIcon, DeleteIcon } from "styles/lib/Icon";

const TodoDetailWrapper = styled.div`
  height: 100%;
  background: ${(props) => props.theme.grayLightColor};
  padding: ${(props) => props.theme.space[1]};
  width: 18rem;
  position: relative;
`;

const Inner = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const TodoTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes[3]};
  padding: ${(props) => props.theme.space[2]};
  position: sticky;
  top: 0;
  margin-bottom: ${(props) => props.theme.space[2]};
  ${whiteBox};
`;

const TodoRow = styled.div<{ $hoverType?: boolean }>`
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  margin-bottom: ${(props) => props.theme.space[2]};
  ${whiteBox};
  border: 1px solid ${(props) => props.theme.grayLightColor};
  transition: all 0.1s linear;
  ${(props) =>
    props.$hoverType &&
    css`
      &:hover {
        border: 1px solid ${(props) => props.theme.grayColor};
      }
    `}
`;

const TodoContent = styled.textarea`
  flex: 1;
  min-height: ${(props) => props.theme.space[8]};
  font-size: ${(props) => props.theme.fontSizes[2]};
  line-height: 1.5;
  overflow-y: auto;
  tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  height: 100%;
`;

const TodoValue = styled.span`
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes[2]};
`;

const FixedFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: inherit;
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.grayColor};
`;

const FooterCol = styled.div`
  display: flex;
  align-items: center;
`;

const CreateDate = styled.span`
  font-size: ${(props) => props.theme.fontSizes[2]};
  text-align: center;
  color: ${(props) => props.theme.grayDarkColor};
`;

const TodoDetail = () => {
  const todoState = useTodoState();
  const deleteTodo = useDeleteTodo();
  const confirm = useConfirm();
  const hideDetail = useSelectedTodo();
  const updateTodo = useUpdateTodo();

  const onDeleteClick = (id: string | undefined) => {
    if (!id) return;
    confirm("Confirm delete", () => deleteTodo(id));
  };

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: string | undefined
  ) => {
    if (!id) return;
    const {
      target: { name, value },
    } = e;
    updateTodo({ id, name, value });
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
            <TodoRow $hoverType={true}>
              <TodoContent
                name="content"
                value={todoState.selectedTodo.content}
                onChange={(e) => onChange(e, todoState.selectedTodo?.id)}
              />
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
          <FixedFooter>
            <FooterCol>
              <CloseIcon size="20" onClick={() => hideDetail()} />
            </FooterCol>
            <FooterCol>
              <CreateDate>
                {moment(todoState.selectedTodo.createdAt).format("MM월DD일")} 에
                생성됨
              </CreateDate>
            </FooterCol>
            <FooterCol>
              <DeleteIcon
                size="20"
                onClick={() => onDeleteClick(todoState.selectedTodo?.id)}
              />
            </FooterCol>
          </FixedFooter>
        </TodoDetailWrapper>
      )}
    </>
  );
};

export default TodoDetail;
