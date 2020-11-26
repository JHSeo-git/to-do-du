import React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { FaRegCircle, FaRegCheckCircle, FaMinusCircle } from "react-icons/fa";
import moment from "moment";
import useUserState from "lib/hooks/redux/user/useUserState";
import { Todo as TodoProps } from "store/modules/todos";
import useDeleteTodo from "lib/hooks/redux/todos/useDeleteTodo";

const TodoWrapper = styled.div`
  padding: ${(props) => props.theme.space[2]} 0;
  display: flex;
  align-items: center;
`;

const RegIcon = styled(FaRegCircle)`
  color: ${(props) => props.theme.primaryColor};
`;

const RegCheckIcon = styled(FaRegCheckCircle)`
  color: ${(props) => props.theme.primaryDarkColor};
`;

const DeleteIcon = styled(FaMinusCircle)`
  color: ${(props) => props.theme.alertColor};
  margin-right: ${(props) => props.theme.space[0]};
  cursor: pointer;
  &:hover {
    color: ${(props) => lighten(0.1, props.theme.alertColor)};
  }
  &:active {
    color: ${(props) => darken(0.1, props.theme.alertColor)};
  }
`;

const TodoContentWrapper = styled.div`
  margin-left: ${(props) => props.theme.space[2]};
  display: flex;
  flex-direction: column;
`;

const TodoTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes[3]};
`;

const TodoContent = styled.span`
  margin-top: ${(props) => props.theme.space[1]};
  font-size: ${(props) => props.theme.fontSizes[2]};
`;

const Todo = ({ id, title, content, done, userId, createdAt }: TodoProps) => {
  const userState = useUserState();
  const deleteTodo = useDeleteTodo();

  const onClick = () => {
    deleteTodo(id);
  };

  return (
    <TodoWrapper>
      {userId === userState.user?.uid && (
        <DeleteIcon onClick={onClick} size="20" />
      )}
      {done ? <RegCheckIcon size="20" /> : <RegIcon size="20" />}
      <TodoContentWrapper>
        <TodoTitle>
          {title}/{id}
        </TodoTitle>
        <TodoContent>
          {moment(createdAt).format("yyyy.MM.DD HH:mm:ss.SSS")}
        </TodoContent>
      </TodoContentWrapper>
    </TodoWrapper>
  );
};

export default Todo;
