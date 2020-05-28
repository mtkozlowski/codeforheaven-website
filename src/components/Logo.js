import React from "react";
import styled from 'styled-components';
import LogoSrc from '../components/code-for-heaven-logo.png';
import {Link} from 'gatsby';

const Wrapper = styled.div`
    width: 58%;
    ${({atHome})  => atHome && `
        width: 100%;
    `}
`;

const Img = styled.img`
    display: block;
    max-width: 100%;
`;

const Logo = ({ atHome }) => (
    <Wrapper atHome={atHome}>
        <Link to='/'>
            <Img src={LogoSrc} alt="Code for Heaven Logo" title="Code for Heaven Logo" />
        </Link>
    </Wrapper>
)

export default Logo;