import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* В дополнение к transparent */
    touch-action: manipulation;
   }

  body {
		height: 100vh;
    margin: 0px;
    padding: 0px;
    border: 0px;
    outline: 0px;
    max-width: 100vw;
    overflow-x: hidden;
    touch-action: pan-y;
    box-sizing: border-box;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* Internet Explorer/Edge */
		font-family: 'Lora', serif;
    font-style: normal;
    font-size: 18px;
  }

  h1 {
    font-weight: 400;    
  }

  p {
    margin: 0;
  }

   .bigger-text {
       font-size: larger;
   }

   .smaller-text {
       font-size: small;
   }

   button {
       all: unset; 
       display: inline-block; 
       cursor: pointer; 
   }

    .lora-font {
        font-family: 'Lora', serif;
    }
    
    .playfair-font {
        font-family: 'Playfair Display', serif;
    }
    
    .playwrite-font {
        font-family: "Updock", serif;
    }
`; 