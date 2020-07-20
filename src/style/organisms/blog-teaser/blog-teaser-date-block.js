import styled from 'styled-components';
import trianglify01 from './trianglify-01.png';
import trianglify02 from './trianglify-02.png';
import trianglify03 from './trianglify-03.png';

const trianglifies = [
    trianglify01, trianglify02, trianglify03
];

const BlogTeaserDateBlock = styled.div`
    background-color: ${({theme}) => theme.colors.lightyellow};
    background-image: url('${({index}) => trianglifies[index % 3]}');
    border-radius: 1.33rem;
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
    top: 0;
    left: 0;

    :before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #35353535;
    }

    @media(max-width: ${({theme}) => theme.responsive.mobile}) {
        /* justify-content: center;
        padding-right: 0;
        width: 180px; */
    }
    ${({theme}) => theme.media.phone} {
        height: 125px;
        width: calc(100% + 60px);

        position: relative;
        justify-content: center;
        align-items: center;
        padding: 0 12px;
        order: 0;
        font-size: 24px;
        margin: -30px -30px 0;
    }
`;

export default BlogTeaserDateBlock;