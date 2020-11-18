import React from "react";
import styled from "styled-components";
import SocialButton from "components/home/SocialButton";

const LoginFormWrapper = styled.div`
  width: 480px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes[5]};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.whiteColor};
  margin-bottom: ${(props) => props.theme.space[5]};
`;

const ButtonItems = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ButtonItem = styled.li`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[3]};
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
