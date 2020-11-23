import React from "react";
import styled from "styled-components";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import useUserState from "lib/hooks/redux/user/useUserState";

interface Props {
  id: string;
  title: string;
  content?: string;
  done: boolean;
  userId: string;
}

const TodoWrapper = styled.div`
  padding: ${(props) => props.theme.space[2]} 0;
  flex: 1;
  display: flex;
  align-items: center;
`;

const RegIcon = styled(FaRegCircle)`
  color: ${(props) => props.theme.primaryColor};
`;

const RegCheckIcon = styled(FaRegCheckCircle)`
  color: ${(props) => props.theme.primaryDarkColor};
`;

const TodoTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin-left: ${(props) => props.theme.space[2]};
`;

const Todo = ({ id, title, content, done, userId }: Props) => {
  const userState = useUserState();

  return (
    <TodoWrapper>
      {done ? <RegCheckIcon /> : <RegIcon />}
      <TodoTitle>{title}</TodoTitle>
      {userId === userState.user?.uid && <div>✅ 내꺼</div>}
    </TodoWrapper>
  );
};

export default Todo;
