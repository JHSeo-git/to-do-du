import React from "react";
import styled from "styled-components";

interface Props {
  content?: string;
}

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Todo = ({ content }: Props) => {
  return <TodoWrapper>{content}</TodoWrapper>;
};

export default Todo;
