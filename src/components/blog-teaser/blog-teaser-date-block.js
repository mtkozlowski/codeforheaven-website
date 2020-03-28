import styled from 'styled-components';

const BlogTeaserDateBlock = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.font.subHeaderSize};
    font-weight: 700;
    line-height: 1;

    height: 250px;
    width: 250px;

    padding: 0 12px 12px 0;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    position: absolute;

    @media(max-width: ${({theme}) => theme.responsive.mobile}) {
        justify-content: center;
        padding-right: 0;
        width: 180px;
    }
    @media(max-width: ${({theme}) => theme.responsive.mobileVertical}) {
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 0 12px;
        order: 0;
        height: auto;
        font-size: 24px;
    }
`;

export default BlogTeaserDateBlock;