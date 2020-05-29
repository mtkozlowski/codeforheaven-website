import styled from 'styled-components';
import React from 'react';
import {Button} from '../elements/Buttons';
import Logo from '../components/Logo';
import { Link } from "gatsby";

const Nav = styled.nav`
    width: ${({theme}) => theme.regularSection};
    margin: 2rem auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: translate .9s ease-in-out;

    ${({theme}) => theme.media.tablet} {
        margin-top: 1rem;
        width: 100%;
    }

    ${({atHome})  => atHome && `
        transform: translateY(10rem);
        flex-wrap: wrap;

        ${Button} {
            margin-top: 3rem;
            margin-left: auto;
            align-self: flex-end;
            font-size: 1.4em;
            padding: 0.3em 1em;
        }
    `};

    ${({theme}) => theme.media.tablet} {
        margin-top: 0rem;
        padding: 1rem;
        width: 100%;
        transform: translateY(0);
    }
`;

const Navigation = ({ atHome }) => (
    <Nav atHome={atHome} >
        <Logo atHome={atHome} />
        <Button as={Link} to="/blog" >Blog</Button>
    </Nav>
);

export default Navigation;