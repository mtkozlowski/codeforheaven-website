import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import { LargeButton } from '../atoms/Buttons';

const Nav = styled.nav`
    ${({theme}) => theme.media.phone} {
        margin-top: 0;
    }

    ${({atHome})  => atHome && `
        margin-top: 3rem;
        margin-left: auto;
    `};

    ${({theme}) => theme.media.tablet} {
        margin-top: 0;
    }
`;

const Navigation = ({ atHome }) => (
    <Nav atHome={atHome} >
        <LargeButton as={Link} to="/blog" >Blog</LargeButton>
        {/* <LargeButton as={Link} to="/bookmarks" >Bookmarks</LargeButton> */}
    </Nav>
);

export default Navigation;