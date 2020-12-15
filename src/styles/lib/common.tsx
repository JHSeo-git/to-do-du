import styled, { css } from 'styled-components';

export const whiteBox = css`
  border-radius: 4px;
  background: ${(props) => props.theme.whiteColor};
`;

export const CircleBox = styled.div<{ $isDone?: boolean }>`
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
  cursor: pointer;
`;
