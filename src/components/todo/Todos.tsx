import React, { useEffect } from "react";
import styled from "styled-components";
import useTodoState from "lib/hooks/redux/todos/useTodoState";
import Todo from "components/todo/Todo";
import NewTodo from "components/todo/NewTodo";
import useSyncTodos from "lib/hooks/redux/todos/useSyncTodos";
import useUserState from "lib/hooks/redux/user/useUserState";

const TodosWrapper = styled.div`
  background: ${(props) => props.theme.whiteColor};
  padding: 0 ${(props) => props.theme.space[2]};
  position: relative;
`;

const TodoItems = styled.ul`
  background: ${(props) => props.theme.whiteColor};
  overflow-y: auto;
`;

const TodoItem = styled.li``;

const Todos = () => {
  const userState = useUserState();
  const todoState = useTodoState();
  const syncTodos = useSyncTodos();

  // TODO: refactoring
  useEffect(() => {
    if (!userState.user || !userState.user.uid) return;
    syncTodos(userState.user.uid);
  }, [userState.user, syncTodos]);

  return (
    <TodosWrapper>
      <NewTodo />
      <TodoItems>
        {todoState.todos &&
          todoState.todos.map((todo) => (
            <TodoItem key={todo.id}>
              <Todo
                {...todo}
                isSelected={todoState.selectedTodo?.id === todo.id}
              />
            </TodoItem>
          ))}
      </TodoItems>
    </TodosWrapper>
  );
};

export default Todos;
