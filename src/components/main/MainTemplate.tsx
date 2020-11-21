import React from "react";
import styled from "styled-components";

interface Props {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const MainWrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 200px;
  height: 100vh;
  background: red;
`;
const Right = styled.div`
  width: 100%;
`;

const MainTemplate = ({ header, sidebar, children }: Props) => {
  return (
    <MainWrapper>
      <Left>{sidebar}</Left>
      <Right>
        {header}
        {children}
      </Right>
    </MainWrapper>
  );
};

export default MainTemplate;
