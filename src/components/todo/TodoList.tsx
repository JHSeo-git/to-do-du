import React from "react";
import useTodos from "hooks/redux/useTodos";

const TodoList = () => {
  const todos = useTodos();
  console.log(todos);
  return (
    <ul>
      {todos?.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
