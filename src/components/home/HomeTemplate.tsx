import React from "react";
import TodoList from "components/todo/TodoList";
import LandingTemplate from "components/home/LandingTemplate";
import useUserState from "lib/hooks/redux/user/useUserState";

const HomeTemplate = () => {
  const userState = useUserState();
  console.log(userState);

  // logged or not
  return userState.user ? <TodoList /> : <LandingTemplate />;
};

export default HomeTemplate;
