import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    border: none;
  }

  html, body {
    margin: 0;
    color: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.4;
  }
  
  button {
    cursor: pointer;
  }
`;
