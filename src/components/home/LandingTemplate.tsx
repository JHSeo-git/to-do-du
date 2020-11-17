import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";

const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  margin-top: ${(props) => props.theme.space[8]};
  padding: ${(props) => props.theme.space[5]};
  background: ${(props) => props.theme.grayDarkColor};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes[5]};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.whiteColor};
`;

const LandingTemplate = () => {
  return (
    <LandingWrapper>
      <Inner>
        <Title>Login With</Title>
        <LoginForm />
      </Inner>
    </LandingWrapper>
  );
};

export default LandingTemplate;
