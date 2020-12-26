import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import Spinner from 'components/common/Spinner';

type SocialProvider = 'GITHUB' | 'GOOGLE' | 'FACEBOOK' | 'DEFAULT';

interface StyledButtonProps {
  $isLoading?: boolean;
  $provider?: SocialProvider;
}

const Text = styled.span`
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin-left: ${(props) => props.theme.space[1]};
  color: inherit;
`;

const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
`;

const FaceBookIcon = styled(FaFacebookF)`
  color: ${(props) => props.theme.whiteColor};
`;
const GithubIcon = styled(FaGithub)`
  color: ${(props) => props.theme.whiteColor};
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
  position: relative;
  ${(props) =>
    (!props.$provider || props.$provider === 'DEFAULT') &&
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
    props.$provider === 'GITHUB' &&
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
    props.$provider === 'FACEBOOK' &&
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
    props.$provider === 'GOOGLE' &&
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
  provider?: SocialProvider;
  isLoading?: boolean;
  onSocialClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({
  provider,
  isLoading,
  onSocialClick,
  children,
  ...rest
}: ButtonProps) => {
  const content = (
    <>
      <Text>{children}</Text>
      {isLoading && (
        <Loading>
          <Spinner size="2rem" />
        </Loading>
      )}
    </>
  );
  const Icon = (
    <>
      {provider === 'GOOGLE' && <FcGoogle size="20" />}
      {provider === 'FACEBOOK' && <FaceBookIcon size="20" />}
      {provider === 'GITHUB' && <GithubIcon size="20" />}
    </>
  );

  return (
    <StyledButton
      $isLoading={isLoading}
      $provider={provider}
      onClick={onSocialClick}
      {...rest}
    >
      {Icon}
      {content}
    </StyledButton>
  );
};

export default Button;
