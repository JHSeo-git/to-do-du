import React from 'react';
import styled from 'styled-components';
import SocialButton from 'components/home/SocialButton';
import logo from 'static/images/logo.svg';

const LoginFormWrapper = styled.div`
  width: 480px;
  background: ${(props) => props.theme.whiteColor};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[4]} 0;
  border-bottom: 1px solid ${(props) => props.theme.grayLightColor};
`;

const LogoImg = styled.img`
  height: 5rem;
  width: 5rem;
`;

const ButtonItems = styled.ul`
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
      <Title>
        <LogoImg alt="Logo Image" src={logo} />
      </Title>
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
