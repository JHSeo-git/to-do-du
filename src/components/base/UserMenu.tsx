import React from "react";
import styled from "styled-components";
import UserMenuItem from "./UserMenuItem";

const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Inner = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 2rem);
  background: ${(props) => props.theme.whiteColor};
  z-index: ${(props) => props.theme.zIndex.menu};
`;

const MenuItems = styled.ul`
  min-width: 12rem;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
`;

const MenuItem = styled.li``;

const UserMenu = () => {
  return (
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
            <UserMenuItem>로그아웃</UserMenuItem>
          </MenuItem>
        </MenuItems>
      </Inner>
    </UserMenuWrapper>
  );
};

export default UserMenu;
