import React from "react";
import styled from "styled-components";

const TodoDetailWrapper = styled.div`
  background: lightblue;
`;

const TodoTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes[6]};
  padding: ${(props) => props.theme.space[2]};
`;

const TodoDetail = () => {
  return (
    <TodoDetailWrapper>
      <TodoTitle>투두두 타이틀</TodoTitle>
    </TodoDetailWrapper>
  );
};

export default TodoDetail;
