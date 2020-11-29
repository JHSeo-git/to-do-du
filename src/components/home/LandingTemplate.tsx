import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

interface Props {
  loginForm: React.ReactNode;
}

const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  margin-top: ${(props) => props.theme.space[8]};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const LandingTemplate = ({ loginForm }: Props) => {
  return (
    <LandingWrapper>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <Inner>{loginForm}</Inner>
    </LandingWrapper>
  );
};

export default LandingTemplate;
