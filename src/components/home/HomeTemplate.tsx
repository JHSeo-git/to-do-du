import React from "react";
import Header from "components/base/Header";
import LandingTemplate from "components/home/LandingTemplate";
import LoginForm from "components/home/LoginForm";
import MainTemplate from "components/main/MainTemplate";
import TodoList from "components/todo/TodoList";
import Sidebar from "components/sidebar/Sidebar";
import useUserState from "lib/hooks/redux/user/useUserState";

const HomeTemplate = () => {
  const userState = useUserState();

  // logged in or not
  return userState?.user ? (
    <MainTemplate header={<Header />} sidebar={<Sidebar />}>
      <TodoList />
    </MainTemplate>
  ) : (
    <LandingTemplate loginForm={<LoginForm />} />
  );
};

export default HomeTemplate;
