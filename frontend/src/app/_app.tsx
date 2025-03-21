// app.tsx
'use client';

import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/globalstyle';
import { themes, ThemeNames } from '@/styles/themes';
import { LanguageProvider } from '@/contexts/LanguageContext';
import StyledApp from '@/components/StyledApp'; 


const App = () => {
  const [theme, setTheme] = useState(themes[ThemeNames.LIGHT]);

  const changeThemeColor = (color: string) => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', color);
    }
  };
  
  useEffect(() => {
    const getUserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? ThemeNames.DARK
      : ThemeNames.LIGHT;
  
    setTheme(themes[getUserTheme]);
  }, []);
  
  useEffect(() => {
    if (theme) {
      changeThemeColor(theme.appBgColor);
    }
  }, [theme]);
  
  const themeToggler = (selectedTheme: ThemeNames) => {
    setTheme(themes[selectedTheme]);
  };
  
  return (
    <>
        <ThemeProvider theme={theme}>
          <LanguageProvider>
            <GlobalStyles />
            <StyledApp themeToggler={themeToggler} />
          </LanguageProvider>
        </ThemeProvider>
    </>
  );
};

export default App;
