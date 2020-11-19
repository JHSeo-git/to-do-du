import React, { useRef } from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import useUserState from "lib/hooks/redux/user/useUserState";
import useBaseState from "lib/hooks/redux/base/useBaseState";
import useUserMenu from "lib/hooks/redux/base/useUserMenu";
import useOnClickOutside from "lib/hooks/common/useOnClickOutside";

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
  const baseState = useBaseState();
  const setUserMenu = useUserMenu();

  const ref = useRef(null);

  const onClick = () => {
    if (baseState.userMenu) {
      setUserMenu(false);
    } else {
      setUserMenu(true);
    }
  };

  const handleOnClickOutSide = () => {
    setUserMenu(false);
  };

  useOnClickOutside(ref, handleOnClickOutSide);
  return (
    <UserMenuButtonWrapper>
      {userState.user && (
        <Button onClick={onClick} ref={ref}>
          <ButtonText>Log out</ButtonText>
          <CaretDownIcon />
        </Button>
      )}
    </UserMenuButtonWrapper>
  );
};

export default UserMenuButton;
