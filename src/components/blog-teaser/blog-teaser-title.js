import styled from 'styled-components';
import { H3 } from '../typography/Headings';

const BlogTeaserTitle = styled(H3)`
    flex: 0 1 60px;

    line-height: 1;
    margin: 0 0 0 240px;
    padding-bottom: 22px;

    a {color: ${({theme}) => theme.colors.dark};}

    @media(max-width: ${({theme}) => theme.responsive.mobile}) {
        margin-left: 200px;
    }

    ${({theme}) => theme.media.phone} {
        margin-top: 1em;
        margin-left: 0px;
        line-height: 1.2;
    }
`;

export default BlogTeaserTitle;