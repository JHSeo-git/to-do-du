import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface StyledButtonProps {
  $isLoading?: boolean;
  $provider?: string;
}

const Text = styled.span`
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin-left: ${(props) => props.theme.space[1]};
  color: inherit;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
  transition: all 0.2s ease-in-out;
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  user-select: none;
  ${(props) =>
    (!props.$provider || props.$provider === 'default') &&
    css`
      background: ${(props) => props.theme.whiteColor};
      color: ${(props) => props.theme.grayDarkColor};
      border: 1px solid ${(props) => props.theme.grayLightColor};
      &:hover {
        background: ${(props) => darken(0.1, props.theme.whiteColor)};
      }
      &:active {
        background: ${(props) => darken(0, props.theme.whiteColor)};
      }
    `};
  ${(props) =>
    props.$provider === 'Github' &&
    css`
      background: ${(props) => props.theme.githubGray};
      color: ${(props) => props.theme.whiteColor};
      border: 1px solid transparent;
      &:hover {
        background: ${(props) => darken(0.1, props.theme.githubGray)};
      }
      &:active {
        background: ${(props) => darken(0, props.theme.githubGray)};
      }
    `};
  ${(props) =>
    props.$provider === 'Facebook' &&
    css`
      background: ${(props) => props.theme.facebookBlue};
      color: ${(props) => props.theme.whiteColor};
      border: 1px solid transparent;
      &:hover {
        background: ${(props) => darken(0.1, props.theme.facebookBlue)};
      }
      &:active {
        background: ${(props) => darken(0, props.theme.facebookBlue)};
      }
    `};
  ${(props) =>
    props.$provider === 'Google' &&
    css`
      background: ${(props) => props.theme.whiteColor};
      color: ${(props) => props.theme.blackColor};
      border: 1px solid ${(props) => props.theme.grayLightColor};
      &:hover {
        background: ${(props) => darken(0.1, props.theme.whiteColor)};
      }
      &:active {
        background: ${(props) => darken(0, props.theme.whiteColor)};
      }
    `};
`;

export interface ButtonProps {
  provider?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  provider,
  isLoading,
  children,
  ...rest
}: ButtonProps) => {
  const content = (
    <>
      <Text>{children}</Text>
      {isLoading && <Loading>...loading</Loading>}
    </>
  );

  return (
    <StyledButton $isLoading={isLoading} $provider={provider} {...rest}>
      {content}
    </StyledButton>
  );
};

export default Button;
