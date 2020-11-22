import React from "react";
import styled from "styled-components";

interface Props {
  content: React.ReactNode;
}

const ContentWrapper = styled.div`
  background: ${(props) => props.theme.grayLightColor};
`;

const ContentTemplate = ({ content }: Props) => {
  return <ContentWrapper>{content}</ContentWrapper>;
};

export default ContentTemplate;
