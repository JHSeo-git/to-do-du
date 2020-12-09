import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props extends React.HTMLProps<HTMLDivElement> {
  to?: string | null;
  children: React.ReactNode;
}

const defaultMenuStyle = css`
  padding: ${(props) => props.theme.space[3]};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.grayLightColor};
  }
`;

const MenuLink = styled(Link)`
  ${defaultMenuStyle}
`;

const MenuWrapper = styled.div`
  ${defaultMenuStyle}
`;

const UserMenuItem = ({ to, children, onClick }: Props) => {
  return (
    <>
      {to ? (
        <MenuLink to={to}>{children}</MenuLink>
      ) : (
        <MenuWrapper onClick={onClick}>{children}</MenuWrapper>
      )}
    </>
  );
};

export default UserMenuItem;
