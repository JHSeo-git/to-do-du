import React from "react";
import styled, { keyframes } from "styled-components";
import UserMenuItem from "components/base/UserMenuItem";
import useBaseState from "lib/hooks/redux/base/useBaseState";
import useLogout from "lib/hooks/redux/user/useLogout";

const animation = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Inner = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 2rem);
  opacity: 0;
  background: ${(props) => props.theme.whiteColor};
  z-index: ${(props) => props.theme.zIndex.menu};
  animation: ${animation} 0.5s linear forwards;
`;

const MenuItems = styled.ul`
  min-width: 12rem;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
`;

const MenuItem = styled.li``;

const UserMenu = () => {
  const baseState = useBaseState();
  const logout = useLogout();

  return (
    <>
      {baseState.userMenu ? (
        <UserMenuWrapper>
          <Inner>
            <MenuItems>
              <MenuItem>
                <UserMenuItem>새로운 To-du</UserMenuItem>
              </MenuItem>
              <MenuItem>
                <UserMenuItem>임시 To-du</UserMenuItem>
              </MenuItem>
              <MenuItem>
                <UserMenuItem>설정</UserMenuItem>
              </MenuItem>
              <MenuItem>
                <UserMenuItem onClick={logout}>로그아웃</UserMenuItem>
              </MenuItem>
            </MenuItems>
          </Inner>
        </UserMenuWrapper>
      ) : null}
    </>
  );
};

export default UserMenu;
