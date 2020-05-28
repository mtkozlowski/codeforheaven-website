import styled from 'styled-components';
import { Link } from "gatsby";

export const LinkAsButton = styled(Link)`
    color: ${({theme}) => theme.colors.dark};
    text-decoration: none;
    border: 2px solid ${({theme}) => theme.colors.darkblue};

    border-radius: 24px;
    padding: 0.4em 0.6em;
    display: inline-block;

    &:hover, &:focus {
        background-color: ${({theme}) => theme.colors.darkblue};
        color: ${({theme}) => theme.colors.white};
    }

    &.atHome {
        margin-top: 6rem;
        float: right;
    }
`;

