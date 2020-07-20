import styled from 'styled-components';
import { H3 } from '../../atoms/Headings';

const BlogTeaserTitle = styled(H3)`
    line-height: 1;
    margin-right: auto;

    ${({theme}) => theme.media.phone} {
        margin-top: 1em;
        line-height: 1.2;
    }
`;

export default BlogTeaserTitle;