import React from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

const SidebarWrapper = styled.div`
  height: 100%;
  background: ${(props) => props.theme.primaryLightColor};
`;

const MenuWrapper = styled.div`
  padding: ${(props) => props.theme.space[2]};
`;

const MenuIcon = styled.i`
  display: inline-block;
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

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <MenuWrapper>
        <MenuIcon>
          <FiMenu />
        </MenuIcon>
      </MenuWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
