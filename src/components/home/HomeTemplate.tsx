import React from 'react';
import { Redirect } from 'react-router-dom';
import LandingTemplate from 'components/home/LandingTemplate';
import LoginForm from 'components/home/LoginForm';
import useUserState from 'lib/hooks/redux/user/useUserState';

const HomeTemplate = () => {
  const userState = useUserState();

  // logged in or not
  return userState?.user ? <Redirect to="/todos" /> : <LandingTemplate loginForm={<LoginForm />} />;
};

export default HomeTemplate;
