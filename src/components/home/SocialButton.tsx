import React from "react";
import useSocialLogin from "lib/hooks/redux/auth/useSocialLogin";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

interface ButtonProps {
  provider: string;
  className?: string;
}

const SocialButtonWrapper = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.space[0]};
  display: flex;
  align-items: center;
  background: transparent;
`;

const IconWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
  transition: all 0.2s ease-in-out;
  border-radius: 3px;
  ${(props: ButtonProps) =>
    props.provider === "Github" &&
    css`
      background: ${(props) => props.theme.githubGray};
      color: ${(props) => props.theme.whiteColor};
      border: 1px solid transparent;
      &:hover {
        background: ${(props) => lighten(0.1, props.theme.githubGray)};
      }
      &:active {
        background: ${(props) => darken(0.1, props.theme.githubGray)};
      }
    `};
  ${(props: ButtonProps) =>
    props.provider === "Facebook" &&
    css`
      background: ${(props) => props.theme.facebookBlue};
      color: ${(props) => props.theme.whiteColor};
      border: 1px solid transparent;
      &:hover {
        background: ${(props) => lighten(0.1, props.theme.facebookBlue)};
      }
      &:active {
        background: ${(props) => darken(0.1, props.theme.facebookBlue)};
      }
    `};
  ${(props: ButtonProps) =>
    props.provider === "Google" &&
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

const FaceBookIcon = styled(FaFacebookF)`
  color: ${(props) => props.theme.whiteColor};
`;
const GithubIcon = styled(FaGithub)`
  color: ${(props) => props.theme.whiteColor};
`;

const ButtonText = styled.span`
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin-left: ${(props) => props.theme.space[1]};
  color: inherit;
`;

const SocialButton = ({ provider }: ButtonProps) => {
  const socialLogin = useSocialLogin();

  const onClick = () => {
    socialLogin(provider);
  };

  return (
    <SocialButtonWrapper>
      <IconWrapper provider={provider} onClick={onClick}>
        {provider === "Google" && <FcGoogle size="20" />}
        {provider === "Facebook" && <FaceBookIcon size="20" />}
        {provider === "Github" && <GithubIcon size="20" />}
        <ButtonText>{provider}</ButtonText>
      </IconWrapper>
    </SocialButtonWrapper>
  );
};

export default SocialButton;
