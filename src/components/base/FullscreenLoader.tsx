import React from 'react';
import styled from 'styled-components';
import Spinner from 'components/common/Spinner';
import logo from 'static/images/logo.svg';

const FullscreenLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(200, 200, 200, 0.3);
  z-index: ${(props) => props.theme.zIndex.modal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes[11]};
  color: ${(props) => props.theme.primaryColor};
`;

const LogoImg = styled.img`
  height: 8rem;
`;

const FullscreenLoader = () => {
  return (
    <FullscreenLoaderWrapper>
      <LogoImg src={logo} alt="logo" />
      <Spinner />
    </FullscreenLoaderWrapper>
  );
};

export default FullscreenLoader;
