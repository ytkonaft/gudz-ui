import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    font-size: 14px;
    line-height: 1;
    font-family: 'Inter', sans-serif;
    position: relative;
    color:  ${({ theme }) => theme.colors.dark[800]};

    #__next {
      width: 100%;
      height: 100%;
      min-height: 100vh;
    }
  }

  *,
  *::before,
  *::after {
    outline: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

`;

export default GlobalStyles;
