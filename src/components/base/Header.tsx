import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  userMenu: React.ReactNode;
}

const HeaderWrapper = styled.header`
  height: 4rem;
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.grayLightColor};
`;

const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  margin-right: ${(props) => props.theme.space[3]};
`;

const LogoText = styled.span`
  color: ${(props) => props.theme.blackColor};
`;

const MenuNav = styled.nav`
  display: flex;
  align-items: center;
`;

const MenuLink = styled(Link)`
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[2]};
  }
`;

const Header = ({ userMenu }: Props) => {
  return (
    <HeaderWrapper>
      <HeaderColumn>
        <Logo to="/">
          Logo <LogoText>Logo</LogoText>
        </Logo>
        <MenuNav>
          <MenuLink to="/">A Menu</MenuLink>
          <MenuLink to="/">B Menu</MenuLink>
          <MenuLink to="/">C Menu</MenuLink>
        </MenuNav>
      </HeaderColumn>
      <HeaderColumn>{userMenu}</HeaderColumn>
    </HeaderWrapper>
  );
};

export default Header;
