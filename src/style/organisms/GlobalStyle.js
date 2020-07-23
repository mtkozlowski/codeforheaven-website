import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    ${({ theme }) => theme.font.import};

    *, *::before, *::after {box-sizing: border-box;}

    h1, h2, h3, h4, h5, h6, p, a {margin: 0;
        * + & {margin-top: 1em}
    }

    html, body {
        min-height: 100vh;
        margin: 0;
        font-family: ${({ theme }) => theme.font.primaryFamily};
        font-size: ${({ theme }) => theme.font.regularTextSize};
        color: ${({ theme }) => theme.colors.dark};
    }

    body {
        padding-top: 1px;
        padding-bottom: 10rem;
    }

    pre {
        @media(max-width: ${({ theme }) => theme.responsive.mobile}) {
            overflow-x: scroll !important;
            max-width: 100%;
        }
    }

    img {
        max-width: 100%;
    }

    .gatsby-highlight {
        @media(max-width: ${({ theme }) => theme.responsive.mobile}) {
            max-width: 100%;
        }
    }
`

export default GlobalStyle
