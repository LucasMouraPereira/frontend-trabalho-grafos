import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root {
    --color-white-1: #ffffff;
    --color-black-1: #242424;
    --color-gray-3: #333333;
    --color-gray-7: #666666;
 }
 * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  html, body {
    margin: auto;
    scroll-behavior: smooth;
    font-family: 'Suvinil Sans', sans-serif;
  }
  a{
    text-decoration:none;
    color:unset;
  }

  .old-popup h1 {
    margin: 16px 0 23px;
    color: var(--color-gray-3);
    font-size: 24px;
    line-height: 26px;
    font-family: "Trebuchet MS", sans-serif;
  }

  .old-popup p {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    font-family: "Trebuchet MS", sans-serif;
    color: var(--color-gray-7);
  }

  .swal2-icon-show {
    border: none !important;
    margin: 0 !important;
  }

`;

export default GlobalStyle;