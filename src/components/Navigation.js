import styled from 'styled-components';
import React from 'react';
import {LinkAsButton} from '../elements/Buttons';
import Logo from '../components/Logo';

const Nav = styled.nav`
    width: ${({theme}) => theme.regularSection};
    margin: 2rem auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: translate .9s ease-in-out;

    ${({atHome})  => atHome && `
        transform: translateY(10rem);
        flex-wrap: wrap;

        ${LinkAsButton} {
            margin-top: 3rem;
            margin-left: auto;
            align-self: flex-end;
            font-size: 1.4em;
            padding: 0.3em 1em;
        }
    `};
`;

const Navigation = ({ atHome }) => (
    <Nav atHome={atHome} >
        <Logo  atHome={atHome} />
        <LinkAsButton to="/blog" >Blog</LinkAsButton>
    </Nav>
);

export default Navigation;