const colorChangeAnimation = "all 0.15s ease;"
const popupWindowAnimation = "all 0.4s linear;"

const breakpoints = {
  mobileScreen: '830px',
  wideScreen: '1624px',
};

export const lightTheme = {
    appBgColor: "rgba(226,203,176)",
    appBgColor60: "rgba(226,203,176, 0.6)",
    appBgColor70: "rgba(226,203,176, 0.7)",
    appBgColor50: "rgba(226,203,176, 0.5)",
    secBgColor: "green",
    appTextColor: "rgba(00,00,00)",
    secTextColor: "rgba(75,59,66)",
    accentColor100: "green",
    accentColor20: "green",
    accentColor50: "green",
    accentColor70: "green",
    buttonColor: "green",
    clickedColor: "#00a800",
    separatorColor:"green",
    colorChangeAnimation: colorChangeAnimation,
    popupWindowAnimation: popupWindowAnimation,
    breakpoints,
};
    
export const darkTheme = {
    appBgColor: "rgba(226,203,176)",
    appBgColor60: "rgba(226,203,176, 0.6)",
    appBgColor70: "rgba(226,203,176, 0.7)",
    appBgColor50: "rgba(226,203,176, 0.5)",
    secBgColor: "green",
    appTextColor: "rgba(00,00,00)",
    secTextColor: "rgba(75,59,66)",
    accentColor100: "green",
    accentColor20: "green",
    accentColor50: "green",
    accentColor70: "green",
    buttonColor: "green",
    clickedColor: "#00a800",
    separatorColor:"green",
    colorChangeAnimation: colorChangeAnimation,
    popupWindowAnimation: popupWindowAnimation,
    breakpoints,
  };
  
export enum ThemeNames {
    LIGHT = 'light',
    DARK = 'dark',
}
  
export const themes = {
    [ThemeNames.LIGHT]: lightTheme,
    [ThemeNames.DARK]: darkTheme,
  }