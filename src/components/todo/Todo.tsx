import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  content?: string;
}

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Todo = ({ title, content }: Props) => {
  return (
    <TodoWrapper>
      {title}-{content}
    </TodoWrapper>
  );
};

export default Todo;
