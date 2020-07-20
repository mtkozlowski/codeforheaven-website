import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

const Main = styled.main`

    ${({ theme }) => theme.media.phone} {
        margin-top: 2rem;
    }
`;

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
    <>
        <GlobalStyle/>
        <Header />
        <Main>
            {children}
        </Main>
    </>
    </ThemeProvider>
);

export default Layout;