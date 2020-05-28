import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '../utils/theme';
import backgroundCover from './bg-t.png';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

    *, *::before, *::after {box-sizing: border-box;}
    html, body {
        min-height: 100vh;
        margin: 0;
    }

    body {
        font-family: ${({theme}) => theme.font.family};
        font-size: ${({theme}) => theme.font.regularTextSize};
        color: ${({theme}) => theme.colors.dark};

        background-color: ${(props) => props.atHome ? theme.colors.yellow : theme.colors.lightyellow};
        background-image: url(${backgroundCover});
        background-repeat: repeat;
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
    svg.icons-waterfall {fill: ${({theme}) => theme.colors.dark}}
`;

const Layout = ({children, atHome}) => (
    <ThemeProvider theme={theme}>
    <>
        <GlobalStyle atHome={atHome} />
        {children}
    </>
    </ThemeProvider>
);

export default Layout;