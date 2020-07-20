import React from 'react';
import styled from 'styled-components';

import { H1 } from '../atoms/Headings';
import Navigation from '../molecules/Navigation';

const StyledHeader = styled.header`
    width: ${({theme}) => theme.regularSection};
    max-width: 100%;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 0;
    transition: translate .9s ease-in-out;

    ${({theme}) => theme.media.tablet} {
        padding: 1.6rem 0.8rem;
    }
`;

const HeaderTagline = styled.p`
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    margin-top: -40px;
`;

const Header = () => (
    <StyledHeader>
        <div>
        <H1>Code for Heaven</H1>
        <HeaderTagline>
            Front-end dev on his way to UX.
        </HeaderTagline>
        </div>
        <Navigation/>
    </StyledHeader>
)

export default Header;