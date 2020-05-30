import styled from 'styled-components';
import React from 'react';
import { LargeButton } from '../elements/Buttons';
import { Link } from "gatsby";

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
    </Nav>
);

export default Navigation;