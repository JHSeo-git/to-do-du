import React from 'react';
import styled, { css } from 'styled-components';
import { GoCheck } from 'react-icons/go';
import { CircleBox } from 'styles/lib/common';

interface Props {
  isDone?: boolean;
  onClick: () => void;
}

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

const TodoCircleButton = ({ isDone, onClick }: Props) => {
  return (
    <CircleBox $isDone={isDone} onClick={onClick}>
      <CheckIcon $isDone={isDone} />
    </CircleBox>
  );
};

export default TodoCircleButton;
