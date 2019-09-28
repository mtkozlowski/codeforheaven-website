import React from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '../utils/theme';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700&display=swap&subset=latin-ext');

    *, *::before, *::after {box-sizing: border-box;}

    body {
        font-family: ${({theme}) => theme.font.family};
        color: ${({theme}) => theme.colors.headerText};
        height: 100vh;
        margin: 0;
    }
`;

const H1 = styled.h1`
    margin-bottom: 1em;
    margin-top: -1em;
    font-size: 5em;
`;

const MainWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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