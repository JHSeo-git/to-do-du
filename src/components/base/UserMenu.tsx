import React from "react";
import styled from "styled-components";
import useUserState from "lib/hooks/redux/user/useUserState";
import useLogout from "lib/hooks/redux/user/useLogout";

const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const TempLogOutButton = styled.button`
  border-radius: 3px;
  padding: ${(props) => props.theme.space[1]};
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.blackColor};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  }
  &:active {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }
`;

const UserMenu = () => {
  const userState = useUserState();
  const logout = useLogout();

  const onClick = () => {
    logout();
  };
  return (
    <UserMenuWrapper>
      {userState.user && (
        <TempLogOutButton onClick={onClick}>Log out</TempLogOutButton>
      )}
    </UserMenuWrapper>
  );
};

export default UserMenu;
