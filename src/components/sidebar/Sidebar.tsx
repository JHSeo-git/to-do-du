import React from 'react';
import styled, { css } from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import SidebarMenu from 'components/sidebar/SidebarMenu';
import useBaseState from 'lib/hooks/redux/base/useBaseState';
import useToggleSidebar from 'lib/hooks/redux/base/useToggleSidebar';

const SidebarWrapper = styled.div<{ $isExpand: boolean }>`
  height: 100%;
  background: ${(props) => props.theme.primaryLightColor};
  transition: all 0.2s ease;
  ${(props) =>
    props.$isExpand
      ? css`
          width: ${(props) => props.theme.majorSize.sidebarOpenWidth};
        `
      : css`
          width: ${(props) => props.theme.majorSize.sidebarCloseWidth};
        `}
`;

const MenuHeader = styled.div``;

const MenuIcon = styled.i`
  display: inline-block;
  margin: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[0]};
  font-size: ${(props) => props.theme.fontSizes[4]};
  transition: all 0.2s linear;
  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  }
`;

const MenuContent = styled.div``;

const Sidebar = () => {
  const baseState = useBaseState();
  const toggleSidebar = useToggleSidebar();

  const onClick = () => {
    toggleSidebar(!baseState.sidebar);
  };

  return (
    <SidebarWrapper $isExpand={baseState.sidebar}>
      <MenuHeader>
        <MenuIcon onClick={onClick}>
          <FiMenu />
        </MenuIcon>
      </MenuHeader>
      <MenuContent>
        <SidebarMenu />
      </MenuContent>
    </SidebarWrapper>
  );
};

export default Sidebar;
