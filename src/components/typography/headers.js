import styled from 'styled-components';

const PageHeader = styled.h1`
    font-size: 120px;
    margin: 0 0 80px;
    line-height: 1;
    color: ${({theme}) => theme.colors.blue};
`;
export default PageHeader