import styled from 'styled-components';
import { Link } from "gatsby";

export const LinkAsButton = styled(Link)`
    background-color: ${({theme}) => theme.colors.yellow};
    border: 2px solid ${({theme}) => theme.colors.darkblue};
    border-radius: 1.33em;
    color: ${({theme}) => theme.colors.dark};


    display: inline-block;
    padding: 0.4em 0.6em;
    text-decoration: none;

    &:hover, &:focus {
        background-color: ${({theme}) => theme.colors.darkblue};
        color: ${({theme}) => theme.colors.white};
    }
`;

