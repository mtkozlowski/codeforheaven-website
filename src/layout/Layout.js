import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '../utils/theme';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700&display=swap&subset=latin-ext');

    *, *::before, *::after {box-sizing: border-box;}

    body {
        font-family: ${({theme}) => theme.font.family};
        font-size: ${({theme}) => theme.font.regularTextSize};
        color: ${({theme}) => theme.colors.headerText};
        height: 100vh;
        margin: 0;

        @media(max-width: ${({theme}) => theme.responsive.mobile}) {
            font-size: 22px;
        }
    }
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