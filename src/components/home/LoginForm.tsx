import React from 'react';
import styled from 'styled-components';
import SocialButton from 'components/common/Button';
import logo from 'static/images/logo.svg';
import useSocialLogin from 'lib/hooks/redux/auth/useSocialLogin';

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
  padding: ${(props) => props.theme.space[4]};
`;

const ButtonItem = styled.li`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[2]};
  }
`;

const LoginForm = () => {
  const socialLogin = useSocialLogin();

  const onSocialClick = (provider: string) => {
    socialLogin(provider);
  };

  return (
    <LoginFormWrapper>
      <Title>
        <LogoImg alt="Logo Image" src={logo} />
      </Title>
      <ButtonItems>
        <ButtonItem>
          <SocialButton
            provider="GOOGLE"
            onSocialClick={() => onSocialClick('Google')}
          >
            Google
          </SocialButton>
        </ButtonItem>
        <ButtonItem>
          <SocialButton
            provider="GITHUB"
            onSocialClick={() => onSocialClick('Github')}
          >
            Github
          </SocialButton>
        </ButtonItem>
        <ButtonItem>
          <SocialButton
            provider="FACEBOOK"
            onSocialClick={() => onSocialClick('Facebook')}
          >
            Facebook
          </SocialButton>
        </ButtonItem>
      </ButtonItems>
    </LoginFormWrapper>
  );
};

export default LoginForm;
