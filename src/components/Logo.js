import React from "react";
import styled from 'styled-components';
import LogoSrc from '../components/code-for-heaven-logo.png';
import {Link} from 'gatsby';

const Wrapper = styled.div`
    &.atHome {
        margin-top: 12rem;
    }

    h1 {
        visibility: hidden;
        margin: 0;
    }
`;

const Img = styled.img`
    display: block;
    max-width: 100%;
    margin-right: 20px;
`;

const Logo = ({className}) => (
    <Wrapper className={className}>
        <h1>Code for Heaven</h1>
        <Link to='/'>
            <Img src={LogoSrc} alt="Code for Heaven Logo" />
        </Link>
    </Wrapper>
)

export default Logo;