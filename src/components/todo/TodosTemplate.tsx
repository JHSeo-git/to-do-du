import React from "react";
import styled from "styled-components";

interface Props {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  detailbar: React.ReactNode;
  children: React.ReactNode;
}

const TodosTemplateWrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
`;

const Detail = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
`;

const TodosTemplate = ({ header, sidebar, detailbar, children }: Props) => {
  return (
    <TodosTemplateWrapper>
      <Left>{sidebar}</Left>
      <Right>
        <Content>
          {header}
          {children}
        </Content>
        <Detail>{detailbar}</Detail>
      </Right>
    </TodosTemplateWrapper>
  );
};

export default TodosTemplate;
