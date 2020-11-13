import React from "react";
import styled from "styled-components";

interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

const PageTemplateWrapper = styled.div``;

const PageTemplate = ({ header, children }: Props) => {
  return (
    <PageTemplateWrapper>
      {header}
      <main>{children}</main>
    </PageTemplateWrapper>
  );
};

export default PageTemplate;
