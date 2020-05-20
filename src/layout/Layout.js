import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '../utils/theme';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700&display=swap&subset=latin-ext');

    *, *::before, *::after {box-sizing: border-box;}

    body {
        font-family: ${({theme}) => theme.font.family};
        font-size: ${({theme}) => theme.font.regularTextSize};
        color: ${({theme}) => theme.colors.black};
        height: 100vh;
        margin: 0;
        background-color: #0C43AA;
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
    svg.icons-waterfall {fill: ${({theme}) => theme.colors.dark}}
`;

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle/>
    {/* <MainWrapper> */}
        {children}
    {/* </MainWrapper> */}
    </>
    </ThemeProvider>
);

export default Layout;