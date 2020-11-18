import React from "react";
import useTodoState from "lib/hooks/redux/todos/useTodoState";

const TodoList = () => {
  const todos = useTodoState();
  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
