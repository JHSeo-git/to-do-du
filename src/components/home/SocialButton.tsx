import React from "react";
import useSocialLogin from "lib/hooks/redux/auth/useSocialLogin";
import styled, { css } from "styled-components";

interface ButtonProps {
  provider: string;
  className?: string;
}

const Button = styled.button`
  width: 100%;
  padding: ${(props) => props.theme.space[4]};
  font-size: ${(props) => props.theme.fontSizes[3]};
  background: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.blackColor};
  text-align: left;
  border-radius: 5px;
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
      color: ${(props) => props.theme.grayDarkColor};
      background: ${(props) => props.theme.whiteColor};
    `}
  ${(props: ButtonProps) =>
    props.provider === "Facebook" &&
    css`
      color: ${(props) => props.theme.blueDarkColor};
      background: ${(props) => props.theme.whiteColor};
    `}
    ${(props: ButtonProps) =>
    props.provider === "Google" &&
    css`
      color: ${(props) => props.theme.redDarkColor};
      background: ${(props) => props.theme.whiteColor};
    `}
`;

const SocialButton = ({ provider }: ButtonProps) => {
  const socialLogin = useSocialLogin();

  const onClick = () => {
    socialLogin(provider);
  };

  return (
    <Button provider={provider} onClick={onClick}>
      Continue with {provider}
    </Button>
  );
};

export default SocialButton;
