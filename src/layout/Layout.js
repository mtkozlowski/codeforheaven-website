import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from '../utils/theme';
import GlobalStyle from './GlobalStyle';
import Navigation from '../components/Navigation';
import Cloud from '../components/Cloud';
import Header from '../components/Header';
import Logo from '../components/Logo';

const Main = styled.main`
    margin-top: 8rem;

    ${({ theme }) => theme.media.phone} {
        margin-top: 2rem;
    }
`;

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
    <>
        <GlobalStyle/>
        <Header>
            <Logo />
            <Navigation/>
        </Header>
        <Main>
            {children}
        </Main>
        <Cloud />
    </>
    </ThemeProvider>
);

export const HomepageLayout = ({ children }) => (
    <ThemeProvider theme={theme}>
    <>
        <GlobalStyle/>
        <Header  atHome={true} >
            <Logo atHome={true} />
            <Navigation atHome={true}/>
        </Header>
        <Main>
            {children}
        </Main>
    </>
    </ThemeProvider>
);

export default Layout;