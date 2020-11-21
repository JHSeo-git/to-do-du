import React from "react";
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
      <Inner>{loginForm}</Inner>
    </LandingWrapper>
  );
};

export default LandingTemplate;
