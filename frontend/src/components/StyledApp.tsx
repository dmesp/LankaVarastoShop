'use client';

import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useTheme } from 'styled-components';
import DesktopHeader from "./HeaderComponents/DesktopHeader";
import MobileHeader from "./HeaderComponents/MobileHeaderComponents/MobileHeader";
import DesktopHomePage from "./MainComponents/DesktopHomePage"
import MobileHomePage from "./MainComponents/MobileHomePage"

import DesktopFooter from './FooterComponents/DesktopFooter';
import MobileFooter from './FooterComponents/MobileFooter';

const AppContainer = styled.div`
  transition: ${({ theme }) => theme.colorChangeAnimation};
`;

const StyledApp = () => {
  const theme = useTheme();
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false); // Начальное состояние без использования window

  useEffect(() => {
    const updateMedia = () => {
      setIsWideScreen(window.innerWidth >= parseInt(theme.breakpoints.wideScreen));
      setIsMobileScreen(window.innerWidth >= parseInt(theme.breakpoints.mobileScreen));
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <AppContainer>
      {isMobileScreen ? <DesktopHeader /> : <MobileHeader />}
      {isWideScreen ? <DesktopHomePage /> : <MobileHomePage />}
      {isMobileScreen ? <DesktopFooter /> : <MobileFooter />}
    </AppContainer>
  );
};

export default StyledApp;