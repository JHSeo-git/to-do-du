import React from "react";
import useSocialLogin from "lib/hooks/redux/auth/useSocialLogin";
import styled, { css } from "styled-components";
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
  justify-content: center;
  align-items: center;
  background: transparent;
`;

const IconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  ${(props: ButtonProps) =>
    props.provider === "Github" &&
    css`
      background: ${(props) => props.theme.githubGray};
    `};
  ${(props: ButtonProps) =>
    props.provider === "Facebook" &&
    css`
      background: ${(props) => props.theme.facebookBlue};
    `};
  ${(props: ButtonProps) =>
    props.provider === "Google" &&
    css`
      background: ${(props) => props.theme.whiteColor};
      border: 1px solid ${(props) => props.theme.grayLightColor};
    `};
`;

const FaceBookIcon = styled(FaFacebookF)`
  color: ${(props) => props.theme.whiteColor};
`;
const GithubIcon = styled(FaGithub)`
  color: ${(props) => props.theme.whiteColor};
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
      </IconWrapper>
    </SocialButtonWrapper>
  );
};

export default SocialButton;
