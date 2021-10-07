import { createGlobalStyle } from "styled-components";

// ----------------------------------------------------------------------

const GlobalStyles = createGlobalStyle`
* {
      margin: 0;
      padding: 0;
      box-sizing: 'border-box';
    }
    html {
      width: '100%';
      height: '100%';
      -ms-text-size-adjust: '100%';
      -webkit-overflow-scrolling: 'touch';
    }
    body {
      width: '100%';
      height: '100%';
    }
    #root {
      width: '100%';
      height: '100%';
    }
    input {
      &[type=number] {
        -moz-appearance: 'textfield',
      }
    }
    a {
      text-decoration: none;
      text-transform: none;
      color: inherit;
    }
    img { 
        display: 'block'; 
        max-width: '100%' 
    };
`;

export default GlobalStyles;
