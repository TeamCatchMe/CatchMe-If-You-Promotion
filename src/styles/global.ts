import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: "BMJUA";
        src: url("../assets/font/BMJUA_otf.otf");
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
        font-family: 'Spoqa Han Sans Neo'
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
        font: inherit;
        line-height: normal;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        -webkit-appearance: none;
    }
`;
