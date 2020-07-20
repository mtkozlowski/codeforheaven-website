import styled from 'styled-components';

const BlogTeaserDateBlock = styled.div`
    color: ${({theme}) => theme.colors.grey};
    font-family: ${({theme}) => theme.font.secondaryFamily};
    letter-spacing: .2em;
    order: 2;
`;

export default BlogTeaserDateBlock;