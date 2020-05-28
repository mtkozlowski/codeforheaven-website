import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from '../utils/theme';
import GlobalStyle from './GlobalStyle';
import Navigation from '../components/Navigation';
import Cloud from '../components/Cloud';

const Main = styled.main`
    margin-top: 10rem;
`;

const Layout = ({children, atHome}) => (
    <ThemeProvider theme={theme}>
    <>
        <GlobalStyle atHome={atHome} />
        <Navigation atHome={atHome}/>
            <Main>
                {children}
            </Main>
        <Cloud atHome={atHome} />
    </>
    </ThemeProvider>
);

export default Layout;