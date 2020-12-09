import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaTasks, FaRegLightbulb } from 'react-icons/fa';
import useTodoState from 'lib/hooks/redux/todos/useTodoState';

const MenuNav = styled.nav``;

const MenuItems = styled.ul``;

const MenuItem = styled.li``;

const MenuLink = styled(Link)<{ $current: boolean }>`
  display: block;
  padding: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[3]};
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes[2]};
  user-select: none;
  ${(props) =>
    props.$current &&
    css`
      background: ${(props) => props.theme.secondaryColor};
      color: ${(props) => props.theme.whiteColor};
      font-weight: 500;
    `};
`;

const MenuIcon = styled.i`
  color: inherit;
  font-weight: inherit;
  font-size: ${(props) => props.theme.fontSizes[4]};
  padding-right: ${(props) => props.theme.space[1]};
`;

const LinkText = styled.span`
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  white-space: nowrap;
  overflow: hidden;
  margin-right: ${(props) => props.theme.space[1]};
`;

const CountText = styled.span`
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  margin-left: auto;
  font-size: ${(props) => props.theme.fontSizes[2]};
`;

const SidebarMenu = () => {
  const location = useLocation();
  const todoState = useTodoState();
  return (
    <MenuNav>
      <MenuItems>
        <MenuItem>
          <MenuLink to="/todos" $current={location.pathname === '/todos'}>
            <MenuIcon>
              <FaTasks />
            </MenuIcon>
            <LinkText>Todo</LinkText>
            <CountText>
              {todoState?.todos.length > 0 && todoState?.todos.length}
            </CountText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink
            to="/todos/today"
            $current={location.pathname === '/todos/today'}
          >
            <MenuIcon>
              <FaRegLightbulb />
            </MenuIcon>
            <LinkText>오늘 할 일</LinkText>
          </MenuLink>
        </MenuItem>
      </MenuItems>
    </MenuNav>
  );
};

export default SidebarMenu;
