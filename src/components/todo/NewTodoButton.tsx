import React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import useToggleNewInput from "lib/hooks/redux/todos/useToggleNewInput";
import { PlusIcon } from "styles/lib/Icon";

const NewTodoText = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-weight: 700;
  margin-left: ${(props) => props.theme.space[2]};
`;

const NewTodoButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[1]} 0;
  cursor: pointer;
  user-select: none;
  &:hover ${NewTodoText}, &:hover ${PlusIcon} {
    color: ${(props) => lighten(0.1, props.theme.primaryColor)};
  }
  &:active ${NewTodoText}, &:active ${PlusIcon} {
    color: ${(props) => darken(0.1, props.theme.primaryColor)};
  }
`;

const NewTodoButton = () => {
  const toggleShowInput = useToggleNewInput();
  return (
    <NewTodoButtonWrapper onClick={toggleShowInput}>
      <PlusIcon size="20" />
      <NewTodoText>할 일 추가하기</NewTodoText>
    </NewTodoButtonWrapper>
  );
};

export default NewTodoButton;
