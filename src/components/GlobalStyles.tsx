import { createGlobalStyle } from "styled-components";
import mainCss from "../assets/main.css";

const GlobalStyles = createGlobalStyle`
  ${mainCss}
  body {
    color: #222;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,"Helvetica Neue",Arial,sans-serif;
    font-weight: 400;
    line-height: 1.5em;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
