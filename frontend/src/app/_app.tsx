// app.tsx
'use client';

import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalstyle';
import { LanguageProvider } from '../contexts/LanguageContext';
import { themes, ThemeNames } from '../styles/themes';
import StyledApp from '@/components/StyledApp'; 


const App = () => {
  const [theme, setTheme] = useState(themes[ThemeNames.LIGHT]);

  const changeThemeColor = (color: string) => {
    console.log("ывфывфы")
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', color);
    }
  };
  
    useEffect(() => {
      // Здесь выполняется логика выбора темы по умолчанию на основе предпочтений пользователя
      const getUserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  
      if (getUserTheme === 'light') {
        setTheme(themes[ThemeNames.LIGHT]);
      } else if (getUserTheme === 'dark') {
        setTheme(themes[ThemeNames.DARK]);
      } else {
        setTheme(themes[ThemeNames.LIGHT]);
      }

			changeThemeColor(theme.appBgColor);

    }, []);
  
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
