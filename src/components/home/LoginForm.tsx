import React from "react";
import styled from "styled-components";
import SocialButton from "components/home/SocialButton";

const LoginFormWrapper = styled.div`
  width: 480px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes[9]};
  font-weight: 700;
  color: ${(props) => props.theme.whiteColor};
  margin-bottom: ${(props) => props.theme.space[7]};
`;

const ButtonItems = styled.ul`
  display: flex;
  align-items: center;
`;

const ButtonItem = styled.li`
  width: 100%;
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[3]};
  }
`;

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <Title>Log In</Title>
      <ButtonItems>
        <ButtonItem>
          <SocialButton provider="Google" />
        </ButtonItem>
        <ButtonItem>
          <SocialButton provider="Github" />
        </ButtonItem>
        <ButtonItem>
          <SocialButton provider="Facebook" />
        </ButtonItem>
      </ButtonItems>
    </LoginFormWrapper>
  );
};

export default LoginForm;