import styled from 'styled-components';

const BlogTeaserTitle = styled.h3`
    flex: 0 1 60px;

    font-size: ${({theme}) => theme.font.blogPostTitleSize};
    line-height: 1;
    margin: 0 0 0 270px;
    padding-bottom: 12px;

    a {color: ${({theme}) => theme.colors.dark};}

    @media(max-width: ${({theme}) => theme.responsive.mobile}) {
        margin-left: 200px;
    }
    @media(max-width: ${({theme}) => theme.responsive.mobileVertical}) {
        margin-left: 0px;
        font-size: 36px;
        line-height: 1.2;
    }
`;

export default BlogTeaserTitle;