import React from "react";
import styled from "styled-components";

interface Props {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  detailbar: React.ReactNode;
  children: React.ReactNode;
}

const MainWrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 200px; // TODO: refactor width
  height: 100vh;
  overflow-y: auto;
  background: red;
`;
const Right = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  min-width: 100px; // TODO: refactor width
`;

const MainTemplate = ({ header, sidebar, detailbar, children }: Props) => {
  return (
    <MainWrapper>
      <Left>{sidebar}</Left>
      <Right>
        <Content>
          {header}
          {children}
        </Content>
        <Detail>{detailbar}</Detail>
      </Right>
    </MainWrapper>
  );
};

export default MainTemplate;
