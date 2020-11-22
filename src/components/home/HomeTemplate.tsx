import React from "react";
import Header from "components/base/Header";
import LandingTemplate from "components/home/LandingTemplate";
import LoginForm from "components/home/LoginForm";
import MainTemplate from "components/main/MainTemplate";
import ContentTemplate from "components/main/ContentTemplate";
import Todos from "components/todo/Todos";
import Sidebar from "components/sidebar/Sidebar";
import useUserState from "lib/hooks/redux/user/useUserState";
import TodoDetail from "components/todo/TodoDetail";

const HomeTemplate = () => {
  const userState = useUserState();

  // logged in or not
  return userState?.user ? (
    <MainTemplate
      header={<Header />}
      sidebar={<Sidebar />}
      detailbar={<TodoDetail />}
    >
      <ContentTemplate content={<Todos />} />
    </MainTemplate>
  ) : (
    <LandingTemplate loginForm={<LoginForm />} />
  );
};

export default HomeTemplate;
