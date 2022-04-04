import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    img {
        vertical-align: middle;
    }
    body {
        font-family: "Apple SD Gothic Neo", "NotoSans", "NotoSansKR", "NanumMyeongjo";
        font-size:14px;
        color:#000;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none
        
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    .clearfix:after {
        content: "";
        display: block;
        clear: both;
    }
`;
export default GlobalStyle;