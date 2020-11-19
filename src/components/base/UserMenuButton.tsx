import React from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import useUserState from "lib/hooks/redux/user/useUserState";
import useLogout from "lib/hooks/redux/user/useLogout";

const UserMenuButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CaretDownIcon = styled(FaCaretDown)`
  transition: opacity 0.2s ease-in-out;
  opacity: 0.5;
`;

const ButtonText = styled.span`
  font-size: ${(props) => props.theme.fontSizes[2]};
  color: inherit;
  margin-right: ${(props) => props.theme.space[1]};
`;

const Button = styled.button`
  color: ${(props) => props.theme.blackColor};
  display: flex;
  align-items: center;
  &:hover ${CaretDownIcon} {
    opacity: 1;
  }
`;

const UserMenuButton = () => {
  const userState = useUserState();
  const logout = useLogout();

  const onLogout = () => {
    logout();
  };
  return (
    <UserMenuButtonWrapper>
      {userState.user && (
        <Button onClick={onLogout}>
          <ButtonText>Log out</ButtonText>
          <CaretDownIcon />
        </Button>
      )}
    </UserMenuButtonWrapper>
  );
};

export default UserMenuButton;
