import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const PageTemplateWrapper = styled.div``;

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateWrapper>
      <main>{children}</main>
    </PageTemplateWrapper>
  );
};

export default PageTemplate;
