import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        min-height: 100vh;
        background-color: #1c1c1c;
        display: flex;
        justify-content: center
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
`;
