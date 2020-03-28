import styled from 'styled-components';

const PageHeader = styled.h1`
    font-size: ${({theme}) => theme.font.largeHeaderSize};
    margin: 0 0 80px;
    line-height: 1;
    text-indent: -8px;
`;
export default PageHeader