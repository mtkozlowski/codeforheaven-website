import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${({theme}) => theme.font.import};

    *, *::before, *::after {box-sizing: border-box;}
    html, body {
        min-height: 100vh;
        margin: 0;
    }

    body {
        font-family: ${({theme}) => theme.font.family};
        font-size: ${({theme}) => theme.font.regularTextSize};
        color: ${({theme}) => theme.colors.dark};

        padding-top: 1px;
    }

    pre {
        @media(max-width: ${({theme}) => theme.responsive.mobile}) {
            overflow-x: scroll !important;
            max-width: 100%;
        }
    }

    .gatsby-highlight {
        @media(max-width: ${({theme}) => theme.responsive.mobile}) {
            max-width: 100%;
        }
    }
`;

export default GlobalStyle;