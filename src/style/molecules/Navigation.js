import React from 'react';
import styled from 'styled-components';

import StyledLink from '../atoms/StyledLink';

const Nav = styled.nav`
    ${({theme}) => theme.media.phone} {
        margin-top: 0;
    }

    ${({theme}) => theme.media.tablet} {
        margin-top: 0;
    }
`;

const Navigation = ({ atHome }) => (
    <Nav atHome={atHome} >
        {/* <StyledLink to="/blog" >Blog</StyledLink> */}
        {/* <LargeButton as={Link} to="/bookmarks" >Bookmarks</LargeButton> */}
    </Nav>
);

export default Navigation;