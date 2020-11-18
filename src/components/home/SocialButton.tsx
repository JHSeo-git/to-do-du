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
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  }
  &:active {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }
  ${(props: ButtonProps) =>
    props.provider === "Github" &&
    css`
      background: ${(props) => props.theme.grayColor};
      color: ${(props) => props.theme.whiteColor};
    `}
  ${(props: ButtonProps) =>
    props.provider === "Facebook" &&
    css`
      background: ${(props) => props.theme.blueDarkColor};
      color: ${(props) => props.theme.whiteColor};
    `}
    ${(props: ButtonProps) =>
    props.provider === "Google" &&
    css`
      background: ${(props) => props.theme.redDarkColor};
      color: ${(props) => props.theme.whiteColor};
    `}
`;

const SocialButton = ({ provider }: ButtonProps) => {
  const socialLogin = useSocialLogin(provider);

  return (
    <Button provider={provider} onClick={socialLogin}>
      {provider}
    </Button>
  );
};

export default SocialButton;
