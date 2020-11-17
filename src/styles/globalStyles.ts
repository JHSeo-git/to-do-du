import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`    
    ${reset}    
    * {
    	margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        height: 100vh;
        margin: 0;
        padding: 0;
        color: ${({ theme }: { theme: any }) => theme.textColor};
        font-family: 'Noto Sans KR', sans-serif;
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
        font-family: inherit;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;
