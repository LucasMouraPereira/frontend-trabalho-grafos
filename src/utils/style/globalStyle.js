import { createGlobalStyle } from "styled-components";
import Nixmat from "../fonts/Nixmat/Nixmat.ttf";
import PoppinsLight from "../fonts/Poppins/Poppins-Light.ttf";
import PoppinsRegular from "../fonts/Poppins/Poppins-Regular.ttf";
import PoppinsMedium from "../fonts/Poppins/Poppins-Medium.ttf";
import PoppinsBold from "../fonts/Poppins/Poppins-SemiBold.ttf";


const GlobalStyle = createGlobalStyle`
 :root {
    --color-white-1: #ffffff;
    --color-white-2: #FAFAFA;
    --color-black-1: #242424;
    --color-gray-1: #F1F3FF;
    --color-gray-3: #333333;
    --color-gray-7: #666666;
    --color-green-1: #3CD3C1;
    --color-blue-1: #06092B;  
    --color-pink-1: #F231A5;
    --color-pink-2: #F062C0;
    --color-red-1: #F23131;
    --color-red-2: #FF5F5F;
  }
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Nixmat';
    font-style: normal;
    font-weight: 300;
    src: url(${Nixmat}) format("truetype");
  }
  @font-face {
    font-family: 'PoppinsLight';
    font-style: normal;
    font-weight: 300;
    src: url(${PoppinsLight}) format("truetype");
  }
  @font-face {
    font-family: 'PoppinsRegular';
    font-style: normal;
    font-weight: 400;
    src: url(${PoppinsRegular}) format("truetype");
  }
  @font-face {
    font-family: 'PoppinsMedium';
    font-style: normal;
    font-weight: 500;
    src: url(${PoppinsMedium}) format("truetype");
  }
  @font-face {
    font-family: 'PoppinsBold';
    font-style: bold;
    font-weight: 600;
    src: url(${PoppinsBold}) format("truetype");
  }
  html, body {
    margin: auto;
    scroll-behavior: smooth;
    font-family: 'PoppinsLight', sans-serif;
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
    font-family: 'PoppinsBold', sans-serif;
  }

  .old-popup p {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    font-family: "PoppinsRegular", sans-serif;
    color: var(--color-gray-7);
  }

  .swal2-icon-show {
    border: none !important;
    margin: 0 !important;
  }
`;

export default GlobalStyle;