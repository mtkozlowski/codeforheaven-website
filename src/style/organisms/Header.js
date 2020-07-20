import React from 'react';
import styled from 'styled-components';

import { H1 } from '../atoms/Headings';
import Navigation from '../molecules/Navigation';
import ResettedLink from '../atoms/ResettedLink';

const StyledHeader = styled.header`
    width: ${({theme}) => theme.regularSection};
    max-width: 100%;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 0;

    ${({theme}) => theme.media.regularSection} {
        padding: 0 0.5rem;
    }
`;

const HeaderTagline = styled.p`
    font-family: ${({theme}) => theme.font.secondaryFamily};
    margin-top: -40px;
`;

const Header = () => (
    <StyledHeader>
        <div>
        <H1>
            <ResettedLink to={'/'}>Code for Heaven</ResettedLink>
        </H1>
        <HeaderTagline>
            Frontend Dev on his way to UX.
        </HeaderTagline>
        </div>
        <Navigation/>
    </StyledHeader>
)

export default Header;