import React from 'react';
import styled, {ThemeProvider, css} from 'styled-components';
import {theme} from '../utils/theme';
import GlobalStyle from './GlobalStyle';
import Navigation from '../components/Navigation';
import Cloud from '../components/Cloud';
import Header from '../components/Header';
import Logo from '../components/Logo';
import {H1} from '../components/typography/Headings';

const Main = styled.main`
    margin-top: 8rem;

    ${({ theme }) => theme.media.phone} {
        margin-top: 2rem;
    }
`;

const H1Styles = css`
    margin-top: 5rem;
    text-shadow: 0px 0px 3px #666;
    line-height: 1.2;
    /* color: ${({theme}) => theme.colors.darkestblue} */
    ${({ theme }) => theme.media.tablet} {
        order: 3;
        margin-top: 1rem;
    }
    ${({ theme }) => theme.media.phone} {
        font-size: 2rem;
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
            <H1 css={H1Styles}>Welcome to my Code&nbsp;&&nbsp;Design Journal</H1>
            <Navigation atHome={true}/>
        </Header>
        <Main>
            {children}
        </Main>
    </>
    </ThemeProvider>
);

export default Layout;