import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  :root {
    --background: #171923;

    --primary: #89CFF0;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {        
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;