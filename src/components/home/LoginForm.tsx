import React from 'react';
import styled from 'styled-components';
import SocialButton from 'components/home/SocialButton';

const LoginFormWrapper = styled.div`
  width: 480px;
  background: ${(props) => props.theme.primaryColor};
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes[9]};
  font-weight: 700;
  color: ${(props) => props.theme.whiteColor};
  padding: ${(props) => props.theme.space[6]} 0;
`;

const ButtonItems = styled.ul`
  background: ${(props) => props.theme.whiteColor};
  padding: ${(props) => props.theme.space[2]};
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
