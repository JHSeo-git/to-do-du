import React from "react";
import useTodos from "lib/hooks/redux/todos/useTodos";

const TodoList = () => {
  const todos = useTodos();
  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
