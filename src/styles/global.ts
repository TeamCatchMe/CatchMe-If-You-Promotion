import { createGlobalStyle } from 'styled-components';
import { resetCss } from './reset';

export const GlobalStyle = createGlobalStyle`
    ${resetCss};
    @font-face {
        font-family: "BMJUA";
        src: url("/static/font/BMJUA_otf.otf");
    }
    @font-face {
        font-family: "Cafe24Ohsquareair";
        src: url("/static/font/Cafe24Ohsquareair.ttf");
    }
    @font-face {
        font-family: "Spoqa Han Sans Neo";
        src: url("/static/font/SpoqaHanSansNeo-Regular.otf");
    }
    body {
        min-height: 100vh;
        background-color: #1c1c1c;
        display: flex;
        justify-content: center;
        @media (min-height: 850px) {
            align-items:center;
        }
    }
    * {
        color: white;
        font-family: 'Spoqa Han Sans Neo';
    }
    #root{
        max-width: 400px;
        width: 100%;
        & > div {
            width: 100%
        }
    }
    a {
        text-decoration-line: none;
    }
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        line-height: normal;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        -webkit-appearance: none;
    }
`;
